module.exports = {
  plugins: ["css-modules", "@typescript-eslint"],
  extends: [
      "plugin:css-modules/recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  rules: {
      "css-modules/no-unused-class": [1, { "camelCase": true }],
      "css-modules/no-undef-class": [2, { "camelCase": true }],
      "@typescript-eslint/no-unused-vars": "warn"
  }
}