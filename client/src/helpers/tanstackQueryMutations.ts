/* eslint-disable @typescript-eslint/no-unused-vars */
import BaseService from "../services/Base.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchData = async (query: string) => {
  const response = await BaseService.get({ query });
  return response.data;
};

export const addMutation = async (
  query: string,
  item: any,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  successMessage?: string
) => {
  const result: any = await BaseService.add({ query, data: item });
  return result;
};

export const updateMutation = async (
  query: string,
  item: any,
  successMessage?: string
) => {
  const result: any = await BaseService.update({ query, data: item });
  return result;
};

export const deleteMutation = async (
  query: string,
  item: any,
  successMessage?: string
) => {
  const result: any = await BaseService.delete({ query, data: item });
  return result;
};
