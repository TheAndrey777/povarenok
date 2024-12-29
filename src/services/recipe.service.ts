import { Category, Recipe } from "../entities/recipe";
import { JSONValue } from "../types/json.type";
import userService from "./user.service";

class RecipeService {
  public async createRecipe(
    userId: number,
    name: string, 
    img: string, 
    description: string, 
    manual: string, 
    time: number, 
    ingredients: JSONValue,
    category: Category = Category.DEFAULT
  ) {
    const user = await userService.getUserById(userId);
    if (!user)
      return;
    const recipe = new Recipe();
    recipe.author = user;
    recipe.name = name;
    recipe.img = img;
    recipe.description = description;
    recipe.manual = manual;
    recipe.time = time;
    recipe.ingredients = ingredients;
    recipe.category = category;
    await recipe.save();
  }

  public async findRecipeById(id: number) {
    return await Recipe.findOne({
      where: {
        id
      },
      relations: {
        author: true
      }
    });
  }

  public async getAllRecipes() {
    return await Recipe.find({
      relations: {
        author: true
      }
    });
  }

  public async addRecipeToFavourites(recipeId: number, userId: number) {
    const user = await userService.getUserById(userId);
    if (!user)
      return;
    const recipe = await this.findRecipeById(recipeId);
    if (!recipe)
      return;
    if (user.favourites.filter((r) => r.id == recipeId).length)
      user.favourites = user.favourites.filter((r) => r.id != recipeId);
    else
      user.favourites.push(recipe);
    await user.save();
  }

  public async deleteById(recipeId: number) {
    return await Recipe.delete({
      id: recipeId
    });
  }
}

export default new RecipeService;