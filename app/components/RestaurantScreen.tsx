import RestaurantList from "@/app/components/RestaurantList";
export default function RestaurantScreen() {
  async function handleLoadRestaurants() {
    "use server";
  }
  return (
    <div>
      <h1>List of Restaurants</h1>
      <RestaurantList
        restaurants={[]}
        loadRestaurants={handleLoadRestaurants}
      />
    </div>
  );
}
