import React from "react";
import { cn } from "../../lib/cn";

/* Варианты для скользящего шарика */
const inputAreaVariants = {
  colors: {
    default: "text-default-600 bg-default-200 placeholder-default-600",
    primary: "text-primary bg-primary-100 placeholder-primary",
    secondary: "text-secondary bg-secondary-100 placeholder-secondary",
    success: "text-success bg-success-100 placeholder-success",
    warning: "text-warning bg-warning-100 placeholder-warning",
    danger: "text-danger bg-danger-100 placeholder-danger",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-[8px]",
    md: "rounded-[12px]",
    lg: "rounded-[16px]",
    full: "rounded-full",
  },
  colorsHovered: {
    default: "focus:bg-default-200 hover:bg-default-300",
    primary: "focus:bg-primary-100 hover:bg-primary-200",
    secondary: "focus:bg-secondary-100 hover:bg-secondary-200",
    success: "focus:bg-success-100 hover:bg-success-200",
    warning: "focus:bg-warning-100 hover:bg-warning-200",
    danger: "focus:bg-danger-100 hover:bg-danger-200",
  },
  label: {
    default: "text-default-600",
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-dange",
  },
};

interface SwitchProps {
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "none" | "full";
  disabled?: boolean;
  placeholder?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  id?: string;
  required?: boolean;
  label?: string;
  labelType?: "none" | "in" | "out" | "left" | "in-fixed" | "out-fixed";
  variant?: "flat" | "faded" | "bordered" | "underlined";
  className?: string;
  defaultState?: string;
  onChange: (state: string) => void;
}

export const InputArea: React.FC<SwitchProps> = ({
  size = "sm",
  radius = "md",
  id = "",
  disabled = false,
  required = false,
  color = "default",
  label = "",
  labelType = "in",
  placeholder = "",
  variant = "flat",
  className,
  onChange,
  defaultState = "",
}) => {
  const [value, setValue] = React.useState<string>(defaultState);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    onChange(value);
  }, [value]);

  if (labelType == "in" || labelType == "in-fixed")
    return (
      <label
        className={cn(
          "grid relative select-none group cursor-text overflow-hidden ",
          disabled && "pointer-events-none opacity-50",
          className
        )}
      >
        {/* Основной контейнер,  */}
        <div
          className={cn(
            "box-border z-10 relative transition-all duration-300 w-full flex items-center px-3 rounded-[12px] overflow-hidden",
            variant == "flat" &&
              "group-hover:bg-default-300 group-focus-within:bg-default-300 bg-default-200",
            variant == "faded" &&
              "group-hover:bg-default-300 group-focus-within:bg-default-300 bg-default-200 border-[2px] border-default-300 group-focus-within:border-default group-hover:border-default",
            variant == "bordered" &&
              "border-[2px] border-default-300 group-focus-within:border-default group-hover:border-default",
            inputAreaVariants.radius[radius]
          )}
        >
          <textarea
            className={cn(
              "outline outline-transparent border-none transition-all duration-300 bg-transparent  bottom-0 placeholder-default-500 text-layout-foreground w-full px-3 pt-[18px] box-border h-auto ",
              placeholder == "" && value == ""
                ? "opacity-0 focus:opacity-100 group-focus-within:mt-[10px] group-focus-within:mb-[10px]"
                : " [&:-webkit-autofill+*]:text-white mt-[10px] mb-[10px]",
              inputAreaVariants.radius[radius]
            )}
            ref={textareaRef}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <div
            className={cn(
              "absolute text-default-600 transition-all duration-300",
              placeholder == "" && value == "" && labelType != "in-fixed"
                ? "top-[30%] text-[16px] group-focus-within:top-0 group-focus-within:mt-[4px] group-focus-within:text-[12px] group-focus-within:text-default-700"
                : "top-0 text-[12px] mt-[4px] text-default-700"
            )}
          >
            {label}
            {required && <span className="text-danger m-[2px]">*</span>}
          </div>
        </div>
      </label>
    );

  return <></>;
};
