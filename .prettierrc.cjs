module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
