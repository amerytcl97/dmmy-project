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
  const [currentURL, setCurrentURL] = useState("");

  const location = useLocation();

  useEffect(() => {
    const formatPagination = () => {
      setPages([]); //Set to empty because HOT RELOAD causes issues.
      const totalPages = Math.ceil(itemsTotal / itemsLimit);
      for (let index = 0; index < totalPages; index++) {
        setPages((state) => [...state, index + 1]);
      }

      if (location.search) {
        if (location.search.indexOf("?")) {
          setCurrentURL(`${location.pathname}&page=`);
        } else {
          setCurrentURL(`${location.pathname}?page=`);
        }
      }
    };

    formatPagination();
  }, [itemsLimit, itemsTotal, location.pathname, location.search]);

  return (
    <div className={clsx(styles.pagination, className)}>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Anchor
              href={`${currentURL}${page}`}
              title={page}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
