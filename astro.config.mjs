// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel'; // Added vercel adapter import

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Added output property
  adapter: vercel(), // Added adapter property
  devToolbar: {
    enabled: false
  },
  site: 'https://longngo.work',
  image: {
    domains: ['placehold.co', 'images.unsplash.com', 'longngo.design', 'longngo.work', 'res.cloudinary.com'],
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), react(), keystatic(), icon({
    include: {
      "simple-icons": ["linkedin", "behance"],
      "mdi": ["school", "briefcase", "email"]
    }
  })]
});