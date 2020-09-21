module.exports = {
  // env: {
  //   node: true,
  //   es6: true,
  // },
  // root: true,
  // parser: '@typescript-eslint/parser',
  // plugins: ['@typescript-eslint'],
  // extends: [
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:react/recommended',
  //   'prettier/@typescript-eslint',
  //   'plugin:react-hooks/recommended',
  // ],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn', // Consider using explicit annotations for object literals and function return types even when they can be inferred.
    'no-empty': 'warn',
  },
}
