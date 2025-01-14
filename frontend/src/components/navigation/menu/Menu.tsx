import React from "react";
import { cn } from "../../../lib/cn";
import { MenuItem } from "./MenuItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { FaEdit, FaHome } from "react-icons/fa";
import { menulogo } from "../../../assets/svg";
import { setMenuActiveId } from "../../../redux/slices/storage";

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = [
    {
      name: "Главная",
      icon: FaHome,
      isActive: false,
      onClick: () => {
        navigate("/home/recipe-list");
      },
    },
    {
      name: "Редактор",
      icon: FaEdit,
      isActive: false,
      onClick: () => {
        navigate("/home/recipe-editor");
      },
    },
    {
      name: "Избранное",
      icon: FaStar,
      isActive: false,
      onClick: () => {
        navigate("/home/favourite-list");
      },
    },
  ];

  const [a, seta] = React.useState("");
  const active = useSelector((state: any) => state.storage.menu.activeId);

  return (
    <div
      className={cn(
        "w-[260px] h-full transition-all relative overflow-hidden ",
        a
      )}
      onClick={() => {
        //seta("w-[60px]");
        //if (a == "w-[60px]") seta("");
      }}
    >
      <div
        className={cn(
          "bg-layout-background h-[calc(100%-20px)] w-[240px] absolute top-[10px] left-[10px]  transition-all px-[10px] box-border rounded-[15px]",
          a
        )}
      >
        <img src={menulogo} alt="logo" className=" mt-[10px]" />
        <div className="mt-[5px]">
          {items.map((v: any, i: number) => {
            return (
              <MenuItem
                key={i}
                name={v.name}
                Icon={v.icon}
                opened={a == "w-[60px]"}
                isActive={i == active}
                onClick={() => {
                  dispatch(setMenuActiveId({ id: i }));
                  localStorage.setItem("openedView", JSON.stringify(i));
                  v.onClick();
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
