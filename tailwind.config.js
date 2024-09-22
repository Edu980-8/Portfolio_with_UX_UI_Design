/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta esto según tus archivos
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-dark': '#1e1e1e',
        'custom-gray': '#5A5A5A', // Define el color aquí
        'custom-exp-gray': '#a6a6a6',
        'custom-gray-about': '#4847474D',
        'dark-letter': '#5a5a5a',
        'color-card-light':'#e6e6e6'
      },
    },
  },
  plugins: [],
}

