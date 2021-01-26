import useSWR from "swr";
import { fetcher } from "../../services/api";
import { CityData } from "./types";

export const useCity = (id: string) => {
  const { data: city, error } = useSWR<CityData>(`cities/${id}`, fetcher);

  return {
    city,
    error,
    isLoading: !city && !error,
  };
};
