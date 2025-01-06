module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Ensure your Svelte files are included here
  ],
  theme: {
    extend: {
      colors: {
        aruvupink: '#FF94AC',
        aruvulightpink: '#FDD0DA',
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
