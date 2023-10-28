/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','home.html','home1.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#1D5883',
        secondary: '#047F6C',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

