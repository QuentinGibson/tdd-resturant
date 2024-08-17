import { useEffect, useState } from "react";

export default function useRestaurant() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_RESTAURANT_KEY_API;

  useEffect(() => {
    async function loadRestaurants() {
      try {
        if (!apiKey) {
          throw new Error("API key is not set");
        }

        const response = await fetch(
          `https://api.outsidein.dev/${apiKey}/restaurants`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        const data = text ? JSON.parse(text) : [];
        setRestaurants(data);
      } catch (err) {
        setRestaurants([]);
        setError((err as Error).message);
        console.error("Failed to load restaurants:", err);
      }
    }

    loadRestaurants();
  }, [apiKey]);

  return [restaurants];
}
