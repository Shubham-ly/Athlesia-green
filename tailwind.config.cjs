/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js, ts, tsx, jsx, svelte, vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#010605",
      },
      fontFamily: {
        japanese: "Japanese",
      },
    },
  },
  plugins: [],
};
