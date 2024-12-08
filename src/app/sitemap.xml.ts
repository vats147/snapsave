// pages/api/sitemap.xml.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // List your pages (can be dynamic from your CMS or file system)
  const pages = [
    { url: 'https://snapsave.tech/', priority: 1.0 },
    { url: 'https://snapsave.tech/about', priority: 0.8 },
    // ...more pages
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(({ url, priority }) => {
        return `
          <url>
            <loc>${url}</loc>
            <priority>${priority}</priority>
          </url>`;
      })
      .join('')}
  </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();
}
