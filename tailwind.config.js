/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        primary: {
          DEFAULT: '#0353A4',
          dark: '061A40',
          light: '#B9D6F2',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(white|black|primary)-(dark|light)/,
      variants: ['hover'],
    },
  ],
}
