import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': 'allow-with-description',
          'ts-expect-error': 'allow-with-description',
        },
      ],
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-misused-new': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
);
