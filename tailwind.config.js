/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  // important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge:
    process.env.NODE_ENV === 'production'
      ? {
          layers: ['utilities'],
          content: ['./src/**/*.tsx'],
          whitelistPatterns: [],
        }
      : false,
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', '-apple-system'],
      serif: ['var(--font-serif)', 'Cambria'],
      mono: ['Menlo', 'SFMono-Regular'],
    },
  },
}
