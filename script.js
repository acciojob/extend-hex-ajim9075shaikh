// Cypress Test
describe('Hex Extension Test', () => {
  it('should test the hex extension', () => {
    const shortHex = "#abc";
    const fullHex = "#aabbcc";

    // Visit the baseUrl
    cy.visit(baseUrl);

    // Stub the window.prompt function
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns(shortHex);
    });

    // Trigger the extension logic
    cy.get('input[type="text"]').type(shortHex); // Assuming an input field for the hex code
    cy.get('button').click(); // Assuming a button to trigger the logic

    // Check if the alert displays the correct result
    cy.on("window:alert", (str) => {
      expect(str.toLowerCase()).to.equal(fullHex.toLowerCase());
    });
  });
});
