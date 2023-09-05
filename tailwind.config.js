/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "regal-blue": "#243c5a",
      "bg-neutral": "#E4E4D0",
    },
    extend: {
      margin: {
        "t-50": "50%",
      },
    },
  },
  plugins: [],
};
