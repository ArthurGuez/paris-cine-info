// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  reactHooks.configs['recommended-latest'],
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  { settings: { react: { version: 'detect' } } },
  { ignores: ['**/dist/**', 'lint-staged.config.js'] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
  },
  { files: ['**/*.mjs'], extends: [tseslint.configs.disableTypeChecked] },
  { rules: { '@typescript-eslint/consistent-type-imports': 'error' } },
);
