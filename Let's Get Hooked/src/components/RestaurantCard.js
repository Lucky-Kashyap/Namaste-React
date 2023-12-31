const RestaurantCard = (props) => {
  console.log(props);

  const { resData } = props;

  // console.log(resData);

  // console.log(item);

  // console.log(resData.info);

  return (
    <div className="res-card">
      <img
        className="res-card-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}
        alt="res-card-logo"
      />
      <h3>{resData?.info?.name}</h3>
      <h4>{resData?.info?.cuisines?.join(", ")}</h4>
      <h4>{resData?.info?.avgRating} stars</h4>
      <h4>{resData?.info?.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
