/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      userSelect: {
        none: "none",
      },
      screens: {
        mini: "320px",
        xs: "435px",
        sm: "550px",
        md: "768px",
        lg: "850px", 
        xl: "1024px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
