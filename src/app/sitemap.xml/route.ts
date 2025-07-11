// This file generates a sitemap to help search engines understand your site structure.
export async function GET() {
    // IMPORTANT: Replace this with your app's actual production domain.
    const baseUrl = "https://your-domain.com";

    // Static pages
    const staticRoutes = [
      { url: '/', priority: 1.0 },
      { url: '/pricing', priority: 0.8 },
      { url: '/login', priority: 0.5 },
      { url: '/register', priority: 0.5 },
    ];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes.map(({ url, priority }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>
  `.trim()).join('')}
</urlset>
`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
