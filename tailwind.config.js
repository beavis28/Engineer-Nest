module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // You can add custom sizes to the width and height as needed.
      width: {
        logo: "50px",
      },
      height: {
        logo: "50px",
      },
      fontFamily: {
        Montserrat: ["Montserrat Regular", "serif"],
        "Montserrat-italic": ["Montserrat Italic", "serif"],
        "Montserrat-bold": ["Montserrat Bold", "serif"],
      },
      colors: {
        fontcol: "#0055B0",
        bgcolor: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
