// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: ['stylelint-config-styled-components', '@mediamonks/stylelint-config'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'csstools/use-nesting': 'always',
  },
};
