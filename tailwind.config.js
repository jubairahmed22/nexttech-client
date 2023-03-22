/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      progress: {
        'full': '100%',
        '3/4': '75%',
        '1/2': '50%',
        '1/4': '25%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
