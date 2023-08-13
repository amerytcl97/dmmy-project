import { useEffect, useState } from "react";
import { Anchor } from "@components/index";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  itemsTotal: number;
  itemsLimit: number;
  className?: string;
};

export const Pagination = ({ itemsTotal, itemsLimit, className }: PaginationProps) => {
  const [pages, setPages] = useState<number[]>([]);
  const location = useLocation();

  const formatHref = (page: number) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page.toString());
    return `${location.pathname}?${searchParams.toString()}`;
  }

  useEffect(() => {
    const formatPagination = () => {
      setPages([]); //Set to empty because HOT RELOAD causes issues.
      const totalPages = Math.ceil(itemsTotal / itemsLimit);
      for (let index = 0; index < totalPages; index++) {
        setPages((state) => [...state, index + 1]);
      }
    };

    formatPagination();
  }, [itemsLimit, itemsTotal]);

  return (
    <div className={clsx(styles.pagination, className)}>
      {/* {location.pathname} */}
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Anchor
              href={formatHref(page)}
              title={page}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
