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
                heroBg: "url('/Images/HeroImg/hero_bg.png')",
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
                },
            },
            maxWidth: {
                hero_Form_W: "450px",
            },
            width: {
                formWidth: "464px",
                servicesHero: "543px",
                245: "245px",
            },
            height: {
                formHeight: "619px",
                43: "43px",
            },
            margin: {
                10: "10px",
            },
            padding: {
                160: "160px",
                25: "25px",
            },
            fontSize: {
                56: "56px",
            },
            lineHeight: {
                68: "68px",
            },
            borderRadius: {
                10: "10px",
            },
        },
    },
    plugins: [],
};
