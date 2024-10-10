module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Ensure your Svelte files are included here
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',
        brown: {
          50: '#f5f5f4',
          200: '#c6a58d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
