/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Components/**/*.razor",
    "./Pages/**/*.razor",
    "./../BlazorTailwind.Client/Pages",
    "./../BlazorTailwind.Client/Components",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

