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
  const [currentURLs, setCurrentURLs] = useState("");

  const location = useLocation();

  useEffect(() => {
    const formatPagination = () => {
      setPages([]); //Set to empty because HOT RELOAD causes issues.
      const totalPages = Math.ceil(itemsTotal / itemsLimit);
      for (let index = 0; index < totalPages; index++) {
        setPages((state) => [...state, index + 1]);
      }

      console.log('Checking location', location.search);

      if (location.search) {
        if (location.search.indexOf("?")) {
          setCurrentURLs(`${location.pathname}&page=`);
        } else {
          setCurrentURLs(`${location.pathname}?page=`);
        }
      }
    };

    formatPagination();
  }, [currentURLs, itemsLimit, itemsTotal, location.pathname, location.search]);


  if (!pages.length) {
    return null;
  }

  if (!currentURLs) {
    return null;
  }


  return (
    <div className={clsx(styles.pagination, className)}>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <Anchor
              href={`${currentURLs}${page}`}
              title={page}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
