import { Dispatch, FormEvent, ReactNode, SetStateAction, useState } from "react";
import styles from "./SearchForm.module.scss";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

interface SearchFormProps {
  children: ({ setSearchQuery }: { setSearchQuery: Dispatch<SetStateAction<string>> }) => ReactNode;
  to: string;
  className?: string;
}

export const SearchForm = ({ children, to, className }: SearchFormProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`${to}${searchQuery}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={clsx(styles.form, className)}
    >
      {children({ setSearchQuery })}
    </form>
  );
};
