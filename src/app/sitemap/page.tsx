// src/app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.pdfcrops.com/</loc>
    <lastmod>2023-01-29T12:16:24+01:00</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.pdfcrops.com/tos</loc>
    <lastmod>2023-01-29T12:16:24+01:00</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Add more URLs as needed -->
</urlset>`;

export async function GET() {
  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
