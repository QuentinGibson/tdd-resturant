"use client";
import { useEffect } from "react";

interface RestaurantListProps {
  loadRestaurants: () => void;
}

export default function RestaurantList({
  loadRestaurants,
}: RestaurantListProps) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div>
      <p>Restaurants</p>
    </div>
  );
}
