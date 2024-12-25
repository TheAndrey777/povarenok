import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ValidationException } from "../exceptions/validation.exception";
import recipeService from "../services/recipe.service";
import { HttpException } from "../exceptions/http.exception";

class RecipeController {
  async createRecipe(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException(errors.array()));
    }

    await recipeService.createRecipe(
      req.user?.id!,
      req.body.name,
      req.body.img,
      req.body.description,
      req.body.manual,
      req.body.time,
      JSON.parse(req.body.ingredients)
    );

    res.send({ status: "success" });
  }

  async deleteRecipe(req: Request, res: Response, next: NextFunction) {
  }

  async getRecipe(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException(errors.array()));
    }

    const recipe = await recipeService.findRecipeById(parseInt(req.params.id));
    if (!recipe) {
      return next(new HttpException(404, "Рецепт не найден"));
    }

    res.send({
      status: "success",
      data: recipe
    });
  }

  async getAllRecipes(req: Request, res: Response, next: NextFunction) {
    const recipes = await recipeService.getAllRecipes();
    res.send({
      status: "success",
      data: recipes
    });
  }
}

export default new RecipeController;