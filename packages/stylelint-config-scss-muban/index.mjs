// eslint-disable-next-line prefer-named-capture-group, unicorn/no-unsafe-regex
const kebabCase = /^([a-z][\da-z]*)(-[\da-z]+)*$/u;
const patternRuleOptions = [
  kebabCase,
  {
    message(selector) {
      return `Expected ${selector} to be kebab-case`;
    },
  },
];

// eslint-disable-next-line unicorn/prefer-module
export default {
  extends: ['@mediamonks/stylelint-config-scss'],

  /**
   * Overrides to make @mediamonks/stylelint-config-scss compatible with muban projects
   */
  rules: {
    'selector-class-pattern': patternRuleOptions,
    'selector-id-pattern': patternRuleOptions,
  },
};
