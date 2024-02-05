/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        standart_violet: {
          300: "#623b94",
          400: "#7A45BD",
          500: "#A259FF",
        },
        standart_grey: {
          500: "#3B3B3B",
        },
      },
    },
  },
  plugins: [],
};
