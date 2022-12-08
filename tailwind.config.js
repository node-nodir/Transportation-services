/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
          gray: "rgba(255, 255, 255, 0.8)",
          inputPlaceholderColor: "rgba(0, 0, 0, 0.87)",
        },
        red: {
          error: "#D83B3B",
        },
      },
      maxWidth: {
        hero_Form_W: "450px",
        heroRightW: "576px",
        shippingTop: "800px",
        738: "738px",
      },
      width: {
        formWidth: "464px",
        servicesHero: "543px",
        245: "245px",
        weDoContent: "325px",
        450: "450px",
        151: "151px",
      },
      height: {
        formHeight: "619px",
        43: "43px",
        45: "45px",
        112: "112px",
      },
      margin: {
        10: "10px",
      },
      padding: {
        160: "160px",
        25: "25px",
        70: "70px",
        196: "196px",
      },
      fontSize: {
        15: "15px",
        28: "28px",
        56: "56px",
        35: "35px",
        20: "20px",
        aboutTitle: "38px",
      },
      lineHeight: {
        68: "68px",
        42: "42px",
      },
      borderRadius: {
        10: "10px",
      },
      backgroundColor: {
        bg_color: "#FF7D44",
        weDoNumber: "#D9D9D9",
        buttonHover: "rgba(255, 125, 68, 0.15)",
        mostButtonHover: "#C24F1D",
        heroFormMoblie: "#1F1F1F",
      },
      borderColor: {
        buttonHoverBorder: "#FF7D44",
      },
    },
  },
  plugins: [],
};
