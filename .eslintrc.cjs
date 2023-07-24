module.exports = {
  env: { browser: true, node: true, es2020: true },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
      ],
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
