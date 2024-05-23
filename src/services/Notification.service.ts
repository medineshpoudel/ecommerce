import BaseService from "./Base.service";

class NotifactionService extends BaseService {
  static getUserNotification = async () => {
    const notification = await this.get({ query: "notification" });
    return notification.data;
  };
}

export default NotifactionService;
