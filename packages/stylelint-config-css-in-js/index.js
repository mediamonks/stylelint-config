module.exports = {
  extends: ['stylelint-config-styled-components', '@mediamonks/stylelint-config'],
  customSyntax: '@stylelint/postcss-css-in-js',
  plugins: ['stylelint-use-nesting'],
  rules: {
    'csstools/use-nesting': 'always',
  },
};
