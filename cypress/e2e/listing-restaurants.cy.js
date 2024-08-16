describe("Listing Restaurants", () => {
  it("shows restaurants from the server", () => {
    const sushiPlace = "Sushi Place";
    const pizzaPlace = "Pizza Place";

    cy.intercept("GET", "https://api.outsidein.dev/*/restaurants", [
      { name: sushiPlace, id: 1 },
      { name: pizzaPlace, id: 2 },
    ]);

    cy.visit("/");

    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
