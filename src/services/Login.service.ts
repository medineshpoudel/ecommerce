import { toast } from "react-toastify";
import { GodamLocalStorage } from "../constants/constants";
import BaseService from "./Base.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
class LoginService extends BaseService {
  static async login(data: any) {
    try {
      const response = await this.add({ query: "auth/login", data });
      localStorage.clear();
      localStorage.setItem(GodamLocalStorage.acessToken, response.data.token);
      localStorage.setItem(GodamLocalStorage.role, response.data.role);
      localStorage.setItem(GodamLocalStorage.username, response.data.username);
      window.location.href = "/";
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  static async signup(data: any) {
    try {
      const response = await this.add({ query: "auth/signup", data });
      localStorage.clear();
      localStorage.setItem(GodamLocalStorage.acessToken, response.data.token);
      localStorage.setItem(GodamLocalStorage.role, response.data.role);
      localStorage.setItem(GodamLocalStorage.role, response.data.username);
      window.location.href = "/";
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  static async getUserInfo() {
    try {
      const response = await this.get({ query: "auth/user" });
      return response.data;
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  static async getAccessToken() {
    try {
      const response = await this.get({ query: "auth/refresh" });
      localStorage.setItem(
        GodamLocalStorage.acessToken,
        response.data.accessToken
      );
    } catch (error: any) {
      localStorage.clear();
    }
  }

  static async logout() {
    try {
      await this.add({ query: "auth/logout", data: {} });
      localStorage.clear();
      window.location.href = "/";
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  static async validateUserToken() {
    const token = localStorage[GodamLocalStorage.acessToken];
    if (token) {
      try {
        await this.add({
          query: "auth/verify-token",
          data: { token },
        });
      } catch (error: any) {
        if (error.response.data.message === "jwt expired") {
          await this.getAccessToken();
          return;
        }
        return toast.error(error.message);
      }
    } else {
      await LoginService.getAccessToken();
    }
  }
}

export default LoginService;
