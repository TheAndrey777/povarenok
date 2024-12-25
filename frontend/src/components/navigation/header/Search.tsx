import { useDispatch } from "react-redux";
import { search } from "../../../assets/svg";
import { setFindItem } from "../../../redux/slices/storage";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <label className="w-[260px] h-[34px] border-[1px] border-solid border-default-200 rounded-[10px] m-[8px] cursor-text items-center flex">
      <img src={search} alt="search" className="m-[8px]" />
      <input
        className=" bg-transparent outline-none border-none text-default-400 absolute left-[44px] text-[16px]"
        onChange={(v) => {
          dispatch(setFindItem({ findItem: v.target.value }));
        }}
      />
    </label>
  );
};

export default Search;
