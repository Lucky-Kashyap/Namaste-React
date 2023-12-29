import React from "react";

import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=740"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>Meghana Foods</h3>
    </div>
  );
};

const Search = () => {
  return (
    <div className="search-box">
      <input type="text" />
      <button>Search</button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
