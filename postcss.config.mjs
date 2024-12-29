/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},  // Active le plugin Tailwind CSS
    autoprefixer: {}, // Ajoute le plugin Autoprefixer pour la compatibilité des navigateurs
  },
};

export default config;
