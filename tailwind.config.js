module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "cursive"],
        josefin: ["Josefin Sans", "sans-serif"],
        monton: ["Monoton", "cursive"],
        raggae: ["Reggae One", "cursive"],
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#1f1d29",
        secondary: "#2f2736",
        danger: "#d31c3e",
        darkBlue: "#282535",
        darkBlueLight: "#3a3747",
      }),
      textColor: {
        primary: "#1f1d29",
        secondary: "#2f2736",
        danger: "#d31c3e",
        darkBlue: "#282535",
        darkBlueLight: "#3a3747",
      },
      zIndex: {
        "-10": "-10",
      },
      minHeight: {
        7: "7rem",
      },
      height: {
        80: "80vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
