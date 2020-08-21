module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    semi: [2, "never"],
    "comma-dangle": [2, "always-multiline"],
    "no-shadow": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0
  }
};
