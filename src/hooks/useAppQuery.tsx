/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ActionHandlerActions } from "../constants/constants";
import { ToastMessage } from "../constants/staticList";
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
  const queryClient = useQueryClient();
  // Queries
  const { data, error, isFetching } = useQuery({
    queryKey: [query],
    queryFn: async () => {
      const response = await fetchData(query);
      return response;
    },
  });

  const addDataMutation: any = useMutation({
    mutationFn: (dataToAdd) => addMutation(query, dataToAdd),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [query] });
      toast.success(ToastMessage.AddSuccess);
    },
  });

  const updateDataMutation: any = useMutation({
    mutationFn: (dataToUpdate) => updateMutation(query, dataToUpdate),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [query] });
      toast.success(ToastMessage.UpdateSuccess);
    },
  });

  const deleteDataMutation: any = useMutation({
    mutationFn: (dataToDelete) => deleteMutation(query, dataToDelete),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [query] });
      toast.success(ToastMessage.DeleteSuccess);
    },
  });

  if (error) {
    toast.error(error?.message);
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
