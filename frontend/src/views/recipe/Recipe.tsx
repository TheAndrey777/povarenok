import { FaChevronDown, FaRegClock } from "react-icons/fa6";
import { FiBookmark } from "react-icons/fi";
import { BiLike, BiDislike } from "react-icons/bi";
import { useSelector } from "react-redux";

const Recipe = () => {
  const recipe = useSelector((state: any) => state.storage.recipe);
  console.log(recipe);
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
    <div className="bg-layout-background w-full mb-[10px] rounded-[15px] relative text-default-500 pt-[20px] pb-[55px]">
      <div className="h-[23px] text-[24px] font-semibold flex items-center mx-[20px] text-layout-foreground">
        {recipe.name}
      </div>
      <img
        src={recipe.img}
        alt="img"
        className="h-[340px] w-[500px] m-[15px] rounded-[10px] ml-[20px]"
      ></img>
      <div className="font-medium text-[14px] whitespace-pre-wrap ml-[20px] mb-[15px] text-layout-foreground">
        {recipe.description}
      </div>

      <div className="text-default-400 font-medium text-[14px] leading-5 underline cursor-pointer  h-[20px] ml-[20px]">
        {"Автор:"}
        {recipe.author}
      </div>

      <div className="h-[26px]  my-[5px] flex items-center ml-[14px]">
        <div className="flex items-center mr-[5px] cursor-pointer rounded-[5px] hover:bg-default-100">
          <FiBookmark className="text-default-400 h-[17px] w-[17px] ml-[3px]" />
          <div className="mx-[5px] text-default-400 text-[14px]">
            {recipe.favourites}
          </div>
        </div>

        <div className="flex items-center mr-[5px] cursor-pointer rounded-[5px] hover:bg-default-100">
          <BiLike className="text-default-400 h-[17px] w-[17px] ml-[3px]" />
          <div className="mx-[5px] text-default-400 text-[14px]">
            {recipe.like}
          </div>
        </div>

        <div className="flex items-center mr-[5px] cursor-pointer rounded-[5px] hover:bg-default-100">
          <BiDislike className="text-default-400 h-[17px] w-[17px] ml-[3px]" />
          <div className="mx-[5px] text-default-400 text-[14px]">
            {recipe.dislike}
          </div>
        </div>
      </div>

      {/* Time menu */}
      <div className="h-[40px]  flex items-center text-layout-foreground text-[14px] font-medium ml-[20px] mb-[5px]">
        <div className="h-[30px] flex items-center duration-300 rounded-[7px]">
          <div className="text-[14px]">
            {getCount(recipe.ingredients.length)}
          </div>
          <FaChevronDown className="text-default-500 ml-[10px] mr-[5px]  h-[14px] w-[14px]" />
        </div>
        <span className="h-[25px] w-[1px] bg-default-500 rounded-full mx-[15px]"></span>
        <FaRegClock className="ml-[5px] text-default-500 h-[16px] w-[16px]" />
        <div className=" text-[14px] ml-[5px]">{getTime(recipe.time)}</div>
      </div>

      {/* ingredients */}
      <div>
        {recipe.ingredients.map((v: any, i: number) => (
          <div
            key={i}
            className="flex mb-[10px] ml-[30px]  items-center text-layout-foreground text-[14px] font-medium"
          >
            <div className="w-[250px] border-l-0 border-y-0 border-solid border-default-400 border-[1px] pr-[10px]">
              {v.name}
            </div>
            <div className="ml-[15px] "> {v.count} </div>
          </div>
        ))}
      </div>

      <div className="h-[23px] text-[20px] font-semibold flex items-center mx-[20px] text-layout-foreground mb-[10px] mt-[25px]">
        {"Способ приготовления:"}
      </div>

      <div className="font-medium text-[14px] whitespace-pre-wrap ml-[20px] mb-[15px] text-layout-foreground">
        {recipe.manual}
      </div>
    </div>
  );
};
export default Recipe;
