import { defineConfig } from 'astro/config';

const githubRepository = process.env.GITHUB_REPOSITORY;
const [owner, repository] = githubRepository?.split('/') ?? ['yunny22', 'portfolio'];
const isUserPage = repository === `${owner}.github.io`;

export default defineConfig({
  site: process.env.SITE_URL ?? `https://${owner}.github.io`,
  base: githubRepository && !isUserPage ? `/${repository}` : '/',
  trailingSlash: 'always',
});
