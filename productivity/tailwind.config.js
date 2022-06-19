module.exports = {
	purge: ["build/**/*.html"],
	darkMode: false,
	theme: {
		minHeight: {
			600: "600px",
		},
		minWidth: {
			410: "410px",
		},
		container: {
			center: true,
			padding: "2.5rem",
			screens: {
				"2xl": "1280px",
			},
		},
		colors: {
			"blue-600": "#3a79ff",
			"blue-500": "#d2e1ff",
			"blue-400": "#f4f7ff",
			"red-600": "#d43f3f",
			"red-500": "#ffd7d7",
			indigo: "#697ca6",
			white: "#fff",

			menu: "#b6bac7",
			brand: "#5e81fe",
			title: "#3d4f9f",
			"gray-dark": "#8d96bd",
			"gray-light": "#d1d1e4",
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
			quicksand: ["Quicksand", "sans-serif"],
			"open-sans": ["Open Sans", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				hero: "url('../images/clouds-1.svg')",
				features: "url('../images/clouds-2.svg')",
			},
		},
	},
	variants: {},
	plugins: [],
};
