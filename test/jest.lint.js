module.exports = {
  ...require('./jest.common.js'),
  runner: 'jest-runner-eslint',
  displayName: 'lint',
  testMatch: ['<rootDir>/src/**/*.(js|ts|tsx)'],
}
