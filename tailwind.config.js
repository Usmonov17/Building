/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      userSelect: {
        none: "none",
      },
      screens: {
        sm: { max: "480px" },
        md: { max: "768px" },
        lg: { max: "992px" },
        xl: { max: "1280px" },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
