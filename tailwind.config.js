module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'black-300': '#1d1d1d',
        'black-200': '#0B0B0B',
        'black-100': '#242424',
        'red-pink': '#EB3352'
      },
      fontFamily: {
        'montserrat' : ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '1vw' : '1vw',
        '1.2vw' : '1.2vw',
        '1.5vw' : '1.5vw',
        '2vw' : '2vw',
      },
      height: {
        '1/3': '33vh',
        '2/5': '40vh',
        '3/5': '60vh',
        '1/2': '50vh',
        'video-full': '77vh',
      },
      minHeight: {
        'halfscreen': '50vh',
      },
      opacity: {
        '40': '0.4',
        '60': '0.6'
      },
      backgroundOpacity: {
        '80' : '0.8',
        '90' : '0.9',
      }
    },
    
  },
  variants: {},
  plugins: [],
}
