import { Key, ReactNode } from "react";
import clsx from "clsx";
import { Primitive } from "src/types";
import styles from "./List.module.scss";
import { Pagination } from "@components/index";
import { API_GET_PRODUCTS_LIMIT } from "@constants";

type ListProps<TList> = {
  items: TList[];
  itemKey: TList extends Record<string, unknown> ? keyof (TList & Partial<{ index: number }>) : "data";
  renderItems: (type: { value: TList; index: number }) => ReactNode;
  emptyComponent?: ReactNode;
  className?: string;
  includePagination?: boolean;
};

export const List = <TList extends Record<string, unknown> | Primitive>(props: ListProps<TList>) => {
  const { items = [], renderItems, itemKey, className, emptyComponent, includePagination = false } = props;

  if (!items || !items.length) {
    return <>{emptyComponent}</>;
  }

  return (
    <>
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
      {includePagination && (
        <Pagination
          itemsTotal={100}
          itemsLimit={API_GET_PRODUCTS_LIMIT}
        />
      )}
    </>
  );
};
