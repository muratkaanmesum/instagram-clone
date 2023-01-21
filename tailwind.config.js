/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        96: "24rem",
        128: "32rem",
      },
      width: {
        96: "24rem",
        128: "32rem",
        108: "28rem",
        144: "36rem",
        "1/1": "100%",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      //add max width media queries
      "m-sm": { max: "640px" },
      "m-md": { max: "768px" },
      "m-lg": { max: "1024px" },
      "m-xl": { max: "1280px" },
      "m-2xl": { max: "1536px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  safelist: ["invisible", "hidden", "visible", "opacity-0", "opacity-100"],

  plugins: [],
};
