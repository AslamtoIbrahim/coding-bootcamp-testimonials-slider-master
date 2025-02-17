import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-blue': 'hsl(240, 38%, 20%)',
        'grayish-blue': 'hsl(240, 18%, 77%)',
      },
      fontFamily: {
        inter: ['Inter','sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
