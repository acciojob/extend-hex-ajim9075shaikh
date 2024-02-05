const extendHex = (shortHex) => {
  
    if (!/^#([0-9A-Fa-f]{3})$/.test(shortHex)) {
        throw new Error('Invalid short hex code format');
	}
    const [, r, g, b] = shortHex.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);

    const fullHex = `#${r}${r}${g}${g}${b}${b}`;

    return fullHex;
}


 
  cy.visit(baseUrl, {
    onBeforeLoad(win) {
      // Stub your functions here
      cy.stub(win, "prompt").onFirstCall().returns(shortHex);
    },
  });

  cy.on("window:alert", (str) => {
    expect(str.toLowerCase()).to.equal(fullHex.toLowerCase());
  });
};


// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
