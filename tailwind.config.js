/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#053161',
        'secondary': '#ff6a34',
        'lightGrayishCyan': '#bed9da'
      }
    }
  },
  plugins: []
};
