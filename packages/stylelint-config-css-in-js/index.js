// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    '@mediamonks/stylelint-config',
  ],
  customSyntax: 'postcss-styled-syntax',
  plugins: ['stylelint-use-nesting'],
  rules: {
    'csstools/use-nesting': 'always',
  },
};
