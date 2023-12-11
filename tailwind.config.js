/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {

        'slider1':"url('./assets/slider2.jpg')",
        'blog1':"url('./assets/Blog1.jpg')",
        'blog4':"url('./assets/Blog4.jpg')",

        'slider2':"url('./assets/slider1.jpg')",

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
