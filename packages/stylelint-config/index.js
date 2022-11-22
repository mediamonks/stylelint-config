module.exports = {
  extends: ["stylelint-config-prettier"],
  plugins: [
    "stylelint-order",
    "stylelint-use-logical",
    // "stylelint-devtool-prop-order",
  ],
  rules: {
    /**
     * Stylelint rules
     */
    "color-no-invalid-hex": true,
    "no-irregular-whitespace": true,
    "alpha-value-notation": "number",
    "color-function-notation": "modern",
    "color-hex-case": "upper",
    "color-hex-length": "long",
    "declaration-block-single-line-max-declarations": 0,
    "no-descending-specificity": true,
    "number-leading-zero": "always",
    "custom-property-no-missing-var-function": true,
    "max-nesting-depth": [
      1,
      {
        ignore: ["blockless-at-rules"],
      },
    ],

    /**
     * Plugin rules
     */
    // Replace with `stylelint-devtool-prop-order` when it's published
    "order/properties-order": [
      [],
      {
        unspecified: "bottomAlphabetical",
        emptyLineBeforeUnspecified: "never",
      },
    ],
    "order/order": [
      {
        type: "at-rule",
        hasBlock: false,
      },
      {
        type: "at-rule",
        hasBlock: true,
      },
      "custom-properties",
      "dollar-variables",
      "declarations",
      {
        type: "at-rule",
        name: "media",
      },
      "rules",
    ],
    "csstools/use-logical": "always",
    // "csstools/devtool-prop-order": "always",
  },
};
