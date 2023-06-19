/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      container: {
        center:true,
      },
      colors: {
        f: '#10cab7',
        s: '#2c4755',
        t: '#ebeced',
      }
    },
  },
  plugins: [],
}

