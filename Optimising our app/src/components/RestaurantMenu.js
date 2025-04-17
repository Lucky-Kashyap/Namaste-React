import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN } from "../constants/config";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import useOnline from "../utils/hooks/useOnline";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, itemCards] = useRestaurantMenu(id);
  const isOnline = useOnline();

  return restaurantMenu === null ? (
    <Shimmer />
  ) : (
    <div className="menu-card">
      <p>{isOnline ? "You are Online 🟢" : "You are Offline 🔴"}</p>
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
