/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-dark': "url(/bg-desktop-dark.jpg)",
        'desktop-light': "url(/bg-desktop-light.jpg)",
        'mobile-dark': "url(/bg-mobile-dark.jpg)",
        'mobile-light': "url(/bg-mobile-light.jpg)"
      },
      colors: {
        'light-gray': '#F5F9EA',
        'dark-gray': '#454545'
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'serif']
      }
    },
  },
  plugins: [],
}