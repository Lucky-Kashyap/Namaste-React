import { useState } from "react";
import { restaurantData } from "../constants/config";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

const Body = () => {
  // const listOfRestaurants = [];

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const handleClick = () => {
    // console.log("click handle");

    setListOfRestaurants(restaurantData);
  };
  return (
    <div className="body">
      <div className="search">
        {/* <Search /> */}
        <div className="search-box">
          <input type="text" />
          <button className="filter-btn" onClick={handleClick}>
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={restaurantData} /> */}
        {listOfRestaurants?.map((item, index) => (
          <RestaurantCard resData={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
