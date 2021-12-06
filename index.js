'use strict';

module.exports = {
  extends: ['stylelint-config-standard'],
  customSyntax: require('postcss-scss'),
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
