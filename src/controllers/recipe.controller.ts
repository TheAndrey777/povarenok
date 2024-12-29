import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ValidationException } from "../exceptions/validation.exception";
import { HttpException } from "../exceptions/http.exception";
import recipeService from "../services/recipe.service";

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
      JSON.parse(req.body.ingredients),
      req.body?.category
    );

    res.send({ status: "success" });
  }

  async deleteRecipe(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException(errors.array()));
    }

    await recipeService.deleteById(parseInt(req.params.id));
    res.send({
      status: "success"
    });
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

  async addToFavourites(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ValidationException(errors.array()));
    }

    const recipe = await recipeService.findRecipeById(parseInt(req.params.id));
    if (!recipe) {
      return next(new HttpException(404, "Рецепт не найден"));
    }

    recipeService.addRecipeToFavourites(parseInt(req.params.id), req.user?.id!);
    res.send({ status: "success" });
  }
}

export default new RecipeController;