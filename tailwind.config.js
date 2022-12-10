/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito"],
      },
      colors: {
        black_light: "#0F172A;",
        Purple_blue: "#9333EA;;",
        Ash: "#818181",
        Orenge: "#FF0000",
        Light_ash: " #FAF5FF;",
      },
      margin: {
        15: "60px",
      },
    },
  },
  plugins: [],
};
