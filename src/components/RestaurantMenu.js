import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);  
if(!restaurant){
    return <Shimmer/>
}

  return (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2> restaurant</h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards?.[2]?.card?.card?.info?.cloudinaryImageId
          }
        ></img>
        <h3>{restaurant?.cards?.[2]?.card?.card?.info?.name}</h3>
        <h3>{restaurant?.cards?.[2]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards?.[2]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards?.[2]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</h3>
        {/* <h3>{restaurant?.cards.[2]>?.card?.card?.info?.</h3> */}
      </div>
      <div>
        <h1>menu</h1>
        <ul>
          {restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.map(
            (item) => (
              <li key={item?.card?.info?.id}>{item.card.info.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
