import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: "400px",

      smm: "500px",

      sm: "640px",

      md: "775px",

      lg: "998px",

      xl: "1280px",

      "1.5xl": "1400px",

      "2xl": "1500px",

      "3xl": "1600px",

      "4xl": "1700px",

      "5xl": "1800px",
    },
    extend: {
      backgroundImage: {
        "hero-background":
          "url('../public/assets/images/Background pattern.png')",
      },
    },
  },
  plugins: [],
};
export default config;
