import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN } from "../constants/config";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [itemCards, setItemCards] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchRestaurantMenuData();
  }, []);

  const fetchRestaurantMenuData = async () => {
    try {
      const data = await fetch(
        `https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      // console.log(json.data);
      setItemCards(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card
      );
      setRestaurantMenu(json?.data?.cards[2]?.card?.card?.info);
      // console.log(json?.data?.cards[2]?.card?.card?.info);

      console.log(itemCards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return restaurantMenu === null ? (
    <Shimmer />
  ) : (
    <div className="menu-card">
      <h1>RestaurantMenu {id}</h1>
      <p>Restaurant Name {restaurantMenu?.name}</p>
      <p>City: {restaurantMenu?.city}</p>
      <p>{restaurantMenu?.cuisines?.join(", ")}</p>
      <img src={IMG_CDN + restaurantMenu?.cloudinaryImageId} />
      <p>{restaurantMenu?.costForTwoMessage}</p>

      <ul>
        {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
         */}
        {/* <ItemCards item={item} key={item?.card?.info?.id} />; */}

        {/* {itemCards?.map((item, i) => {
          <li>{item.card.info.name}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
