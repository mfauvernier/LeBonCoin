/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "970px",
        xl: "1050px",
      },
      colors: {
        star: "#B84A28",
        "light-blue": "#E6F2FD",
        "back-button": "#FCE9DE",
        button: "#EC5B35",
        "modal-back": "rgba(0,0,0,0.8)",
        footer: "#2B3441",
        text: "#627C93",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    },
  ],
};
