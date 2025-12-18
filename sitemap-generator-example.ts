// Example: How to add automatic sitemap generation to vite.config.ts
// This is a reference file - implement when you have more pages

/*
1. Install the plugin:
   npm install vite-plugin-sitemap --save-dev

2. Update vite.config.ts:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://quillmarketing.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/contact',
        '/blog',
        // Add all your routes here
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      exclude: ['/admin', '/private'],
    }),
  ],
});

3. The sitemap.xml will be automatically generated during build
*/

// Alternative: Generate sitemap programmatically
export const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/services', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog', priority: 0.9, changefreq: 'daily' },
];

export function generateSitemap() {
  const baseUrl = 'https://quillmarketing.com';
  const today = new Date().toISOString().split('T')[0];
  
  const urls = routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
