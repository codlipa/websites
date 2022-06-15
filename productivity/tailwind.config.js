module.exports = {
	purge: ["build/**/*.html"],
	darkMode: false,
	theme: {
		minHeight: {
			600: "600px",
		},
		container: {
			center: true,
			padding: "2.5rem",
			screens: {
				"2xl": "1280px",
			},
		},
		colors: {
			"blue-500": "#3a79ff",
			"blue-400": "#d2e1ff",
			"red-500": "#d43f3f",
			"red-400": "#ffd7d7",
			indigo: "#697ca6",
			white: "#fff",

			menu: "#b6bac7",
			brand: "#5e81fe",
			title: "#3d4f9f",
			content: "#8d96bd",
			background: "#f4f7ff",
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
			quicksand: ["Quicksand", "sans-serif"],
			"open-sans": ["Open Sans", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				hero: "url('../images/hero-bg.svg')",
			},
		},
	},
	variants: {},
	plugins: [],
};
