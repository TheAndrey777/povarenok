import { useNavigate } from "react-router-dom";
import { Button } from "../../button/Button";
import Search from "./Search";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { isAuthorizedFalse } from "../../../redux/slices/user";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authorized = useSelector((state: any) => state.user.isAuthorized);
  const username = useSelector((state: any) => state.user.username);

  const clickRegister = () => {
    Cookie.remove("auth");
    dispatch(isAuthorizedFalse());
    navigate("/auth/login");
  };

  return (
    <div className="bg-layout-background absolute top-[10px] left-[260px] w-[calc(100%-260px)] h-[50px] rounded-[15px] ">
      <Search />
      {authorized && (
        <div className=" absolute top-0 right-[100px] h-full flex items-center text-default">
          {username}
        </div>
      )}
      <div className="absolute right-[10px] top-0 flex justify-center items-center h-full">
        <Button
          onClick={clickRegister}
          variant="light"
          text={authorized ? "Выйти" : "Войти"}
          size="sm"
        />
      </div>
    </div>
  );
};

export default Header;
