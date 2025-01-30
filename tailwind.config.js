/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				heavenPurple: "#CECEFE",
				heavenPurpleLight: "#f1f0ff",
				heavenYellow: "#FAE17B",
				heavenYellowLight: "#fefce8",
				heavenSky: "#c3eBFA",
				heavenSkyLight: "#EDF9FD",
				heavenRed: "#FF474D",
				heavenRedLight: "#FFADB0",
			},
			fontFamily:{
				roboto:["var(--font-roboto)"]
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("tailwindcss-motion")],
}
