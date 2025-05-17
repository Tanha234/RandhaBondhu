/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BB6D64',
        secondary: '#C9C9CB',
      },
    },
  },
  plugins: [],
}
