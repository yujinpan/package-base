/**
 * eslint + prettier 校验代码
 */
module.exports = {
  root: true,

  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],

  plugins: ['prettier', '@typescript-eslint'],

  rules: {
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        arrowParens: 'always',
        semi: true,
        trailingComma: 'all',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    eqeqeq: ['error', 'always'],
  },

  parser: '@typescript-eslint/parser',

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
