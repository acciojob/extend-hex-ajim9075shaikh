const extendHex = (shortHex) => {
  
    if (!/^#([0-9A-Fa-f]{3})$/.test(shortHex)) {
        throw new Error('Invalid short hex code format');
	}
    const [, r, g, b] = shortHex.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);

    const fullHex = `#${r}${r}${g}${g}${b}${b}`;

    return fullHex;
}



	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
