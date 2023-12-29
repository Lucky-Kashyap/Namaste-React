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

const RestaurantCard = (props) => {
  // console.log(props);

  const { resName, cuisines } = props;

  return (
    <div className="res-card">
      <img
        className="res-card-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bd384dc3b5ef057f8b2dcb91f243f33b"
        alt="res-card-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisines}</h4>
      <h4>4.4 stars</h4>
      <h4>38 mins</h4>
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
        <RestaurantCard
          resName="Meghana Foods"
          cuisines="Biryani, North Indian Fast food"
        />
        <RestaurantCard
          resName="KFC Foods"
          cuisines="Burger food, Indian fast Food"
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      {/* <h3>Footer</h3> */}
      <p>&copy; copyright with lucky food app...!!!!</p>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
