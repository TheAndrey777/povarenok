import { Request, Response, NextFunction } from "express";
import userService from "../services/user.service";
import { HttpException } from "../exceptions/http.exception";

class UserController {
  async getFavouriteRecipes(req: Request, res: Response, next: NextFunction) {
    const user = await userService.getUserById(req.user?.id!);
    if (!user) {
      return next(new HttpException(404, "Пользователь не найден"));
    }
    res.send({
      status: "success",
      data: user.favourites
    });
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    const user = await userService.getUserById(req.user?.id!);
    if (!user) {
      return next(new HttpException(404, "Пользователь не найден"));
    }
    res.send({
      status: "success",
      data: user
    });
  }
}

export default new UserController;