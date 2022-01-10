module.exports = {
  ...require('./test/jest.common.js'),
  collectCoverageFrom: ['**/src/**/*.tsx'],
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 30,
      functions: 30,
      lines: 30,
    },
  },
  projects: ['./test/jest.client.js', './test/jest.lint.js'],
}
