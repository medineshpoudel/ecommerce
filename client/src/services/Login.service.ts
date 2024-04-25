import { toast } from "react-toastify";
import BaseService from "./Base.service";
import { GodamLocalStorage } from "../constants/constants";

/* eslint-disable @typescript-eslint/no-explicit-any */
class LoginService extends BaseService {
  static async login(data: any) {
    try {
      const response = await this.add({ query: "auth/login", data });
      localStorage.setItem(GodamLocalStorage.isLoggedIn, "true");
      if (response.data.role === "admin") {
        localStorage.setItem(GodamLocalStorage.isAdmin, "Admin");
      }
      window.location.href = "/";
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  static async signup(data: any) {
    try {
      await this.add({ query: "auth/signup", data });
      localStorage.setItem(GodamLocalStorage.isLoggedIn, "true");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  static async getUserInfo() {
    const response = this.get({ query: "auth/user" });
    return response;
  }

  static async logout() {
    try {
      await this.add({ query: "auth/logout", data: null });
      localStorage.clear();
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  static async validateUserToken(token: string) {
    console.log(token);
  }
}

export default LoginService;
