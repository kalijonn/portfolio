const path = require('path')

module.exports = {
  ...require('./jest.common.js'),
  rootDir: path.join(__dirname, '..'),
  displayName: 'client',
  coverageDirectory: path.join(__dirname, '../coverage/client'),
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-axe/extend-expect'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
  },
}
