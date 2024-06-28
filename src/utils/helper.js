export function filterData(searchInput, allRestaurants) {
    return allRestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
  }