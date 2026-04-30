import { defineConfig } from 'astro/config';
import githubPages from '@astrojs/github-pages';

export default defineConfig({
  site: 'https://sam-reiss.github.io', // your GitHub username
  base: '/sam-portfolio',              // your repo name
  integrations: [githubPages()],
});