describe("Smoke Test", () => {
  it("can view the home page", () => {
    cy.visit("/");
    cy.contains("Get started by editing app/page.tsx");
  });
});
