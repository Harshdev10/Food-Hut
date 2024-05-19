import { RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
     restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()) );
}


const Body = () => {
    const [searchInput, setsearchInput] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredrestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() =>{
    getRestaurants();
  },[]);

  async function getRestaurants() {    
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // json.data.cards.
  }

  return (allRestaurants.length === 0 ) ? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value= {searchInput}
          onChange={(e) => {
            setsearchInput(e.target.value);
          }}
        ></input>
        <button className="search-button" onClick={ ()=>{
          const data = filterData(searchInput, allRestaurants);
          setFilteredRestaurant(data);
        } }>Search</button>
      </div>
      <div className="restaurant-list">
        {filteredrestaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
