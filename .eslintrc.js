module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/no-relative-packages': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '../../*',
            group: 'parent',
            position: 'after',
          },
          {
            pattern: '../*',
            group: 'parent',
            position: 'after',
          },
          {
            pattern: './*',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../../../*', '../../../../*', '../../../../../*'],
            message: 'Relative imports with 3 or more levels are not allowed. Use absolute imports (@/*) instead.',
          },
          {
            group: ['src/*'],
            message: 'Direct imports from src/* are not allowed. Use @/* instead.',
          },
        ],
      },
    ],
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'dayjs',
            message:
              "Please import dayjs from '@/common/utils/dayjs' instead.",
          },
          {
            name: '@nestjs/config',
            importNames: ['ConfigModule'],
            message:
              "Please import 'ConfigModule' from '@/modules/config/config.module' instead.",
          },
          {
            name: '@nestjs/axios',
            importNames: ['HttpModule'],
            message:
              "Please import 'HttpModule' from '@/modules/http/http.module' instead.",
          },
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
  },
  overrides: [
    {
      files: ['src/modules/config/config.module.ts'],
      rules: {
        '@typescript-eslint/no-restricted-imports': 'off',
      },
    },
  ],
};