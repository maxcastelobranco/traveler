import useSWR from "swr";
import { fetcher } from "../../services/api";
import { CityData } from "../types";

export const useHomePageCities = (limit: number) => {
  const { data: cities, error } = useSWR<CityData[]>(`cities?_limit=${limit}`, fetcher);

  return {
    cities,
    error,
    isLoading: !cities && !error,
  };
};
