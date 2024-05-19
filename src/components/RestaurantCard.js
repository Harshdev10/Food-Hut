import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId }) => {
    // const { name, cuisines, avgRating, cloudinaryImageId } = restaurant.info;

  return (
    <div className="card">
      <img
        src={ IMG_CDN_URL
           +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;