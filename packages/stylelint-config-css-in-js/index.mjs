// eslint-disable-next-line unicorn/prefer-module
export default {
  extends: ['stylelint-config-recommended', '@mediamonks/stylelint-config'],
  customSyntax: 'postcss-styled-syntax',
  plugins: ['stylelint-use-nesting'],
  rules: {
    'csstools/use-nesting': [
      'always',
      {
        ignoreAtRules: ['media'],
      },
    ],
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-empty-source': null,
    'nesting-selector-no-missing-scoping-root': null,
  },
};
