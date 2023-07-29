import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.module.scss";
import styles from "./Button.module.scss";
import clsx from "clsx";

type ButtonSizes = {
  sm: string;
  md: string;
}

const sizes: ButtonSizes = {
  sm: styles.buttonSm,
  md: styles.buttonMd,
}

export type ButtonProps = {
  title?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & {
  size?: keyof typeof sizes
};

export const Button = ({ title, startIcon, endIcon, className, onClick, type, size = "md" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(className, sizes[size])}
      type={type}
    >
      {startIcon && startIcon}
      {title && <span>{title}</span>}
      {endIcon && endIcon}
    </button>
  );
};
