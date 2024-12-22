import { search } from "../../../assets/svg";

const Search = () => {
  return (
    <label className="w-[260px] h-[34px] border-[1px] border-solid border-default-200 rounded-[10px] m-[8px] cursor-text items-center flex">
      <img src={search} alt="search" className="m-[8px]" />
      <input className=" bg-transparent outline-none border-none text-default-400 absolute left-[44px] text-[16px]" />
    </label>
  );
};

export default Search;
