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
        // ...from the Qantas Hotels website
        qantasRed: "rgb(224, 14, 0)",
        qantasGreen: "rgb(38, 167, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
