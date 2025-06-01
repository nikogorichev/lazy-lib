import { type ButtonHTMLAttributes, type ReactNode } from "react";
import cls from "./Button.module.css";
import { classNames, type Mods } from "@/lib/helpers";

type ButtonTheme = "primary" | "secondary" | "clear";
type ButtonSize = "size_m" | "size_l" | "size_xl";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button = (props: Props) => {
  const {
    className,
    children,
    disabled,
    theme = "primary",
    size = "size_m",
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  const optional: string[] = [ className || "", cls[theme], cls[size] ];

  return (
    <button className={classNames(cls.button, mods, optional)} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
};
