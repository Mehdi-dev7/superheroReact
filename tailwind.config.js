/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          marvel: "#ed1d24",
        },
        black: {
          marvel: "#202020",
        },
      },
    },
  },
  plugins: [],
};
