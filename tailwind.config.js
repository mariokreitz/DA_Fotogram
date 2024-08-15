/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("./public/images/pixabay_img_hero_bg.jpg")',
        parallax: 'url("./public/images/voices/background.jpg")',
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-33.333333%)",
          },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-300% ))",
          },
        },
      },
      animation: {
        move: "move 30s linear infinite",
        "infinite-slider": "infiniteSlider 20s linear infinite",
      },
      boxShadow: {
        "inner-xl": "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px inset",
      },
      colors: {
        "medium-rose": "#f15bb5",
        "medium-purple": "#9b5de5",
        remy: "#feeff8",
        minsk: "#393193",
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animated"),
    // ...
  ],
};
