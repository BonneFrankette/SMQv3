/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#808080',
          400: '#565656',
          500: '#2b2b2b',
          600: '#222222',
          700: '#1a1a1a',
          800: '#111111',
          900: '#080808',
        },
        blue: {
          100: '#d0e0ff',
          200: '#a1c0ff',
          300: '#729fff',
          400: '#437fff',
          500: '#1560ff',
          600: '#104dcc',
          700: '#0c3a99',
          800: '#082766',
          900: '#041333',
        },
        purple: {
          100: '#e9d0ff',
          200: '#d3a1ff',
          300: '#bd72ff',
          400: '#a743ff',
          500: '#9115ff',
          600: '#7410cc',
          700: '#570c99',
          800: '#3a0866',
          900: '#1d0433',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-purple': 'linear-gradient(to right, #1560ff, #9115ff)',
        'blue-purple-vertical': 'linear-gradient(to bottom, #1560ff, #9115ff)',
      },
    },
  },
  plugins: [],
}
