module.exports = {
  preset: '@quasar/app/test',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(quasar|@quasar|date-fns)/)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.(css|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '^quasar$': 'quasar/dist/quasar.esm.js'
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
  ],
  globals: {
    'vue-jest': {
      babelConfig: {
        presets: [
          ['@babel/preset-env', {
            targets: { node: 'current' }
          }]
        ]
      }
    }
  }
}
