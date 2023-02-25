/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#029E9D",

          "secondary": "#FDC703",

          "accent": "#263A49",

          "neutral": "#777777",

          "base-100": "#FFFFFF",

          "info": "#17233e",

          "success": "#029E9D",

          "warning": "#27334C",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui", '@tailwindcss/forms')],
};
