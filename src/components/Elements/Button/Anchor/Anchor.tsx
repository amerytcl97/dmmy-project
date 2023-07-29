import "./Anchor.module.scss";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { ButtonProps } from "../Button";

// interface AnchorProps  {
//   href: string;
//   children: ReactNode;
//   className?: string;
// } 

type AnchorProps = {
  href: string;
  title: string | ReactNode;
} & Omit<ButtonProps, "onClick" | "type" | "title">

export const Anchor = ({ title, href, className, startIcon, endIcon }: AnchorProps) => {
  return (
    <Link
      to={href}
      className={className}
    >
      {startIcon && startIcon}
      {title}
      {endIcon && endIcon}
    </Link>
  );
};
