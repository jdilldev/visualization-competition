/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Avenir']
    },
    extend: {
      backgroundImage:
      {
        'starry-mountain': "url('/public/starry-mountain-bg.jpg)"
      }
    },
    screens: {
      'md': '750px',
      'lg': '1700px',
    }
  },
  plugins: [],
}
