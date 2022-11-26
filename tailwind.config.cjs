/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js, ts, tsx, jsx, svelte, vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#010605",
        green: {
          400: "#08E163",
        },
        blue: {
          400: "#00A3FF",
        },
        red: {
          400: "#B32D2A",
        },
      },
      fontFamily: {
        japanese: "Japanese",
        secondary: "secondary",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["24px", "21px"],
        xl: ["24px", "32px"],
      },
      animation: {
        animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
