/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-desktop': "url('./images/bg-header-desktop.svg')",
      },
      fontFamily: {
        'league-md' : 'League Spartan Med',
        'league-b' : 'League Spartan Bold',
      },
      fontSize: {
        'default' : '15px',
        'default-large' : '20px',
        'title' : '20px',
        'title-large' : '25px',
      },
      colors: {
        'tag-text-col' : 'hsl(180, 29%, 50%)',
        'dark-grey-cyan' : 'hsl(180, 8%, 52%)',
        'filter-tablets' : 'hsl(180, 31%, 95%)',
      }
    },
    screens: {
      '2xl' : {'min' : '1920px'},
      'xs' : {'min' : '360px', 'max' : '480px'},
    },
  },
  plugins: [],
}