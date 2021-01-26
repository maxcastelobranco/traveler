import useSWR from "swr";
import api from "../../services/api";
import { CityData } from "./types";
import React from "react";

interface UseListPageCitiesParams {
  page: number;
  limit: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const useListPageCities = ({ page, limit, setCount }: UseListPageCitiesParams) => {
  const { data: cities, error } = useSWR<CityData[]>(
    `cities?_page=${page}&_limit=${limit}`,
    async (url: string) => {
      const { data, headers } = await api.get(url);

      const count = Math.ceil(Number(headers["x-total-count"]) / limit);
      setCount(count);

      return data;
    }
  );

  return {
    cities,
    error,
    isLoading: !cities && !error,
  };
};
