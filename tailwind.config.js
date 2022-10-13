/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-desktop': "url('images/bg-header-desktop.svg')",
      },
      fontFamily: {
        'league-md' : 'League Spartan Med',
        'league-b' : 'League Spartan Bold',
      }
    },
  },
  plugins: [],
}