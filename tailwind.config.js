/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        primary: "#54408C",
      },

      fontFamily: {
        sans: ["OpenSans_400Regular"],
        medium: ["OpenSans_500Medium"],
        semibold: ["OpenSans_600SemiBold"],
        bold: ["OpenSans_700Bold"],
      },
    },
  },

  plugins: [],
};
