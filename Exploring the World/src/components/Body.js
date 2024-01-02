import { useEffect, useState } from "react";
import { restaurantData } from "../constants/config";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
  // const listOfRestaurants = [];

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    // console.log("Body Component");

    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const res = await data.json();

    // setListOfRestaurants(res);

    // console.log(res);

    setListOfRestaurants(res?.data?.cards[0]?.card?.card?.imageGridCards);

    // console.log(res?.data.cards[0]?.card?.card?.imageGridCards);
  };

  // console.log("Body Rendered...!!!!");

  const handleClick = () => {
    // console.log("click handle");

    const filteredRestaurant = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );

    setListOfRestaurants(filteredRestaurant);
  };

  // Conditional Rendering

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
        {/* {listOfRestaurants.map((item, index) => (
          <RestaurantCard resData={item} key={index} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
