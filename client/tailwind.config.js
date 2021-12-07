module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '450px'},
    },
    extend: {
      backgroundImage: () => ({
        'app-background': "url('./assets/test.jpg')",
      })
    },
  },
  variants : {
    backgroundBlendMode: ['hover', 'focus'],
  }

}
