module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura', 'json'],
  collectCoverage: true,
  testMatch: ['**/?(*.)(test).ts?(x)'],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.css',
    '!src/**/stories.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/**/mock.ts(x)?'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  }
}
