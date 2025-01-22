/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-1st": "#6E7BFB",
        "primary-2nd": "#D9ED87",
        "primary-3rd": "#F3AF89",
        "secondary-1st": "#12141D",
        "secondary-2nd": "#123638",
        "secondary-3rd": "#B1D7B6",
      },
      fontFamily: {
        body: ["Inter", "serif"],
        typo: ["Public Sans", "serif"],
        heading: ["Plus Jakarta Sans", "serif"],
      },
      screens: {
        big: "1440px", // => @media (min-width: 1440px) for bigger display
        small: "435px",
      },
    },
  },
  plugins: [],
};
