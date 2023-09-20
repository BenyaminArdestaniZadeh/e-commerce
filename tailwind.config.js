/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      peacoat: "#252B42",
      nickel: "#737373",
      steelBlue: "#2A7CC7",
      white: "#FFFFFF",
      spanishSkyBlue: "#23A6F0",
      mediumGray: "#BDBDBD",
      viridian: "#23856D",
      backGround: "#a5ebe1",
      cartBackground: "rgba(45, 139, 192, 0.75)",
      yellow: "rgb(253 224 71)"
    },
    extend: {},
  },
  plugins: [],
};
