module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.spec.js'
  ],
  transform: {},
  collectCoverage: false,
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ]
}
