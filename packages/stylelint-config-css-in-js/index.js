// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: ['stylelint-config-styled-components', 'stylelint-config-prettier'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'csstools/use-nesting': 'always',
  },
};
