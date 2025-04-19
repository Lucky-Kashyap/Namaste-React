import { Link } from "react-router-dom";
import { IMG_CDN } from "../constants/config";

// const RestaurantCard = (props) => {
//   // console.log(props);

//   const { resData } = props;

//   console.log(resData);

//   // console.log(resData);

//   // console.log(item);

//   // console.log(resData.info);

//   return (
//     <div className="res-card">
//       <img
//         className="res-card-image"
//         src={`${IMG_CDN}${resData?.info?.cloudinaryImageId}`}
//         alt="res-card-logo"
//       />
//       <h3>{resData?.info?.name}</h3>
//       <h4>{resData?.info?.cuisines?.join(", ")}</h4>
//       <h4>{resData?.info?.avgRating} stars</h4>
//       <h4>{resData?.info?.costForTwo}</h4>
//     </div>
//   );
// };

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  cityState,
  locality,
  address,
  avgRating,
  id,
}) => {
  console.log(id);
  return (
    <Link to={`/restaurant/${id}`}>
      {" "}
      <div className="bg-slate-200 text-slate-600 p-4 m-4 rounded-md w-64  hover:bg-slate-300">
        <img
          className="w-[300px] border-solid"
          src={IMG_CDN + cloudinaryImageId}
        />
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{area}</h4>
        <span>
          <h4>
            <i className="fa-solid fa-star">{avgRating}</i>
          </h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
        <h4>{cityState}</h4>
        <h4>{locality}</h4>
        <h4>{address}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
