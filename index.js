/* eslint-disable global-require */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  customSyntax: require('postcss-scss'),
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'max-empty-lines': 1,
    'number-leading-zero': 'always',
    'declaration-block-single-line-max-declarations': 0,
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'color-function-notation': 'modern',
    'alpha-value-notation': 'number',
    'unit-disallowed-list': ['s'],
    'max-nesting-depth': [
      2,
      {
        ignoreAtRules: ['media'],
        ignore: ['pseudo-classes'],
      },
    ],
  },
};
