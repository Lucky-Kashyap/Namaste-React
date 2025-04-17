import { useEffect, useState } from "react";
import { LOGO_IMG } from "../constants/config";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleClick = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };
  // useEffect(() => {
  //   console.log("use Effect called");
  // });
  // useEffect(() => {
  //   console.log("use Effect called");
  // }, []);

  useEffect(() => {
    console.log("use Effect called");
  }, [btnName]);
  console.log("Header Called");
  return (
    <div className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="logo" src={`${LOGO_IMG}`} alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About Us</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/grocery"}>
            <li>Grocery</li>
          </Link>
          <li>Cart</li>
        </ul>
        <button onClick={handleClick}>{btnName}</button>
      </div>
    </div>
  );
};

export default Header;
