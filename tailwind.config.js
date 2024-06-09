// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  
      colors:{
          "primary-main":"#f5c518",
          "primary-dark":"#624f0a",
          "primary-light":"#fbe8a3",

          //secondary 
          "secondry-main":"#0f1111;",
          "secondry-dark":"#060707",
          "secondry-light":"#9fa0a0",
          //blue color
          "blue-main":"#5799ef",
          "blue-dark":"#233d60",
          "blue-light":"#bcd6f9",
      },

      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.55s ease-in',
      },

    },
  },
  variants: {},
  plugins: [],
}
