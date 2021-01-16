import useSWR from "swr";
import { fetcher } from "../services/api";

export interface CityData {
  id: string;
  name: string;
  image: string;
  numberOfLocations: number;
}

export const useHomePageCities = (limit: number) => {
  const { data: cities, error } = useSWR<CityData[]>(`cities?_limit=${limit}`, fetcher);

  return {
    cities,
    error,
    isLoading: !cities && !error,
  };
};
