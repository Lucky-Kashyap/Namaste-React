import { useEffect, useState } from "react";
import { restaurantData } from "../constants/config";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
  // const listOfRestaurants = [];

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log("Body Component");

    fetchData();
  }, []);

  useEffect(() => {
    filterData(searchText, listOfRestaurants);
    console.log(filteredRestaurant);
  }, [searchText]);

  const filterData = (searchText, listOfRestaurants) => {
    const filterData = listOfRestaurants?.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // return filterData;

    setFilteredRestaurant(filterData);

    return filterData;
  };

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const res = await data.json();

  //   // setListOfRestaurants(res);

  //   // console.log(res);

  //   setListOfRestaurants(res?.data?.cards[0]?.card?.card?.imageGridCards);

  //   // console.log(res?.data.cards[0]?.card?.card?.imageGridCards);
  // };

  const fetchData = async () => {
    try {
      // const data = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );

      // if (!data.ok) {
      //   throw new Error("Failed to fetch data");
      // }

      // const res = await data.json();

      // const restaurant = res?.data?.cards[0]?.card?.card?.imageGridCards;

      // setListOfRestaurants(restaurant);

      // console.log(restaurant);

      // console.log(listOfRestaurants);

      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // console.log(json);
      // setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);

      // setRestaurantList(json?.data?.cards[4]?.data?.data?.cards);
      setFilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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

  // listOfRestaurants?.length === 0 ? (
  //   <Shimmer />
  // ) : (
  return (
    <div className="body">
      <div className="search">
        {/* <Search /> */}
        <div className="search-box">
          <h3>{searchText}</h3>
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="filter-btn"
            // onClick={handleClick}
            onClick={() => {
              const data = filterData(searchText, listOfRestaurants);
              setFilteredRestaurant(data);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={restaurantData} /> */}
        {/* {listOfRestaurants.map((item, index) => (
          <RestaurantCard resData={item} key={index} />
        ))} */}

        {/* {Array.isArray(listOfRestaurants) && listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((item, index) => (
            <RestaurantCard resData={item} key={index} />
          ))
        ) : (
          <p>No restaurants available.</p>
        )} */}

        {filteredRestaurant?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="restaurant-list">
            {filteredRestaurant?.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant?.info?.id}
                  {...restaurant?.info}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
  // );
};

export default Body;
