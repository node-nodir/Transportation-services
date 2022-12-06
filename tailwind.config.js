/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          main: "#FF7D44",
        },
        black: {
          dark: "#182F43",
        },
      },
      width: {
        formWidth: "464px",
      },
      height: {
        formHeight: "619px",
      },
    },
  },
  plugins: [],
};
