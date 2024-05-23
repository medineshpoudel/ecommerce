import { useEffect, useState } from "react";
import { GodamLocalStorage } from "../../constants/constants";
import { NotificationProps } from "../../interface/NotificationInterface";
import Notification from "./Notification";

export interface NotificationCardProps {
  notificationData: NotificationProps[];
  onNotificationClick?: (id?: string) => void;
}

const NotificationCard = ({
  notificationData = [],
  onNotificationClick,
}: NotificationCardProps) => {
  const [toggleViewMore, setToggleViewMore] = useState<boolean>(false);
  const [notificationDataToShow, setNotificationDataToShow] = useState<
    NotificationProps[]
  >([]);

  const userRole = localStorage.getItem(GodamLocalStorage.role);

  useEffect(() => {
    toggleViewMore
      ? setNotificationDataToShow(notificationData)
      : setNotificationDataToShow(notificationData?.slice(0, 4));
  }, [toggleViewMore]);

  const handleToggleViewMore = () => {
    setToggleViewMore((prevState) => !prevState);
  };

  return (
    <div className="absolute -mx-52 top-14 rounded-md bg-white w-96  h-auto">
      <p className="m-3  text-xl font-bold text-black">Notifications</p>
      {!notificationData.length && (
        <p className="font-bold text-center"> There are no notificaitons.</p>
      )}
      {notificationDataToShow.map((data) => (
        <div className="hover:bg-secondary h-16 cursor-pointer">
          <Notification
            title={
              userRole === "vendor" ? data.vendorNotificationTitle : data.title
            }
            productOrderId={data.productOrderId}
            notificationId={data._id}
            onNotificationClick={onNotificationClick}
          />
          <hr />
        </div>
      ))}
      <button
        className="w-full bg-none text-primary rounded-none"
        onClick={handleToggleViewMore}
      >
        View More
      </button>
    </div>
  );
};

export default NotificationCard;
