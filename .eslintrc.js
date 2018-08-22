module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb/base',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }]
  },
  settings: {
    react: {
      version: '16.4'
    }
  }
};
