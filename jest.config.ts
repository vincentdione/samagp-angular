export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/**/*.module.ts',
    '!src/**/environment*.ts',
    '!src/main.*.ts',
    '!src/main.ts',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^src/environments/(.*)$': '<rootDir>/src/environments/$1',
  },
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testEnvironment: 'jest-environment-jsdom', // Set the test environment
  verbose: true, // Enable verbose test output
  coverageThreshold: {
    global: {
      statements: 60,  // Réduisez les seuils
      branches: 50,
      functions: 30,
      lines: 60
    },
  },
};
