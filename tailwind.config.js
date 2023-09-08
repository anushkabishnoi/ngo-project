/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "regal-blue": "#243c5a",
      "bg-neutral": "#E4E4D0",
      "highlight": "#1eb2a6",
    },
    extend: {
      margin: {
        "t-60": "60%",
      },
      spacing: {
        't-20': '20%',
        
      },
    },
  },
  plugins: [],
};
