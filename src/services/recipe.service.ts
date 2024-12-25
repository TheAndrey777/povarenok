import { Recipe } from "../entities/recipe";
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
    ingredients: JSONValue
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
    return await Recipe.find();
  }
}

export default new RecipeService;