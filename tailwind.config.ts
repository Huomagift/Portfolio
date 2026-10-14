import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E0E10",
          lighter: "#16161B",
          surface: "#1C1C22",
          border: "rgba(255, 255, 255, 0.1)",
          textMuted: "#8F8F9D",
        },
        bone: {
          DEFAULT: "#F4EFE6",
          darker: "#E5DFD3",
          surface: "#FAF6EF",
          border: "rgba(14, 14, 16, 0.12)",
          textMuted: "#66625B",
        },
        coral: {
          DEFAULT: "#FF5A36",
          hover: "#E44927",
        },
        tealAccent: {
          DEFAULT: "#2DD4BF",
        },
      },
      fontFamily: {
        sans: ["'Lato'", "sans-serif"],
        body: ["'Lato'", "sans-serif"],
        display: ["'Lato'", "sans-serif"],
        accent: ["'Lato'", "sans-serif"],
        mono: ["'Lato'", "monospace"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
