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

      // const data = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // );
      // const data = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );
      // const data = await fetch(
      //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );
      const data = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // console.log(json);
      // setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);

      // setRestaurantList(json?.data?.cards[4]?.data?.data?.cards);
      // setFilteredRestaurant(
      //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      // setListOfRestaurants(
      //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      console.log(json);
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
            className="border-2 border-slate-400 m-4 p-1"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="bg-sky-800 cursor-pointer text-slate-200 p-2 rounded hover:bg-sky-950"
            onClick={() => {
              const data = filterData(searchText, listOfRestaurants);
              setFilteredRestaurant(data);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            {filteredRestaurant?.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant?.info?.id}
                  {...restaurant?.info}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
  // );
};

export default Body;
