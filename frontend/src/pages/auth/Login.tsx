import React from "react";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slices/user";
import { setUsername, setPassword } from "../../redux/slices/user";
import { cn } from "../../lib/cn";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputUsername, setInputUsername] = React.useState<string>("");
  const [inputPassword, setInputPassword] = React.useState<string>("");
  const [inputClickLogin, setInputClickLogin] = React.useState<boolean>(false);

  const changeUsername = (s: string) => {
    dispatch(setUsername(s));
    setInputUsername(s);
  };
  const changePassword = (s: string) => {
    dispatch(setPassword(s));
    setInputPassword(s);
  };

  const isAuthorised = useSelector((state: any) => state.user.isAuthorized);

  React.useEffect(() => {
    if (isAuthorised) navigate("/home/offices");
  }, [isAuthorised]);

  const clickLogin = () => {
    setInputClickLogin(true);
    if (inputUsername == "" || inputPassword == "") return;
    setInputClickLogin(false);
    dispatch(loginUser());

    if (isAuthorised) navigate("/home/offices");
  };
  const clickNavigateRegister = () => {
    navigate("/auth/register");
  };
  return (
    <div className="h-full w-full bg-default-100 flex items-center justify-center">
      <div className=" bg-layout-background w-[25rem] h-[34.375rem] rounded-[15px] box-border p-[25px] relative">
        <div className="text-content-1 w-full h-[3.125rem] text-[28px] font-bold text-center">
          Вход в аккаунт
        </div>
        <div className="text-content-1  w-full h-[3.4375rem] text-[12px] text-center mt-[15px]">
          Для начала работы вам необходимо войти в аккаунт. Заполните поля ниже
          и нажмите кнопку войти
        </div>

        <div className="mt-[15px]">
          <div
            className={cn(
              "text-[14px] text-danger font-medium h-0 transition-all mt-[20px] overflow-hidden",
              inputClickLogin && inputUsername == "" && "h-[21px]"
            )}
          >
            Поле не может быть пустым
          </div>
          <Input
            color="danger"
            required
            label="Логин"
            radius="sm"
            className="w-[22rem]"
            onChange={changeUsername}
          />
          <div
            className={cn(
              "text-[14px] text-danger font-medium h-0 transition-all mt-[15px] overflow-hidden",
              inputClickLogin && inputPassword == "" && "h-[21px]"
            )}
          >
            Поле не может быть пустым
          </div>
          <Input
            required
            label="Пароль"
            type="password"
            radius="sm"
            className="w-[22rem]"
            onChange={changePassword}
          />
        </div>

        <div className="w-[calc(100%-50px)] absolute bottom-0">
          <Button
            className="w-full mb-[8px]"
            size="lg"
            onClick={clickLogin}
            text="Войти"
          />
          <Button
            variant="bordered"
            color="default"
            className="w-full  mb-[25px]"
            size="lg"
            onClick={clickNavigateRegister}
            text="Зарегистрироваться"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
