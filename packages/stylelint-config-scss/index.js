const patternRuleOptions = [
  /^[a-z][a-zA-Z0-9]*$/u,
  {
    message(selector) {
      return `Expected ${selector || 'name'} to be camelCase`;
    },
  },
];

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-use-nesting'],
  rules: {
    /**
     * Scss
     */
    'scss/dollar-variable-pattern': patternRuleOptions,

    /**
     * CSS Tools
     */
    'csstools/use-nesting': 'always',
  },
};
