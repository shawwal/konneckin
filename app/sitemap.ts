import { MetadataRoute } from 'next'
import { insightsArticles } from '@/data/insightsArticles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.konneckin.com'

  // Get all your static pages
  const staticRoutes = [
    '', // Homepage
    '/about',
    '/business-expansion',
    '/business-matchmaking',
    '/careers',
    '/company-registration',
    '/company-regulation',
    '/contact',
    '/expatriate-support',
    '/importer-of-record',
    '/industries',
    '/industry-coverage',
    '/insights',
    '/kitas',
    '/licensing',
    '/market-research',
    '/payroll-management',
    '/post-establishment',
    '/privacy-policy',
    '/product-certification-regulatory-compliance',
    '/recruitment-service',
    '/services',
    '/tax-accounting-solutions',
    '/terms',
  ];

  const staticUrls = staticRoutes.map((route) => {
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as 'weekly',
      priority: route === '' ? 1 : 0.8, // Give homepage highest priority
    };
  });

  const dynamicUrls = insightsArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));

  return [
    ...staticUrls,
    ...dynamicUrls,
  ];
}