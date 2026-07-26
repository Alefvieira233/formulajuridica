import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        track: "#060607",
        carbon: "#0D0D0F",
        asphalt: "#141417",
        steel: "#1D1D22",
        race: {
          DEFAULT: "#E10600",
          600: "#C00500",
          700: "#9B0400",
          900: "#4A0200",
        },
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
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
        content: "74rem",
      },
      boxShadow: {
        race: "0 0 40px -8px rgba(225, 6, 0, 0.55)",
        "race-sm": "0 0 24px -6px rgba(225, 6, 0, 0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
