import React from "react";
import { FaChevronDown, FaRegClock } from "react-icons/fa6";
import { FiBookmark } from "react-icons/fi";
import { BiLike, BiDislike } from "react-icons/bi";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { setRecipe } from "../../redux/slices/storage";
import { useDispatch } from "react-redux";
import { deleteFavourites, getFavourites } from "../../redux/slices/recipe";
import { cn } from "../../lib/cn";

interface ingredient {
  name: string;
  count: string;
}

interface FavouriteItemProps {
  id: number;
  name: string;
  img: string;
  description: string;
  author: string;
  like: number;
  dislike: number;
  favourites: number;
  ingredients: ingredient[];
  time: string;
  manual: string;
}

const FavouriteItem: React.FC<FavouriteItemProps> = ({
  id = 0,
  name = "",
  img = "",
  description = "",
  author = "",
  like = 0,
  dislike = 0,
  favourites = 0,
  ingredients = [],
  time = "",
  manual = "",
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getCount = (n: number) => {
    if (n % 10 === 1 && n % 100 !== 11) {
      return n + " ингредиент";
    }
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
      return n + " ингредиента";
    }
    return n + " ингредиентов";
  };

  return (
    <div className="bg-layout-background w-full h-[200px] mb-[10px] rounded-[15px] relative">
      <img
        src={img}
        alt="img"
        className="h-[170px] w-[250px] m-[15px] rounded-[10px]"
      ></img>
      <div className="bg-red-3001 h-[170px] w-[calc(100%-280px)] my-[15px] absolute top-0 left-[280px] text-layout-foreground">
        <div className="h-[23px]  text-[18px] font-semibold flex items-center">
          {name}
        </div>
        <div className=" h-[48px] whitespace-normal line-clamp-3 text-ellipsis overflow-hidden  leading-4 font-medium text-[12px]">
          {description}
        </div>
        <div className="text-default-400 font-medium text-[12px] leading-5 underline cursor-pointer  h-[20px]">
          {"Автор:"}
          {author}
        </div>
        <div className="h-[26px]  my-[5px] flex items-center">
          <div className="flex items-center mr-[5px] cursor-pointer rounded-[5px] hover:bg-default-100">
            <FiBookmark className="text-default-400 h-[17px] w-[17px] ml-[3px]" />
            <div className="mx-[5px] text-default-400 text-[14px]">
              {favourites}
            </div>
          </div>

          <div className="flex items-center mr-[5px] cursor-pointer rounded-[5px] hover:bg-default-100">
            <BiLike className="text-default-400 h-[17px] w-[17px] ml-[3px]" />
            <div className="mx-[5px] text-default-400 text-[14px]">{like}</div>
          </div>

          <div className="flex items-center mr-[5px] cursor-pointer rounded-[5px] hover:bg-default-100">
            <BiDislike className="text-default-400 h-[17px] w-[17px] ml-[3px]" />
            <div className="mx-[5px] text-default-400 text-[14px]">
              {dislike}
            </div>
          </div>
        </div>
        <div className="h-[40px]  flex items-center">
          <div className="h-[30px] flex items-center pl-[5px] cursor-pointer bg-transparent hover:bg-default-100 transition-all duration-300 rounded-[7px]">
            <div className="text-[14px] font-medium">
              {getCount(ingredients.length)}
            </div>
            <FaChevronDown className="text-default-500 ml-[10px] mr-[5px]  h-[14px] w-[14px]" />
          </div>
          <span className="h-[25px] w-[1px] bg-default-500 rounded-full mx-[5px]"></span>
          <FaRegClock className="ml-[5px] text-default-500 h-[16px] w-[16px]" />
          <div className=" text-[14px] font-medium ml-[5px]">{time}</div>
        </div>
      </div>

      <Button
        className="absolute right-[15px] bottom-[15px]"
        text="Удалить из избранного"
        onClick={() => {
          dispatch(
            deleteFavourites({
              id,
              onSuccess: () => {
                dispatch(getFavourites());
              },
            })
          );
        }}
      />

      <Button
        className={cn("absolute right-[225px] bottom-[15px]")}
        text="Готовить"
        variant="light"
        onClick={() => {
          dispatch(
            setRecipe({
              id,
              name,
              img,
              description,
              author,
              like,
              dislike,
              favourites,
              ingredients,
              time,
              manual,
            })
          );

          navigate("/home/recipe");
        }}
      />
    </div>
  );
};
export default FavouriteItem;
