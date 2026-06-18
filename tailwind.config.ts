import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1d1918",
        navy: "#082763",
        blue: "#0f57a8",
        gold: "#d4a331",
        sky: "#a9ccea",
        mist: "#eef4f8"
      },
      boxShadow: {
        glass: "0 22px 70px rgba(31, 54, 77, 0.18)",
        card: "0 24px 70px rgba(38, 72, 107, 0.13)"
      },
      borderRadius: {
        pill: "999px"
      }
    }
  },
  plugins: []
};

export default config;
