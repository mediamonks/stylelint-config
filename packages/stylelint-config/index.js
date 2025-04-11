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
  plugins: ['stylelint-order', 'stylelint-use-logical'],
  rules: {
    /**
     * Stylelint rules
     */
    'alpha-value-notation': 'number',
    'color-hex-length': 'short',
    'declaration-block-single-line-max-declarations': 0,
    'no-descending-specificity': true,
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
      'custom-properties',
      'dollar-variables',
      'declarations',
      'rules',
      {
        type: 'at-rule',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'media',
      },
    ],
  },
};
