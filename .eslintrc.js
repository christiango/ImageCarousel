module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // Turn off the rules I don't agree with
    'comma-dangle': 0,
    'arrow-parens': 0,
    'no-unused-vars': 0 // false positive for react import
  },
  parser: 'babel-eslint',
  env: {
    browser: true
  }
};
