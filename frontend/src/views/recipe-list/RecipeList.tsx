import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";
import React from "react";
import { useDispatch } from "react-redux";
import { getFavourites, getRecipe } from "../../redux/slices/recipe";

const RecipeList = () => {
  const items = useSelector((state: any) => state.recipe.recipes);
  const favourites = useSelector((state: any) => state.recipe.favourites);
  const findItem = useSelector((state: any) => state.storage.find.findItem);
  console.log("-----");
  console.log(favourites);
  console.log(items);
  console.log(favourites.indexOf(favourites[0]));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRecipe());
    dispatch(getFavourites());
  }, []);

  return (
    <div>
      {items
        .filter(
          (v: any) =>
            v.name.toLowerCase().includes(findItem.toLowerCase()) ||
            v.author.toLowerCase().includes(findItem.toLowerCase()) ||
            v.description.toLowerCase().includes(findItem.toLowerCase()) ||
            v.manual.toLowerCase().includes(findItem.toLowerCase())
        )
        .map((v: any, i: number) => (
          <RecipeItem
            key={i}
            id={v.id}
            name={v.name == undefined ? "" : v.name}
            img={v.img == undefined ? "" : v.img}
            description={v.description == undefined ? "" : v.description}
            author={v.author == undefined ? "" : v.author.username}
            like={0}
            dislike={0}
            favourites={0}
            ingredients={v.ingredients == undefined ? [] : v.ingredients}
            time={v.time == undefined ? "" : v.time}
            manual={v.manual == undefined ? "" : v.manual}
            favourite={favourites.find((c: any) => c.id === v.id)}
          />
        ))}
    </div>
  );
};

export default RecipeList;
