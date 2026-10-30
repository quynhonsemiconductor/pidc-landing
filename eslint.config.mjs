import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
    },
  },
  {
    // browser script (public/scripts) and node scripts (scripts/) run in different globals
    files: ['public/scripts/**'],
    languageOptions: {
      globals: { document: 'readonly', matchMedia: 'readonly', addEventListener: 'readonly' },
    },
  },
  {
    // node scripts (scripts/): Node >=22 globals (Buffer, fetch, WebSocket are built-in)
    files: ['scripts/**'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        URL: 'readonly',
        Buffer: 'readonly',
        fetch: 'readonly',
        WebSocket: 'readonly',
      },
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'design/**'], // design artifacts: uiux-studio mockups, not shipped source
  },
];
