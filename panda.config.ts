import { defineConfig, defineTokens } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{tsx}'],

  // Files to exclude
  exclude: [],

  // Only the css prop is allowed
  jsxStyleProps: 'minimal',

  // Fordid shorthand properties
  shorthands: false,

  // Only allow token values and prevent custom or raw CSS values
  strictTokens: true,

  theme: {
    extend: {
      tokens: defineTokens({
        borders: {
          subtle: { value: '1px solid {colors.primary}' },
        },
        colors: {
          black: { value: '#171819' },
          white: { value: '#fff' },
          background: { value: '{colors.black}' },
          text: { value: '{colors.white}' },
          primary: { value: '#e53246' },
        },
      }),
      // semanticTokens: defineSemanticTokens({
      //   colors: {
      //     background: {
      //       value: { _light: '{colors.white}', _dark: '{colors.black}' },
      //     },
      //     text: {
      //       value: { _light: '{colors.primary}', _dark: '{colors.white}' },
      //     },
      //     primary: {
      //       value: { _light: '#1eb3b6', _dark: '#e53246' },
      //     },
      //   },
      // }),
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
