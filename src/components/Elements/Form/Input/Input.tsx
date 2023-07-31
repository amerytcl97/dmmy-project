import { useState } from "react";
import "./Input.module.scss";

export type InputProps = {
  onChange: (value: string) => void;
};

export const Input = () => {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      onChange={(event) => setValue(event?.target.value)}
    />
  );
};
