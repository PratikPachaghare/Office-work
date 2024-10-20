/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#1B6393",
        customwhite: "#FEFFFE",
        customgray: "#f2f5f6",
        customcrousel: "#105060",
      },
    },
  },
  plugins: [],
};
