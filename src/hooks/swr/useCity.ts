import useSWR from "swr";
import { fetcher } from "../../services/api";
import { CityData } from "../types";

export const useCity = (id: string) => {
  const { data, error } = useSWR<CityData[]>(`cities?id=${id}`, fetcher);

  return {
    city: data && data[0],
    error,
    isLoading: !data && !error,
  };
};
