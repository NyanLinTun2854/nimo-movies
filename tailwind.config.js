/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smest: "500px",
      sm: "640px",
      md: "760px",
      lg: "1000px",
      xl: "1280px",
      ml: "1400px",
      extra: "2000px",
    },
    container: {
      screens: {
        sm: "640px",
        md: "760px",
        lg: "1000px",
        xl: "1280px",
        extra: "2200px",
      },
    },
    extend: {},
  },
  plugins: [],
};
