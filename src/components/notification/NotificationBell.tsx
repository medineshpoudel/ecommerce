import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

export interface NotificationBellProps {
  notificationCount?: number;
  children?: ReactNode;
  onNotificationClick?: () => void;
}

const NotificationBell = ({
  notificationCount,
  children,
  onNotificationClick = () => {},
}: NotificationBellProps) => {
  return (
    <div className="relative">
      <button
        className="rounded-full bg-transparent !important"
        onClick={onNotificationClick}
      >
        <FontAwesomeIcon icon={faBell} />
        <span className="absolute bottom-3 font-bold">{notificationCount}</span>
      </button>
      {children}
    </div>
  );
};

export default NotificationBell;
