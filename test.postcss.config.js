module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 1920,
      viewportHeight: 1080, 
      unitPrecision: 5, 
      viewportUnit: 'vw',
      selectorBlackList: [
        "no-auto"
      ], 
      minPixelValue: 1, 
      mediaQuery: false 
    }
  }
}
