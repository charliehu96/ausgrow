const plugin = require("tailwindcss/plugin");

module.exports = {
	plugins: [
		plugin(function ({ addUtilities, theme }) {
			const newUtilities = {
				".custom-hover": {
					color: theme("colors.black"),
					transition: "color 150ms ease-in-out",
					"&:hover": {
						color: theme("colors.gray.500"),
					},
				},
			};
			addUtilities(newUtilities, ["responsive", "hover"]);
		}),
	],
	content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
};
