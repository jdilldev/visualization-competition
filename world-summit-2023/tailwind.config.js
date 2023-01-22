/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Avenir'],
      dreamscape: ['Dreamscape'],
      equinox: ['Equinox'],
      nebula: ['Nebula'],
      'nebula-hollow': ['Nebula-Hollow'],
      flare: ['Flare'],
      stacker: ['Stacker'],
      progress: ['Progress'],
      agelast: ['Agelast'],
      axeon: ['Axeon']
    },
    extend: {
      backgroundImage:
      {
        'starry-mountain': "url('/public/starry-mountain-bg.jpg)"
      }
    },
    screens: {
      'md': '750px',
      'lg': '1140px',
    }
  },
  plugins: [],
}
