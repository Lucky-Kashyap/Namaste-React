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
    <div className="flex flex-wrap mx-auto items-center justify-between p-6 lg:px-8 text-white bg-zinc-400">
      <div>
        <Link to={"/"}>
          <img className="w-[100px]" src={`${LOGO_IMG}`} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex flex-wrap m-1 p-1">
          <Link to={"/"}>
            <li className="p-2">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="p-2">About Us</li>
          </Link>
          <Link to={"/contact"}>
            <li className="p-2">Contact Us</li>
          </Link>
          <Link to={"/grocery"}>
            <li className="p-2">Grocery</li>
          </Link>
          <li className="p-2">Cart</li>
        </ul>
        <button onClick={handleClick}>{btnName}</button>
      </div>
    </div>
  );
};

export default Header;
