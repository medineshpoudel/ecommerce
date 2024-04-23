import BaseService from "./Base.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
class LoginService extends BaseService {
  static async login(data: any) {
    try {
      const response = await this.add({ query: "auth/login", data });
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  }

  static async signup(data: any) {
    const response = this.add({ query: "auth/signup", data });
    console.log(response);
    return response;
  }

  static async getUserInfo(data: any) {
    const response = this.get({ query: "user", data });
    return response;
  }

  static async logout() {
    const response = this.add({ query: "auth/logout" });
    return response;
  }

  static async validateUserToken(token: string) {
    console.log(token);
  }
}

export default LoginService;
