import { ModelInterface } from "./ModelInterface";

export interface NotificationProps extends ModelInterface {
  title?: string;
  vendorNotificationTitle?: string;
  notificationId?: string;
  productOrderId?: string;
  onNotificationClick?: (id?: string) => void;
}
