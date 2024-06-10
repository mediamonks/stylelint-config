// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: ['stylelint-config-recommended', '@mediamonks/stylelint-config'],
  customSyntax: 'postcss-styled-syntax',
  plugins: ['stylelint-use-nesting'],
  rules: {
    'csstools/use-nesting': 'always',

    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-empty-source': null,
  },
};
