/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "Poppins", "sans-serif"],
      },
      colors: {
        primary: '#C5E4FF',
        secendary: '#2B73B1',
      },
      backgroundImage: {
        'custom-image': "url('/Group 363.svg')",
      },
    },
  },
  plugins: [],
};
