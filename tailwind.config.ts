import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        phaser: {
          bg: "#080a14",
          panel: "#0f1423",
          border: "rgba(255,255,255,0.06)",
          green: "#00ffc8",
          blue: "#00b4ff",
          purple: "#7b61ff",
          amber: "#ffb800",
          red: "#ff4040",
          pink: "#ff4ecb",
        },
      },
      fontFamily: {
        mono: ["'SF Mono'", "'Fira Code'", "'Courier New'", "monospace"],
      },
      animation: {
        "beam-pulse": "beamPulse 1.5s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        beamPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,255,200,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0,255,200,0.2)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
