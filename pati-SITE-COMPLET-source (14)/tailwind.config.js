/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        pati: {
          green: "#0F6E56",
          mid: "#5DCAA5",
          light: "#9FE1CB",
          yellow: "#F5C518",
          sun: "#FFC93C",
          coral: "#FF6B4A",
          sky: "#3FB6E8",
          footer: "#0D2B1A",
        },
      },
      borderRadius: { lg: "var(--radius)" },
      boxShadow: { kid: "0 10px 30px -10px rgba(15,110,86,0.25)" },
      fontFamily: {
        sans: ["Nunito", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Fredoka", "Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
