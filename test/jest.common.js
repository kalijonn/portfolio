const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: ['node_modules', path.join(__dirname, '../src')],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
}
