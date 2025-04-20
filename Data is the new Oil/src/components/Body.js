import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
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

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

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
  const handleClick = () => {
    const filteredRestaurant = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );

    setListOfRestaurants(filteredRestaurant);
  };

  return (
    <div className="body">
      <div className="search">
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
};

export default Body;
