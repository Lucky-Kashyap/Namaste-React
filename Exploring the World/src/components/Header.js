import { useState } from "react";
import { LOGO_IMG } from "../constants/config";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleClick = () => {
    setBtnName("Logout");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={`${LOGO_IMG}`} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button onClick={handleClick}>{btnName}</button>
      </div>
    </div>
  );
};

export default Header;
