/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class', // or 'media' or 'class'
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    minWidth: {
      '0': '0',
      '15': '150px',
      '20': '200px',
      '25': '250px',
      '30': '300px',
      '35': '350px',
      '40': '400px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     minHeight: {
      '0': '0',
      '15': '150px',
      '20': '200px',
      '25': '250px',
      '30': '300px',
      '35': '350px',
      '40': '400px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }
  },
  plugins: [],
}
