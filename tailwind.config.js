/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "0px",
      sm: "312px",
      lg: "960px",
      xl: "1440px",
    },
  },
  plugins: [],
};
