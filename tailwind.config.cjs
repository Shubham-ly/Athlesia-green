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
        secondary: "secondary"
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['24px', '21px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
};
