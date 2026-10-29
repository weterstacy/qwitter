module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.(css|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js'
  },
  testMatch: [
    '**/test/**/*.spec.js',
    '**/__tests__/**/*.js'
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/boot/firebase.js',
    '!**/node_modules/**'
  ]
}
