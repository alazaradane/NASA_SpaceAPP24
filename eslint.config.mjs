const antfu = require('@antfu/eslint-config');
const nextPlugin = require('@next/eslint-plugin-next');
const jestDom = require('eslint-plugin-jest-dom');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const playwright = require('eslint-plugin-playwright');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const tailwind = require('eslint-plugin-tailwindcss');
const testingLibrary = require('eslint-plugin-testing-library');

module.exports = antfu({
  react: true,
  typescript: true,

  lessOpinionated: true,
  isInEditor: false,

  stylistic: {
    semi: true,
  },

  formatters: {
    css: true,
  },

  ignores: [
    'migrations/**/*',
    'next-env.d.ts',
  ],
}, ...tailwind.configs['flat/recommended'], jsxA11y.flatConfigs.recommended, {
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
  },
}, {
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
  },
}, {
  files: [
    '**/*.test.ts?(x)',
  ],
  ...testingLibrary.configs['flat/react'],
  ...jestDom.configs['flat/recommended'],
}, {
  files: [
    '**/*.spec.ts',
    '**/*.e2e.ts',
  ],
  ...playwright.configs['flat/recommended'],
}, {
  rules: {
    // 'import/order': 'off', // Avoid conflicts with `simple-import-sort` plugin
    // 'sort-imports': 'off', // Avoid conflicts with `simple-import-sort` plugin
    // 'style/brace-style': ['error', '1tbs'], // Use the default brace style
    // 'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
    // 'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    // 'node/prefer-global/process': 'off', // Allow using `process.env`
    // 'test/padding-around-all': 'error', // Add padding in test files
    // 'test/prefer-lowercase-title': 'off', // Allow using uppercase titles in test titles
  },
});
