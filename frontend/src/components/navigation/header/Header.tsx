import { useNavigate } from "react-router-dom";
import { Button } from "../../button/Button";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const clickRegister = () => {
    navigate("/auth/login");
  };

  return (
    <div className="bg-layout-background absolute top-[10px] left-[260px] w-[calc(100%-260px)] h-[50px] rounded-[15px] ">
      <Search />
      <div className="text-layout-foreground absolute top-[30%] right-[100px]">
        Генадий Короткевич
      </div>
      <div className="absolute right-[10px] top-0 flex justify-center items-center h-full">
        <Button onClick={clickRegister} text="Выйти" size="sm" />
      </div>
    </div>
  );
};

export default Header;
