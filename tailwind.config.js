/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1000px",
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1000px",
        xl: "1280px",
      },
    },
    extend: {},
  },
  plugins: [],
};
