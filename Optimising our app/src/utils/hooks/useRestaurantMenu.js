import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [itemCards, setItemCards] = useState([]);

  useEffect(() => {
    const fetchRestaurantMenuData = async () => {
      try {
        const data = await fetch(
          `https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await data.json();
        // console.log(json.data);
        setItemCards(
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards || []
        );

        setRestaurantMenu(json?.data?.cards[2]?.card?.card?.info || {});

        // console.log(json?.data?.cards[2]?.card?.card?.info);

        // console.log(itemCards);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (id) fetchRestaurantMenuData();
  }, [id]);

  return [restaurantMenu, itemCards];
};

export default useRestaurantMenu;
