const ORDER_RULES = require("./rules/order");
const REACT_RULES = require("./rules/react");

const PLUGINS = ["import", "prettier", "react", "react-hooks"];

module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  overrides: [
    {
      files: ["*.jsx", "*.js"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
      ],
      plugins: ["babel", ...PLUGINS],
      rules: { ...REACT_RULES, ...ORDER_RULES },
    },
  ],

  rules: {
    "no-console": "warn",
    ...REACT_RULES,
    ...ORDER_RULES,
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
