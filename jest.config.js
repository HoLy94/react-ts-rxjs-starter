module.exports = {
  name: 'react-ts-rxjs-starter',
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/styles.ts',
    '!**/models.ts',
    '!**/components.ts',
  ],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
};
