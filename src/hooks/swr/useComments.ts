import useSWR from "swr";
import { fetcher } from "../../services/api";
import { CommentData } from "./types";

export const useComments = (locationId: string) => {
  const { data: comments, error } = useSWR<CommentData[]>(
    `comments?locationId=${locationId}`,
    fetcher
  );

  return {
    comments,
    error,
    isLoading: !comments && !error,
  };
};
