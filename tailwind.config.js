module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "'Noto Sans JP'", "sans-serif"],
        sans: ["'Noto Sans JP'", "'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: "#05070d",
        panel: "#0b0f1a",
        line: "rgba(255,255,255,0.08)",
        nest: {
          50: "#eaf1ff",
          300: "#7fb0ff",
          400: "#4d8bff",
          500: "#2f6bff",
          600: "#1f4fe0",
        },
        cyan: { 400: "#5ad1ff" },
      },
    },
  },
  plugins: [],
};
