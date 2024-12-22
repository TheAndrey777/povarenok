import { Button } from "../../button/Button";
import Search from "./Search";

const Header = () => {
  const clickRegister = () => {
    console.log(1);
  };

  return (
    <div className="bg-layout-background absolute top-[10px] left-[260px] w-[calc(100%-260px)] h-[50px] rounded-[15px] ">
      <Search />
      <div className="absolute right-[10px] top-0 flex justify-center items-center h-full">
        <Button onClick={clickRegister} text="Войти" size="sm" />
      </div>
    </div>
  );
};

export default Header;
