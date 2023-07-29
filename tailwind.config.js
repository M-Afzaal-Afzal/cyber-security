/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslateblue: {
          "100": "#1b338a",
          "200": "#1c2956",
          "300": "#0f1843",
        },
        white: "#fff",
        gray: "rgba(255, 255, 255, 0.09)",
        forestgreen: "#509624",
        cornflowerblue: "#8ea2ff",
      },
      fontFamily: {
        poppins: "Poppins",
        "poller-one": "'Poller One'",
      },
      borderRadius: {
        "3xs": "10px",
        "29xl": "48px",
      },
    },
    fontSize: {
      xl: "20px",
      "41xl": "60px",
      "16xl": "35px",
      sm: "14px",
      "3xl": "22px",
      "7xl": "26px",
      "11xl": "30px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
