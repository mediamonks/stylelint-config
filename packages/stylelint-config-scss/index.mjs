const patternRuleOptions = [
  /^[a-z][a-zA-Z0-9]*$/u,
  {
    message(selector) {
      return `Expected ${selector || 'name'} to be camelCase`;
    },
  },
];

// eslint-disable-next-line unicorn/prefer-module
export default {
  extends: ['stylelint-config-recommended-scss', '@mediamonks/stylelint-config'],
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

    /**
     * Incompatible with Prettier
     */
    'scss/operator-no-newline-after': null,
    'scss/operator-no-newline-before': null,
  },
};
