/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text':
          'linear-gradient(45deg, #FFFFFF 25%, #763AF5 92%, #A604F2 92%)',
        'btn-gradient': 'linear-gradient(90deg, #763AF5 0%, #A604F2 117.18%)',
      },
    },
  },
  plugins: [],
};
