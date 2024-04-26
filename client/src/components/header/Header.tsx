import { AppName, ContactInfo } from "../../constants/constants";
import { Link, useNavigate } from "react-router-dom";

export interface HeaderProps {
  username?: string;
  isLoggedIn: boolean;
  logoutHandler: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = ({ username, isLoggedIn, logoutHandler }: HeaderProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    isLoggedIn ? logoutHandler() : navigate("/login");
  };
  return (
    <div className="flex justify-between p-2 shadow-lg sticky h-headerHeight">
      <div className=" font-semibold text-3xl flex-1 pl-2 items-center">
        <Link to="home" className="text-primary y hover:text-primary">
          {AppName}
        </Link>
      </div>
      <div className="flex flex-1 justify-end items-center space-x-10 ">
        <ul className="flex justify-between space-x-5 font-bold text-black">
          <Link className="text-gray hover:text-primary" to="contact">
            CONTACT : {ContactInfo}
          </Link>
          <Link className="text-gray hover:text-primary" to="about">
            ABOUT US
          </Link>
          <Link className="text-gray hover:text-primary" to="privacy">
            PRIVACY
          </Link>
        </ul>
        <button
          onClick={handleButtonClick}
          className="bg-primary text-white rounded-3xl"
        >
          {!isLoggedIn ? "LOGIN" : "LOGOUT"}
        </button>
      </div>
    </div>
  );
};

export default Header;
