import express from "express";
import { isAuthorized } from "../middlewares/auth.middleware";
import UserController from "../controllers/user.controller";

export const userRouter = express.Router();

userRouter.get(
  "/favourites",
  isAuthorized,
  UserController.getFavouriteRecipes
);

userRouter.get(
  "/profile",
  isAuthorized,
  UserController.getProfile
);