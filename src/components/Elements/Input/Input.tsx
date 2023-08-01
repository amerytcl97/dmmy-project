import { InputHTMLAttributes } from "react";
import "./Input.module.scss";

export type InputProps = {
  onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const Input = (props: InputProps) => {
  const {
    onChange = () => { },
    type = "text"
  } = props;
  return (
    <input
      type={type}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
