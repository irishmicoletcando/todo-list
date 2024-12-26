/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        'bright-blue': 'hsl(220, 98%, 61%)',
        // light theme
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue-light': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue-light': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue-light': 'hsl(235, 19%, 35%)',
        // dark theme
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue-dark': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-dark-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue-dark': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue-dark': 'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-dark-hover': 'hsl(237, 14%, 26%)'
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'serif']
      }
    },
  },
  plugins: [],
}