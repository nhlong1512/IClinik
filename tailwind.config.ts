import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      teal_strong: "#2c7a7b",
      teal_light: "#14b8a6",
      white_cloud: "#FFFFFF",
      dark_night: "#000000",
      blue_wave: "#0E3055",
      dark_overlay: "rgba(57, 57, 57, 0.3)",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
export default config;
