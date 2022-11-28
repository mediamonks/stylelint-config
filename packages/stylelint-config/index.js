const patternRuleOptions = [
  /^[a-z][a-zA-Z0-9]*$/u,
  {
    message(selector) {
      return `Expected ${selector} to be camelCase`;
    },
  },
];

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-use-logical', 'stylelint-use-nesting'],
  rules: {
    /**
     * Stylelint rules
     */
    'color-no-invalid-hex': true,
    'no-irregular-whitespace': true,
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'color-hex-length': 'long',
    'declaration-block-single-line-max-declarations': 0,
    'no-descending-specificity': true,
    'number-leading-zero': 'always',
    'custom-property-no-missing-var-function': true,
    'max-nesting-depth': [
      // eslint-disable-next-line no-magic-numbers
      1,
      {
        ignore: ['blockless-at-rules'],
      },
    ],
    'selector-class-pattern': patternRuleOptions,
    'selector-id-pattern': patternRuleOptions,

    /**
     * Plugin rules
     */
    'csstools/use-logical': 'always',
    'order/order': [
      {
        type: 'at-rule',
        hasBlock: false,
      },
      {
        type: 'at-rule',
        hasBlock: true,
      },
      'custom-properties',
      'dollar-variables',
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      'rules',
    ],
  },
};
