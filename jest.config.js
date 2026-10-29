module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.spec.js'
  ],
  collectCoverage: false,
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ]
}
