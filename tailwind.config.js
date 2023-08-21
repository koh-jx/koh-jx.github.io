/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Teko: ['Teko', 'Segoe UI', 'Roboto', 'sans-serif'],
        Pixel: ['Awfully Digital', 'Segoe UI', 'Roboto', 'sans-serif'],
        PixelBlock: ['Ernest', 'Awfully Digital', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

