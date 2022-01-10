const path = require('path')

module.exports = {
  ...require('./jest.common.js'),
  displayName: 'client',
  coverageDirectory: path.join(__dirname, '../coverage/client'),
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.tsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-axe/extend-expect'],
}
