/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Primitive } from "src/types";

type UseQueryReturnProps<T> = {
  data: T | null;
  loading: boolean;
  error: string;
};

export const useQuery = <T extends Record<string, unknown> | Record<string, unknown>[] | Primitive | Primitive[]>(
  query: string,
  mapFunction?: (data: any) => T,
  headers?: RequestInit
): UseQueryReturnProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout | null;
    const fetchData = async () => {
      const defaultHeaders: RequestInit = {
        method: "GET",
      };
      try {
        const response = await fetch(query, headers || defaultHeaders);
        const json = await response.json();
        setData(typeof mapFunction !== "undefined" ? mapFunction(json) : json);
        setLoading(true);
        // if (typeof mapFunction !== "undefined") {
        //   setData(mapFunction(json));
        // }
        // setData(json);
        // setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (!data) {
      console.log("fetcing");
      timeout = setTimeout(() => {
        fetchData();
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [query]);

  return {
    data,
    loading,
    error,
  };
};
