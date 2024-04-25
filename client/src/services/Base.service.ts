/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-var-requires
import axios, { AxiosRequestConfig } from "axios";

export interface ApplyActionProps {
  query: string;
  type?: string;
  data?: any;
}

class BaseService {
  static async apply(query: string, type: string, data: any = null) {
    const axiosConfig: AxiosRequestConfig = {
      method: type,
      data,
      url: `http://localhost:8000/${query}`,
      withCredentials: true,
    };

    try {
      const response = await axios(axiosConfig);
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  static get = async ({ query, type = "get" }: ApplyActionProps) =>
    this.apply(query, type);

  static add = async ({ query, data = null }: ApplyActionProps) =>
    this.apply(query, "post", data);

  static update = ({ query, data = null }: ApplyActionProps) =>
    this.apply(query, "patch", data);

  static delete = ({ query, data = null }: ApplyActionProps) =>
    this.apply(query, "delete", data);
}

export default BaseService;
