export const colourPalette = {
	60: "#736CED",
	30: "#1D1C1A",
	10: "#FEF9FF",
	5: "#FFA6C1",
	shadow: "#373634"
};

export const theme = {
	global: {
		text: colourPalette[10],
		background: colourPalette[60],
		accent: colourPalette[5],
		shadow: colourPalette.shadow
	},
	body: {
		button: {
			background: colourPalette[30],
			active: colourPalette[5]
		}
	},
	footer: {
		background: colourPalette[30]
	}
};
