import { restaurantData } from "../constants/restaurantData";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={restaurantData} /> */}
        {restaurantData?.map((item, index) => (
          <RestaurantCard resData={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
