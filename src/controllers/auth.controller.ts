import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ValidationException } from "../exceptions/validation.exception";
import { UserExistsException, WrongCredentialsException } from "../exceptions/auth.exceptions";
import { IUser } from "../interfaces/IUser";
import jwt from "jsonwebtoken";
import userService from "../services/user.service";
import bcrypt from "bcrypt";

class AuthController {
  public getUser(req: Request, res: Response, next: NextFunction) {
    res.send({
      status: "success",
      data: {
        id: req.user?.id,
        username: req.user?.username,
        email: req.user?.email,
        isAdmin: req.user?.isAdmin,
      }
    });
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException(errors.array()));
    }

    const result = await userService.findByUsername(req.body.username);
    if (!result) {
      return next(new WrongCredentialsException);
    }

    const isMatch = await bcrypt.compare(req.body.password, result.password);
    if (!isMatch) {
      return next(new WrongCredentialsException);
    }

    const token = jwt.sign({
      id: result.id,
      username: result.username,
      email: result.email,
      isAdmin: result.admin
    } as IUser, process.env.JWT_SECRET || "dev", { expiresIn: "7d" });
    
    res.cookie("auth", token, { secure: true, sameSite: "none" });
    res.send({ 
      status: "success",
      data: {
        username: result.username,
        email: result.email,
        isAdmin: result.admin
      } 
    });
  }

  public async register(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException(errors.array()));
    }

    const dbUser = await userService.findByUsername(req.body.username);
    if (dbUser) {
      return next(new UserExistsException);
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userId = await userService.createUser(
      req.body.username, 
      req.body.email, 
      hashedPassword,
    );
    const token = jwt.sign({
      id: userId,
      username: req.body.username,
      email: req.body.email,
      isAdmin: false
    } as IUser, process.env.JWT_SECRET || "dev", { expiresIn: "7d" });

    res.cookie("auth", token, { secure: true, sameSite: "none" });
    res.send({ status: "success" });
  }
}

export default new AuthController;