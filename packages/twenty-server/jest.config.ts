module.exports = {
  // to enable logs, comment out the following line
  silent: true,
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',

  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
  },
  rootDir: './',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
};
