/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#9c7c58", // Add your preferred colors here
        lightBrown: "#a28f70",
      },
    },
  },
  plugins: [],
};
