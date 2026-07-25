import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D1A",
          900: "#0A1628",
          800: "#10203A",
          700: "#1A2F52",
          600: "#24406E",
        },
        gold: {
          300: "#E8D48A",
          400: "#DCBB5E",
          500: "#C9A227",
          600: "#A98620",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
