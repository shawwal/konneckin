import { MetadataRoute } from 'next'

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

  // If you have dynamic pages (e.g., /insights/[slug]),
  // you would fetch them from your CMS or database here and add them.

  // For example:
  // const insightPosts = await fetchAllInsightSlugs();
  // const dynamicUrls = insightPosts.map(post => ({
  //   url: `${baseUrl}/insights/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'daily',
  //   priority: 0.7
  // }));
  
  return [
    ...staticUrls,
    // ...dynamicUrls // Add your dynamic URLs here
  ];
}