module.exports = {
  extends: 'airbnb',
  rules: {
    // Turn off the rules I don't agree with
    'import/prefer-default-export': false,
    'react/prefer-stateless-function': false
  },
  env: {
    browser: true
  }
};
