import { NotificationProps } from "../../interface/NotificationInterface";

const Notification = ({
  title,
  productOrderId,
  notificationId,
  onNotificationClick = () => {},
}: NotificationProps) => {
  const handleNotificaitonClick = () => {
    onNotificationClick(productOrderId);
  };

  return (
    <div
      className="w-full h-full rounded-md px-5 py-3 font-bold"
      key={notificationId}
    >
      <div className=" text-primary" onClick={handleNotificaitonClick}>
        {title}
      </div>
    </div>
  );
};

export default Notification;
