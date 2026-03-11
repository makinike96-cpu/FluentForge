import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D4FF",
        dark: "#0A2540",
        light: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "system_ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;