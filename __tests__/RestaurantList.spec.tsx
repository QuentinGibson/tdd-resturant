/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import RestaurantList from "@/app/components/RestaurantList";

describe("RestaurantList", () => {
  it("loads restaurants on first render", () => {
    const loadRestaurants = jest.fn().mockName("loadRestaurants");

    render(<RestaurantList loadRestaurants={loadRestaurants} />);

    expect(loadRestaurants).toHaveBeenCalled();
  });
});
