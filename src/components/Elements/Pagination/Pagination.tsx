import { useEffect, useState } from "react";
import styles from "./Pagination.module.scss";
import { Anchor } from "@components/index";

type PaginationProps = {
  itemsTotal: number;
  itemsLimit: number;
  // getSelectedPage: (page: number) => void;
};

export const Pagination = ({ itemsTotal, itemsLimit }: PaginationProps) => {

  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const formatPagination = () => {
      setPages(Array.from({
        length: (() => {
          const totalPages = itemsTotal / itemsLimit;
          return totalPages;
        })()
      }))
    };

    formatPagination();
  }, [itemsLimit, itemsTotal])

  return (
    <div className={styles.pagination}>
      <ul>
        {pages.map((page) =>
          <li>
            <Anchor href={""} title={page} />
          </li>)
        }
      </ul>
    </div>
  );
};
