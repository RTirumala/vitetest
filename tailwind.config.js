module.exports = {
  purge: {
    content: ["./src/**/*.jsx", "./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nba: {
          DEFAULT: "#17408B",
          red: "#17408B",
        },
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
