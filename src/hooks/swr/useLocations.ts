import useSWR from "swr";
import { fetcher } from "../../services/api";
import { LocationData } from "../types";

export const useLocations = (cityId: string) => {
  const { data: locations, error } = useSWR<LocationData[]>(
    `locations?_sort=name&cityId=${cityId}`,
    fetcher
  );

  return {
    locations,
    error,
    isLoading: !locations && !error,
  };
};
