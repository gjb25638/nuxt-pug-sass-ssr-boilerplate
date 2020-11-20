module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  // add your custom rules here
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/mustache-interpolation-spacing": "off",
    "vue/attributes-order": "off",
    "vue/no-async-in-computed-properties": "off",
    "vue/no-side-effects-in-computed-properties": "off",
    semi: "off",
    quotes: "off",
    "vue/html-indent": "off",
    "vue/html-closing-bracket-newline": "off",
    "space-before-function-paren": "off",
    "vue/no-unused-components": "off",
    "vue/require-default-prop": "off",
    "vue/require-prop-types": "off",
    "arrow-parens": "off",
    "no-unused-vars": "off",
    "prefer-const": "off",
    "object-shorthand": "off",
  }
};