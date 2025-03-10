import { defaults } from 'jest-config';

export default {
  rootDir: './',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/**/src/**/*.ts',
    '!**/examples/**',
    '!packages/cli/**',
    '!**/types/**',
    '!**/build/**',
    '!**/node_modules/**',
    '!packages/vckit-oa-renderers',
    '!packages/demo-explorer',
    '!packages/credential-oa',
  ],
  coverageReporters: ['text', 'lcov', 'json'],
  coverageProvider: 'v8',
  coverageDirectory: './coverage',
  extensionsToTreatAsEsm: ['.ts'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/packages/credential-ld/',
    '<rootDir>/packages/vckit-oa-renderers/',
    '<rootDir>/packages/demo-explorer/',
    '<rootDir>/packages/credential-oa/',
    '<rootDir>/.tmp_npm/',
  ],
  testEnvironment: 'node',
  automock: false,
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.m?tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: './packages/tsconfig.settings.json',
      },
    ],
  },
};
