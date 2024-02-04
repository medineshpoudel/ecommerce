/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import BaseService from "../services/Base.service";

export interface UseAppProps {
  query: string;
}

const useApp = ({ query }: UseAppProps) => {
  // Queries
  const { data, error, isFetching, isSuccess } = useQuery({
    queryKey: [query],
    queryFn: async () => {
      const response = await BaseService.get({ query });
      return response.data;
    },
  });

  if (isSuccess) {
    toast.success("Successfully fetched the data");
  }
  if (error) {
    console.log(error);
    // eslint-disable-next-line no-debugger
    debugger;
    toast.error("Error");
  }

  return { data, isFetching };
};

export default useApp;
