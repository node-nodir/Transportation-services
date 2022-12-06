/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        servicesBg: "url('')",
      },
      colors: {
        orange: {
          main: "#FF7D44",
        },
        black: {
          dark: "#182F43",
          servicesTextColor: "#000",
        },
      },
      width: {
        formWidth: "464px",
        servicesHero: "543px",
      },
      height: {
        formHeight: "619px",
      },
    },
  },
  plugins: [],
};
