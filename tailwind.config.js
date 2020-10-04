module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: { content: ["./src/**/*.svelte"] },
  theme: {
    extend: {
      textColor: {
        primary: "#d2d2d2",
      },
    },
  },
  variants: {},
  plugins: [],
};
