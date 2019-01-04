module.exports = {
  extends: [
    'eslint-config-alloy/typescript-react',
  ],
  globals: {},
  settings: {
    react: {
      version: '16.0'
    }
  },
  rules: {
    complexity: 'off',
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    "max-nested-callbacks": ['error', 4],
    'no-param-reassign': 'off',
    "no-return-await": 'off',
    'no-shadow': 'error',
    'no-unused-vars': 'off',
    radix: 'off',
    'react/jsx-indent-props': ['error', 2]
  }
}
