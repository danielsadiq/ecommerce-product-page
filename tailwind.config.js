/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Kumbh Sans, sans-serif"
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}

