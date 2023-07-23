module.exports = {
  env: { browser: true, node: true, es2020: true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 'latest' },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.astro'],
      extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended',
      ],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            ignoreRestSiblings: true,
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['react-refresh'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            ignoreRestSiblings: true,
          },
        ],
      },
    },
    {
      files: ['*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
      ],
    },
  ],
}
