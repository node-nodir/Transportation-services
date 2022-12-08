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
        servicesCommonBg: "url('/Images/ServicesImg/triangle.svg')",
        servicesCommonBg2: "url('/Images/ServicesImg/triangle2.svg')",
        shippingBeforeImg: "url('/Images/shippingImgs/beforeImg.svg')",
        heroBg: "url('/Images/HeroImg/hero_bg.png')",
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
          header_bg: "rgba(0, 0, 0, 0.3)",
          hero_Form_Bg: "rgba(58, 58, 58, 0.5)",
          line_bg: "rgba(224, 224, 224, 1)",
          shippingAfter: "rgba(46, 51, 104, 0.15)",
        },
      },
      maxWidth: {
        hero_Form_W: "450px",
        shippingTop: "800px",
        weDoContent: "325px",
        738: "738px",
      },
      width: {
        formWidth: "464px",
        servicesHero: "543px",
        245: "245px",
        450: "450px",
        151: "151px",
        354: "354px",
        330: "330px",
      },
      height: {
        formHeight: "619px",
        43: "43px",
        112: "112px",
        458: "458px",
        450: "450px",
      },
      margin: {
        10: "10px",
        33: "33px",
        30: "30px",
        50: "50px",
        60: "60px",
      },
      padding: {
        160: "160px",
        25: "25px",
        70: "70px",
        196: "196px",
        118: "118px",
        173: "173px",
        100: "100px",
        120: "120px",
      },
      fontSize: {
        56: "56px",
        aboutTitle: "38px",
        28: "28px",
      },
      lineHeight: {
        68: "68px",
      },
      borderRadius: {
        10: "10px",
      },
      backgroundColor: {
        weDoNumber: "#D9D9D9",
        buttonHover: "rgba(255, 125, 68, 0.15)",
        mostButtonHover: "#C24F1D",
      },
      borderColor: {
        buttonHoverBorder: "#FF7D44",
      },
    },
  },
  plugins: [],
};
