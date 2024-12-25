import express from "express";
import RecipeController from "../controllers/recipe.controller";
import { body } from "express-validator";
import { isAuthorized } from "../middlewares/auth.middleware";
import { param } from "express-validator";

export const recipeRouter = express.Router();

recipeRouter.get(
  "/:id",
  param("id")
    .exists().withMessage("Параметр id отсутствует")
    .isInt({ min: 1, max: 1e9 }).withMessage("Параметр id должен быть числом. И должен быть от 1 до 1e9"),
  RecipeController.getRecipe
);

recipeRouter.post(
  "/:id/favourite",
  param("id")
    .exists().withMessage("Параметр id отсутствует")
    .isInt({ min: 1, max: 1e9 }).withMessage("Параметр id должен быть числом. И должен быть от 1 до 1e9"),
  RecipeController.addToFavourites
);

recipeRouter.delete(
  "/:id",
  isAuthorized,
  RecipeController.deleteRecipe
);

recipeRouter.post(
  "/",
  isAuthorized,
  body("name")
    .exists().withMessage("Поле name отсутствует")
    .isLength({ min: 1, max: 128 }).withMessage("Длина поля name не соответствует ограничениям"),
  body("img")
    .exists().withMessage("Поле img отсутствует")
    .isLength({ min: 0, max: 512 }).withMessage("Длина поля img не соответствует ограничениям"),
  body("description")
    .exists().withMessage("Поле description отсутствует")
    .isLength({ min: 1, max: 2048 }).withMessage("Длина поля description не соответствует ограничениям"),
  body("manual")
    .exists().withMessage("Поле manual отсутствует")
    .isLength({ min: 1, max: 2048 }).withMessage("Длина поля manual не соответствует ограничениям"),
  body("time")
    .exists().withMessage("Поле time отсутствует")
    .isInt({ min: 1, max: 1e9 }).withMessage("Поле id должно быть числом от 1 до 1e9"),
  body("ingredients")
    .exists().withMessage("Поле ingredients отсутствует")
    .isJSON().withMessage("Поле ingredients должно содержать JSON"),
  RecipeController.createRecipe
);

recipeRouter.get(
  "/",
  RecipeController.getAllRecipes
);