import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'], // Define a fonte personalizada
      },
      colors: {
        gray_theme: '#2D2D2D', // Altere o nome conforme necessário
      },
    },
  },
  plugins: [],
} satisfies Config;
