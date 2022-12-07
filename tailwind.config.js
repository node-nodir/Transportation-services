/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        servicesBg: "url('/Images/ServicesImg/serBg.png')",
        learnMoreAfterImg: "url('/Images/ServicesImg/turn.svg')",
        learnMoreModalImg: "url('/Images/ServicesImg/turn2.svg')",
        weDoBg: "url('/Images/wedoImgs/weDoBg.png')",
      },
      colors: {
        orange: {
          main: "#FF7D44",
        },
        black: {
          dark: "#182F43",
          servicesTextColor: "#000",
          serModalText: "rgba(0, 0, 0, 0.68)",
        },
      },
      width: {
        formWidth: "464px",
        weDoContent: "342px",
      },
      maxWidth: {
        servicesHero: "543px",
      },
      height: {
        formHeight: "619px",
      },
      lineHeight: {
        wedoTitile: "52px",
        numberWeDo: "70px",
        aboutText: "26px",
      },
      backgroundColor: {
        weDoNumber: "#D9D9D9",
      },
      fontSize: {
        aboutTitle: "38px",
      },
    },
  },
  plugins: [],
};
