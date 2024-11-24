/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      'onest': ['Onest', 'ui-sans-serif', 'system-ui', '-apple-system'],
      'instrument': ['Instrument Serif', 'ui-sans-serif', 'system-ui', '-apple-system'],
    },
    extend: {
      colors: {
        // Configure your color palette here
        'ghmPurple': {
          100: "#FFF5FC",
          200: "#EEDCE8",
          300: '#A9518B',
          400: '#C68BB2',
          500: '#A9518B',
          700: '#A13332',

        },
        'ghmBlack': '#0B0B0B',
        'ghmGrey': {
          400: '#FAFAFA',
          500: '#6D6D6D',
          700: '#363636',
          800: '#212121'
        },
        'ghmPink': {
          200: '#EEDCE829',
          600: '#F04A48',
          700: '#EF4948'
        }
        // 'utricleBrown': '#BE6D5C'
        // 'cerebralGrey': {
        //   500: '#5B5B5B',
        //   600: '#1D3444',
        //   700: '#0D1317',
        // },
        // 'cerebralBlue': {
        //   200: '#EDF7FF',
        //   400: '#DCEEFD',
        //   500: '#C1E4FF',
        //   700: '#063255'
        // }
      },
    },
  },
  plugins: [],
}

