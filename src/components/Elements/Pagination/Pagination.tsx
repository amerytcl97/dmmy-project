import { useEffect, useState } from "react";
import "./Pagination.module.scss";

type PaginationProps = {
  pageCount: number;
};

export const Pagination = ({ pageCount }: PaginationProps) => {
  //   const [arrPageCount, setArrPageCount] = useState<number[]>([]);
  //   useEffect(() => {
  //     const formatPageCount = () => {
  //       setArrPageCount(Array.from({ length: pageCount }).map((val) => val));
  //     };
  //     formatPageCount();
  //   }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};
