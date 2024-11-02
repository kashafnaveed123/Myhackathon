/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '350px', // Adds a custom breakpoint at 350px
      },
    },
  },
  plugins: [],
}

