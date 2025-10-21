
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        surface: "#181818",
        surface2: "#232323",
        purple: "#4A148C",
        oniRed: "#E53935",
        gray1: "#BDBDBD",
        gray2: "#9E9E9E",
        white: "#FFFFFF",
        sep: "#2e2e2e",
      },
      fontFamily: {
        mont: ["var(--font-mont)", "system-ui", "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: { oni: "0 1px 0 rgba(255,255,255,0.02), 0 6px 24px rgba(0,0,0,0.25)" },
      borderRadius: { r1: "8px", r2: "10px", r3: "12px" },
      container: { center: true, padding: "20px", screens: { lg: "1080px", xl: "1080px", "2xl": "1080px" } },
    },
  },
  plugins: [],
};
export default config;
