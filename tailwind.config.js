/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["var(--font-poppins)"],
                opensans: ["var(--font-opensans)"],
            },
            backgroundImage: {
                purplegrad:
                    "linear-gradient(135deg, rgb(252, 0, 199) 0px, rgb(28, 78, 253) 54%, rgb(0, 173, 237) 100%);",
                pruplegradtwo:
                    "linear-gradient(to right,#673AB7 0,#2196F3 100%);",
                pinkgradient:
                    "linear-gradient(to right,#f92c8b 0,#b02cd6 100%);",
                fushiagradient:
                    "linear-gradient(45deg,#ff0048 0,#ff3870 50%,#c300c3 100%)",
                bluegradient:
                    "linear-gradient(135deg,#fc00c7 0,#1c4efd 54%,#00aded 100%);",
            },
            screens: {
                bp1: { max: "1350px" },
                bp2: { max: "1180px" },
                bp3: { max: "1550px" },
                bp4: { max: "1280px" },
                bp5: { max: "1070px" },
                bp6: { max: "760px" },
                bp7: { max: "700px" },
                bp8: { max: "1725px" },
                bp9: { max: "1600px" },
                bp10: { max: "800px" },
                bp11: { max: "900px" },
                bp12: { max: "620px" },
                bp13: { max: "480px" },
                bp14: { max: "420px" },
            },
            animation: {
                "phone-ring": "phone-ring 800ms infinite",
            },
        },
        plugins: [],
    },
};
