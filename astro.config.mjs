import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import dotenv from 'dotenv';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
dotenv.config();
export default defineConfig({
  integrations: [tailwind(), react()],

  output: 'server',
  adapter: vercel()
});