import { Key, ReactNode } from "react";
import clsx from "clsx";
import { Primitive } from "src/types";
import styles from "./List.module.scss";

type ListProps<TList> = {
  items: TList[];
  itemKey: TList extends Record<string, unknown> ? keyof (TList & Partial<{ index: number }>) : "data";
  renderItems: (type: { value: TList; index: number }) => ReactNode;
  emptyComponent?: ReactNode;
  className?: string;
};

export const List = <TList extends Record<string, unknown> | Primitive>(props: ListProps<TList>) => {
  const { items = [], renderItems, itemKey, className, emptyComponent } = props;

  // console.log('Checking items', items);

  if (!items || !items.length) {
    return <>{emptyComponent}</>;
  }

  return (
    <ul className={clsx(styles.list, className)}>
      {items.map((value, index) => {
        let selectedIndex;
        if (itemKey == "index") {
          selectedIndex = index;
        } else if (itemKey == "data") {
          selectedIndex = value;
        } else {
          selectedIndex = value[itemKey as keyof TList];
        }
        return <li key={selectedIndex as Key}>{renderItems({ value: value, index: index })}</li>;
      })}
    </ul>
  );
};
