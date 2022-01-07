module.exports = {
  purge: ['src/**/*.tsx', './public/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'width-font': 'width, font-size',
      },
      inset: {
        18: '4.5rem',
      },
    },
  },
}
