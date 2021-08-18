module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        footerGray: "#F3F3F5",
        gray: {
          light: '#F3F3F5',
          DEFAULT: '#999999',
          dark: '#666666',
        }
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
