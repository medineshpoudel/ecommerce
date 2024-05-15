/* eslint-disable @typescript-eslint/no-explicit-any */
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { AppName, GodamLocalStorage } from "../../constants/constants";

export interface HeaderProps {
  username?: string;
  isLoggedIn?: boolean;
  logoutHandler?: () => void;
  productsInCart?: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = ({
  isLoggedIn,
  logoutHandler = () => {},
  productsInCart,
}: HeaderProps) => {
  const navigate = useNavigate();
  const role = localStorage[GodamLocalStorage.role];

  const handleButtonClick = () => {
    isLoggedIn ? logoutHandler() : navigate("/login");
  };

  return (
    <div className="flex justify-between p-2 px-10 shadow-lg h-headerHeight bg-transparent absolute top-0 left-0 z-20 w-full">
      <div className="text-3xl pl-2 items-center ml-5">
        <Link
          to="landing"
          className="text-primary font-extrabold hover:text-primary"
        >
          {AppName.toUpperCase()}
        </Link>
      </div>

      <div className="hidden md:flex md:flex-1 md:justify-center md:items-center md:space-x-10">
        <ul className="flex justify-between space-x-5 font-bold text-black">
          {role === "vendor" && (
            <>
              <Link
                className="text-black hover:text-primary"
                to="vendor/product"
              >
                Your Products
              </Link>
              <Link
                className="text-black hover:text-primary"
                to="vendor/product-request"
              >
                Product Request
              </Link>
            </>
          )}
          <Link className="text-primary hover:text-primary" to="contact">
            HOME
          </Link>
          <Link className="text-primary hover:text-primary" to="about">
            LAPTOP
          </Link>
          <Link className="text-primary hover:text-primary" to="privacy">
            MOBILE
          </Link>
        </ul>
      </div>
      <div className="flex gap-3">
        <div className="relative">
          <button
            className="rounded-full bg-transparent !important"
            onClick={() => navigate("/cart")}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="absolute bottom-3 font-bold">
              {productsInCart?.length}
            </span>
          </button>
        </div>
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
