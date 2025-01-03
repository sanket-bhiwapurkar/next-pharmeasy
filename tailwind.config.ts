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
        "duo-radial":
          "radial-gradient(150px 150px at 95% 0%, rgba(253, 186, 43, 0.3) 0%, rgba(253, 186, 43, 0) 100%), radial-gradient(150px 150px at 5% 0%, rgba(120, 213, 242, 0.3) 0%, rgba(253, 186, 43, 0) 100%)",
      },
      colors: {
        primary: "#10847e",
        secondary: "#eef4ff",
        dark: "#30363C",
        danger: "#f76b6d",
        disabled: "#949494",
        info: "#8573e1", //violet
        warning: "#fc8019",
      },
      fontSize: {
        xsm: "0.675rem",
      },
    },
  },
  plugins: [],
};
export default config;
