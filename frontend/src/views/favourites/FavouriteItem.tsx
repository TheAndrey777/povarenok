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
  time: number;
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
  time = 0,
  manual = "",
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(false);
  const getCount = (n: number) => {
    if (n % 10 === 1 && n % 100 !== 11) {
      return n + " ингредиент";
    }
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
      return n + " ингредиента";
    }
    return n + " ингредиентов";
  };

  const getHour = (n: number) => {
    if (n == 0) return "";
    if (n % 10 === 1 && n % 100 !== 11) return n + " час";
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20))
      return n + " часа";
    return n + " часов";
  };
  const getMinute = (n: number) => {
    if (n == 0) return "";
    if (n % 10 === 1 && n % 100 !== 11) return n + " минута";
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20))
      return n + " минуты";
    return n + " минут";
  };

  const getTime = (n: number) => {
    return getHour(Math.floor(n / 60)) + " " + getMinute(n % 60);
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
          <div
            className="h-[30px] flex items-center pl-[5px] cursor-pointer bg-transparent hover:bg-default-100 transition-all duration-300 rounded-[7px] relative"
            onClick={() => setActive(!active)}
          >
            <div className="text-[14px] font-medium select-none">
              {getCount(ingredients.length)}
            </div>
            <FaChevronDown
              className={cn(
                "text-default-500 ml-[10px] mr-[5px]  h-[14px] w-[14px]rotate-0 transition-all",
                active && "rotate-180"
              )}
            />
            <div
              className={cn(
                " bg-layout-background border-transparent border-solid border-[1px] min-w-[400px] grid-rows-[0fr] absolute top-[100%] left-0 grid  overflow-hidden transition-all rounded-[10px]  z-10 mt-[5px]",
                active && "grid-rows-[1fr] border-default-300"
              )}
            >
              <div className="w-[100%] overflow-hidden">
                {ingredients.map((v, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex mb-[10px] ml-[10px]  items-center text-layout-foreground text-[14px] font-medium overflow-hidden",
                      i == 0 && "mt-[10px]"
                    )}
                  >
                    <div className="w-[250px] min-w-[250px] border-l-0 border-y-0 border-solid border-default-400 border-[1px] pr-[10px]">
                      {v.name}
                    </div>
                    <div className="ml-[15px] w-[100px]"> {v.count} </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className="h-[25px] w-[1px] bg-default-500 rounded-full mx-[5px]"></span>
          <FaRegClock className="ml-[5px] text-default-500 h-[16px] w-[16px]" />
          <div className=" text-[14px] font-medium ml-[5px]">
            {getTime(time)}
          </div>
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
