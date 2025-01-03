/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "white-100": "#f3f3f3",
      },
    },
  },
  plugins: [],
};
