import { Button } from "../../components/button/Button";
import { Checkbox } from "../../components/checkbox/Checkbox";
import { Input } from "../../components/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setEmail,
  setUsername,
  setPassword,
  registerUser,
} from "../../redux/slices/user";
import React from "react";
import { cn } from "../../lib/cn";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputUsername, setInputUsername] = React.useState<string>("");
  const [inputEmail, setInputEmail] = React.useState<string>("");
  const [inputPassword, setInputPassword] = React.useState<string>("");
  const [inputRepeatPassword, setInputRepeatPassword] =
    React.useState<string>("");
  const [inputChecked, setInputChecked] = React.useState<boolean>(false);
  const [inputClickRegister, setInputClickRegister] =
    React.useState<boolean>(false);

  const changeEmail = (s: string) => {
    setInputEmail(s);
    dispatch(setEmail(s));
  };
  const changeUsername = (s: string) => {
    setInputUsername(s);
    dispatch(setUsername(s));
  };
  const changePassword = (s: string) => {
    setInputPassword(s);
    dispatch(setPassword(s));
  };

  const { username, email } = useSelector((state: any) => state.user);

  const isAuthorized = useSelector((state: any) => state.user.isAuthorized);

  React.useEffect(() => {
    if (isAuthorized) navigate("/home/offices");
  }, [isAuthorized]);

  const clickNavigateLogin = () => {
    navigate("/auth/login");
  };

  const completeRegister = () => {
    setInputClickRegister(true);
    if (
      inputChecked == false ||
      inputEmail == "" ||
      inputUsername == "" ||
      inputPassword == "" ||
      inputRepeatPassword == "" ||
      inputPassword != inputRepeatPassword
    )
      return;
    setInputClickRegister(false);
    dispatch(registerUser());
    if (isAuthorized) navigate("/home");
  };

  return (
    <div className="h-full w-full bg-default-100 flex items-center justify-center">
      <div className=" bg-layout-background w-[25rem]  rounded-[15px] box-border p-[25px] relative">
        <div className="text-content-1 w-full h-[3.125rem] text-[28px] font-bold text-center">
          Регистрация аккаунта
        </div>
        <div className="text-content-1  w-full h-[3.4375rem] text-[12px] text-center mt-[15px]">
          Для начала работы вам необходимо создать аккаунт. Заполните поля ниже
          и нажмите кнопку продолжить
        </div>

        <div>
          <div
            className={cn(
              "text-[14px] text-danger font-medium h-0 transition-all mt-[15px] overflow-hidden",
              inputClickRegister && inputUsername == "" && "h-[21px]"
            )}
          >
            Поле не может быть пустым
          </div>
          <Input
            required
            label="Логин"
            radius="sm"
            className="w-[22rem]"
            onChange={changeUsername}
            defaultState={username}
          />
          <div
            className={cn(
              "text-[14px] text-danger font-medium h-0 transition-all mt-[15px] overflow-hidden",
              inputClickRegister && inputEmail == "" && "h-[21px]"
            )}
          >
            Поле не может быть пустым
          </div>
          <Input
            required
            label="Почта"
            type="email"
            radius="sm"
            className="w-[22rem]"
            onChange={changeEmail}
            defaultState={email}
          />
          <div
            className={cn(
              "text-[14px] text-danger font-medium h-0 transition-all mt-[15px] overflow-hidden",
              inputClickRegister && inputPassword == "" && "h-[21px]"
            )}
          >
            Поле не может быть пустым
          </div>
          <div
            className={cn(
              "text-[14px] text-danger font-medium h-0 transition-all overflow-hidden",
              inputClickRegister &&
                inputRepeatPassword != inputPassword &&
                "h-[21px]"
            )}
          >
            Пароли не совпадают
          </div>
          <Input
            required
            label="Пароль"
            type="password"
            radius="sm"
            className="w-[22rem]"
            onChange={changePassword}
          />
          <div
            className={cn(
              "text-[14px] text-danger font-medium h-0 transition-all mt-[15px] overflow-hidden",
              inputClickRegister && inputRepeatPassword == "" && "h-[21px]"
            )}
          >
            Поле не может быть пустым
          </div>
          <div
            className={cn(
              "text-[14px] text-danger font-medium h-0 transition-all overflow-hidden",
              inputClickRegister &&
                inputRepeatPassword != inputPassword &&
                "h-[21px]"
            )}
          >
            Пароли не совпадают
          </div>
          <Input
            required
            label="Повторите пароль"
            type="password"
            radius="sm"
            className="w-[22rem]"
            onChange={setInputRepeatPassword}
          />

          <div
            className={cn(
              "text-[14px] text-danger font-medium h-0 transition-all overflow-hidden mt-[20px]",
              inputClickRegister && inputChecked == false && "h-[21px]"
            )}
          >
            Это обязательное поле
          </div>
          <div className="relative">
            <Checkbox
              className="z-10"
              onChange={(state: boolean) => {
                setInputChecked(state);
              }}
            />
            <div className="text-[10px] absolute top-0 left-[35px] text-content-1">
              Согласен с Условиями обслуживания и Политикой конфиденциальности
            </div>
          </div>
        </div>

        <Button
          className="w-full mb-[8px] mt-[20px]"
          size="lg"
          onClick={completeRegister}
          text="Зарегистрироваться"
        />
        <Button
          variant="bordered"
          color="default"
          className="w-full  mb-[25px]"
          size="lg"
          onClick={clickNavigateLogin}
          text="Вернуться ко входу"
        />
      </div>
    </div>
  );
};

export default Register;
