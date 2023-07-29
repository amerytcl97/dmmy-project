import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.scss";
import clsx from "clsx";

export type DropdownProps = {
  opener: ({ setExpand }: { setExpand: Dispatch<SetStateAction<boolean>> }) => ReactNode;
  children: ReactNode;
};

export const Dropdown = ({ opener, children }: DropdownProps) => {
  const [expand, setExpand] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMenuClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpand(false);
      }
    };

    document.addEventListener("mousedown", handleMenuClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleMenuClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={styles.dropdown}
    >
      {opener({ setExpand })}
      <div className={clsx(styles.menu, expand ? styles.menuExpand : styles.menuCollapse)}>{children}</div>
    </div>
  );
};
