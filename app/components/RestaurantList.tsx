"use client";
import { useEffect } from "react";

interface Restaurant {
  id: number;
  name: string;
}
interface RestaurantListProps {
  loadRestaurants: () => void;
  restaurants: Restaurant[];
}

export default function RestaurantList({
  loadRestaurants,
  restaurants,
}: RestaurantListProps) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
