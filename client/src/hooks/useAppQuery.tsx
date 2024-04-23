/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ActionHandlerActions } from "../constants/constants";
import {
  addMutation,
  deleteMutation,
  fetchData,
  updateMutation,
} from "../helpers/tanstackQueryMutations";

export interface UseAppProps {
  query: string;
  item?: any;
}

const useAppQuery = ({ query }: UseAppProps) => {
  const queryClient = new QueryClient();
  // Queries
  const { data, error, isFetching, isSuccess } = useQuery({
    queryKey: [query],
    queryFn: () => {
      fetchData(query);
    },
  });

  const addDataMutation: any = useMutation({
    mutationFn: (data) => addMutation(query, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [query] });
    },
  });

  const updateDataMutation: any = useMutation({
    mutationFn: () => updateMutation(query, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [query] });
    },
  });

  const deleteDataMutation: any = useMutation({
    mutationFn: () => deleteMutation(query, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [query] });
    },
  });

  if (isSuccess) {
    toast.success("Successfully fetched the data");
  }
  if (error) {
    toast.error("Error");
  }

  const onActionHandler = ({ action, item }: any) => {
    switch (action) {
      case ActionHandlerActions.Add:
        return addDataMutation.mutate(item);

      case ActionHandlerActions.Update:
        return updateDataMutation.mutate(item);

      case ActionHandlerActions.Delete:
        return deleteDataMutation.mutate(item);
    }
  };

  return { data, isFetching, onActionHandler };
};

export default useAppQuery;
