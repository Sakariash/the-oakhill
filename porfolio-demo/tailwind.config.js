module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'oakhill-green': '#C3CABA',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0' },
          '5%': { opacity: '0.1' },
          '10%': { opacity: '0.2' },
          '15%': { opacity: '0.3' },
          '20%': { opacity: '0.4' },
          '25%': { opacity: '0.5' },
          '30%': { opacity: '0.6' },
          '35%': { opacity: '0.7' },
          '40%': { opacity: '0.8' },
          '45%': { opacity: '0.9' },
          '50%': { opacity: '1' },  // Fully visible
          '60%': { opacity: '1' },
          '65%': { opacity: '0.9' },
          '70%': { opacity: '0.8' },
          '75%': { opacity: '0.7' },
          '80%': { opacity: '0.6' },
          '85%': { opacity: '0.5' },
          '90%': { opacity: '0.4' },
          '95%': { opacity: '0.3' },
          '97%': { opacity: '0.2' },
          '100%': { opacity: '0.1' }  // Fully transparent
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 4s ease-in-out', // Increased to 8s
      },
      fontFamily: {
        diatype: ['Diatype', 'sans-serif'],
      },
    },
  },
  plugins: [],
}