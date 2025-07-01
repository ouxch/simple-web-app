module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    // 'prettier/prettier': 'error',
    // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'off',
    // 'prefer-const': 'error',
    // 'no-var': 'error',
  },
};
