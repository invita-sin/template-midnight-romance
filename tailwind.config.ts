import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: "#e8e8f0",
          100: "#c5c5d9",
          200: "#9e9ebf",
          300: "#7777a6",
          400: "#5a5a94",
          500: "#3d3d82",
          600: "#2d2d6b",
          700: "#1e1e4a",
          800: "#12122e",
          900: "#0a0a1a",
        },
        burgundy: {
          50: "#fdf2f4",
          100: "#f9e0e5",
          200: "#f4c6d0",
          300: "#e89aab",
          400: "#d96a83",
          500: "#c94462",
          600: "#b02d4e",
          700: "#932240",
          800: "#7b1e38",
          900: "#6b1c33",
        },
        gold: {
          50: "#fdf8e8",
          100: "#f9edc4",
          200: "#f3df96",
          300: "#eccd5e",
          400: "#d4af37",
          500: "#c49b2e",
          600: "#a37d24",
          700: "#7d5e1c",
          800: "#5c4415",
          900: "#3d2d0e",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-down": "fadeInDown 0.8s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
