interface RestaurantListProps {
  restaurants: Restaurant[];
}

export default function RestaurantList({ restaurants }: RestaurantListProps) {
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
