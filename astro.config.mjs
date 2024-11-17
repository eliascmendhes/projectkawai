import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import dotenv from 'dotenv';
import vercel from '@astrojs/vercel/serverless';
dotenv.config();
export default defineConfig({
  integrations: [
    tailwind()
  ],

  output: 'server',
  adapter: vercel()
});
