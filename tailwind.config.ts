import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // Cible tous les fichiers dans app/
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Cible tous les fichiers dans pages/ (si vous en avez)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Cible tous les fichiers dans components/
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Vous pouvez définir des couleurs personnalisées
        foreground: "var(--foreground)", // Utilisation de variables CSS si nécessaire
      },
    },
  },
  plugins: [],
} satisfies Config;
