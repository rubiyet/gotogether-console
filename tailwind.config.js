/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'loginModal' : '#bfd5cb',
        'loginModalText' : '#eef1fe',
        'header': '#6A88A0',
        'notification': '#13C2C2',
      },
    },
  },
  plugins: [
  ],
}