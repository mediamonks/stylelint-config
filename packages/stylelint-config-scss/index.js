module.exports = {
  extends: ['stylelint-config-standard-scss', '@mediamonks/stylelint-config'],
  plugins: ['stylelint-use-nesting'],
  rules: {
    'csstools/use-nesting': 'always',
  },
};
