/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        // coral: {
        //   500: 'var(--color-coral-500)',
        //   600: 'var(--color-coral-600)',
        // },
        customOrange: '#ec744a', // Base color
        hoverOrange: '#f86c3e', // Hover color
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
