import FavouriteItem from "./FavouriteItem";
import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { getFavourites, getRecipe } from "../../redux/slices/recipe";
import { setMenuActiveId } from "../../redux/slices/storage";

const FavouriteList = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRecipe());
    dispatch(getFavourites());
    dispatch(setMenuActiveId({ id: 2 }));
  }, []);

  const items = useSelector((state: any) => state.recipe.favourites);
  const findItem = useSelector((state: any) => state.storage.find.findItem);

  return (
    <div>
      {items
        .filter(
          (v: any) =>
            (v.name != undefined &&
              v.name.toLowerCase().includes(findItem.toLowerCase())) ||
            (v.author != undefined &&
              v.author.username
                .toLowerCase()
                .includes(findItem.toLowerCase())) ||
            (v.description != undefined &&
              v.description.toLowerCase().includes(findItem.toLowerCase())) ||
            (v.manual != undefined &&
              v.manual.toLowerCase().includes(findItem.toLowerCase()))
        )
        .map((v: any, i: number) => (
          <FavouriteItem
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
          />
        ))}
    </div>
  );
};

export default FavouriteList;
