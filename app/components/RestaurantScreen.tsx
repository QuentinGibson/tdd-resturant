"use client";
import RestaurantList from "@/app/components/RestaurantList";
import useRestaurant from "@/hooks/useRestaurant";
export default function RestaurantScreen() {
  const [restaurants] = useRestaurant();
  return (
    <div>
      <h1>List of Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}
