module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: [2, 'never'],
    'comma-dangle': ['error', 'never'],
    'jsx-a11y/anchor-is-valid': 'off'
  }
}
