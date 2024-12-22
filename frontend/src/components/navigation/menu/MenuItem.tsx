import React from "react";
import { cn } from "../../../lib/cn";

interface MenuItemProps {
  name: string;
  Icon: any;
  isActive: boolean;
  opened?: boolean;
  onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  Icon,
  isActive,
  opened,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "h-[40px] w-[calc(100%-20px)] min-w-[40px] flex overflow-hidden cursor-pointer mb-[8px] rounded-[5px] transition-all duration-300 ",
        isActive && "bg-primary-100",
        !isActive && "hover:scale-[1.05] hover:bg-primary-100 active:scale-100",
        isActive && !opened && "ml-[10px]"
      )}
      onClick={() => {
        onClick();
      }}
    >
      <div className="h-full aspect-square flex items-center justify-center select-none">
        <Icon
          className={cn(
            "h-[20px] w-[20px] text-default-300 transition-colors delay-0 duration-75",
            isActive && "text-primary"
          )}
        />
      </div>
      <div
        className={cn(
          "flex items-center text-default-500 select-none transition-all",
          isActive && "text-primary font-semibold"
        )}
      >
        {name}
      </div>
    </div>
  );
};
