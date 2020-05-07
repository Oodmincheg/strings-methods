module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-plusplus': 'off',
    'no-trailing-spaces': 'error',
    indent: ['error', 2],
    'prefer-const': 'error',
    'no-var': 'error',
  },
};
