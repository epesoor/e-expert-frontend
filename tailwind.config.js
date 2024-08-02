/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
  theme: {
      fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
      },
      extend: {
        fontSize: {
            '8px': '0.5rem',
            '12px': '0.75rem',
            '16px': '1rem',
            '20px': '1.25rem',
            '24px': '1.5rem',
        },
      },
  },
  plugins: [],
};