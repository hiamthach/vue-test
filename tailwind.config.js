/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-container": "#fffefa",
        "text-primary": "#333333",
        primary: "#ff276b",
        black: "#333333",
        grey: "#818181",
        border: "#e6e6e6",
      },
      fontFamily: {
        heading: ["Bebas Neue", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "not-found": "url('/src/assets/not-found.jpg')",
      },
    },
  },
  plugins: [],
};
