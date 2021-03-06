module.exports = {
  env: {
      browser: true,
      es2021: true,
      node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
      quotes: ["error", "double"],
      "no-console": "off",
      indent: ["error", 4],
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect
  },
};
// https://reactjs.org/docs/hooks-rules.html
