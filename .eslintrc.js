module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    React: true,
    JSX: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
