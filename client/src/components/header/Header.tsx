import { AppName, ContactInfo } from "../../constants/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">{AppName}</div>
      <div className="nav">
        <ul className="nav-items">
          <li>Contact : {ContactInfo}</li>
          <li>About Us</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className="login">
        <button className="button-primary">Login</button>
      </div>
    </div>
  );
};

export default Header;
