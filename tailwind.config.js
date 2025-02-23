/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px", // Custom breakpoint for extra small screens
        sm: "600px", // Adjusted for small screens
        md: "900px", // Adjusted for medium screens
        lg: "1200px", // Adjusted for large screens
        xl: "1440px", // Extra-large screens
      },
    },
  },
  plugins: [],
}