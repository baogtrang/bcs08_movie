/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      height: {
        200: '800px',
        banner: "880px",
      },
    },
  },
  plugins: [],
};
