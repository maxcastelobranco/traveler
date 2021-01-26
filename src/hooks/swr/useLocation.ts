import useSWR from "swr";
import { fetcher } from "../../services/api";
import { LocationData } from "./types";

export const useLocation = (id: string) => {
  const { data: location, error } = useSWR<LocationData>(`locations/${id}`, fetcher);

  return {
    location,
    error,
    isLoading: !location && !error,
  };
};
