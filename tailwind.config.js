/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing: {
      '0': '0px',
      '5': '5px',
      '10': '10px',
      '20': '20px',
      '25': '25px',
      '26': '26px',
      '30': '30px',
      '45': '45px',
      '58': '58px',
      '80': '80px',
      '98': '98px',
      '200': '200px',
      '210': '210px',
      '300': '300px',
      '320': '320px',
      '470': '470px',
    },
    colors: {
      'primary': '#f3f4f6',
      'black-07': 'rgba(0,0,0,.7) 10%',
      'white': '#FFF',
      'black': '#000',
      'gray-6d': '#6d6d6e',
      'gray-e5': '#e5e5e5',
    },
    extend: {},
  },
  plugins: [],
}