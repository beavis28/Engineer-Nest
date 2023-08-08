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
        "libre-bodoni": ["Libre Bodoni Regular", "serif"],
        "libre-bodoni-italic": ["Libre Bodoni Italic", "serif"],
        "libre-bodoni-bold": ["Libre Bodoni Bold", "serif"],
      },
      colors: {
        fontcol: '#FDB137',
        bgcolor: "#D9D9D9"
      },
    },
  },
  plugins: [],
};
