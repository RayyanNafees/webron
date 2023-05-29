import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import UnoCSS from 'unocss/astro';
import sitemap from '@astrojs/sitemap';

import vercel from "@astrojs/vercel/serverless";
import solidJs from "@astrojs/solid-js";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), UnoCSS(), solidJs(), image()],
  output: "server",
  adapter: vercel()
});