export type InsightArticle = {
  slug: string
  category: string
  title: string
  date: string
  author: string
  readingTime: string
  excerpt: string
  image: string
  sections: {
    heading: string
    paragraphs: string[]
  }[]
}

export const insightsArticles: InsightArticle[] = [
  {
    slug: 'indonesia-business-entry-guide',
    category: 'Market Entry',
    title: 'Indonesia Business Entry Guide: Practical Steps for 2026',
    date: 'August 2026',
    author: 'Konneckin Insights',
    readingTime: '6 min read',
    excerpt:
      'A practical roadmap for foreign investors that covers KBLI selection, legal entity setup, licensing, and initial compliance considerations for Indonesia.',
    image: 'https://placehold.co/1200x800/0B3D91/FFFFFF?text=Business+Entry+Guide',
    sections: [
      {
        heading: 'Understand the right business structure',
        paragraphs: [
          'Choosing the correct legal form is the first critical decision when entering Indonesia. The choice between a PT PMA, representative office, or local partnership affects ownership rules, capital requirements, and permitted activities.',
          'Konneckin recommends mapping your planned operations to the correct KBLI codes early in the process. The wrong classification can delay licensing and create compliance risk later on.',
        ],
      },
      {
        heading: 'Load your application with the right documents',
        paragraphs: [
          'Key documents include the Articles of Association, tax registration documents, and investment permission letters. Ensuring each file is complete before submission speeds up the approval process.',
          'A strong application also anticipates local requirements such as company domicile, authorized capital levels, and foreign ownership limits for specific sectors.',
        ],
      },
      {
        heading: 'Prepare for post-establishment compliance',
        paragraphs: [
          'After registration, maintain accurate corporate records, submit monthly labor reports, and keep up with tax filings. Early compliance discipline helps avoid penalties and supports sustainable growth.',
          'Konneckin supports new businesses with local payroll, tax accounting, and regulatory monitoring so founders can stay focused on execution.',
        ],
      },
    ],
  },
  {
    slug: 'navigating-foreign-investment-policy-updates',
    category: 'Regulatory Update',
    title: 'Navigating Foreign Investment Policy Updates',
    date: 'July 2026',
    author: 'Konneckin Insights',
    readingTime: '5 min read',
    excerpt:
      'A concise summary of the latest changes to foreign investment rules in Indonesia and how businesses can adapt their market strategy with confidence.',
    image: 'https://placehold.co/1200x800/1F2937/FFFFFF?text=Investment+Policy',
    sections: [
      {
        heading: 'What the latest policy changes mean',
        paragraphs: [
          'The most recent regulatory updates refine foreign ownership permissions, streamline licensing steps, and highlight strategic sectors that are prioritized for investment.',
          'Businesses should review their KBLI scope and ownership structure to confirm they remain aligned with new requirements.',
        ],
      },
      {
        heading: 'Practical implications for foreign investors',
        paragraphs: [
          'Companies with technology, manufacturing, and energy projects can benefit from updated incentives, but must also meet stricter licensing documentation standards.',
          'Konneckin advises clients to use a cross-functional compliance review before submitting new investment applications.',
        ],
      },
    ],
  },
  {
    slug: 'building-a-resilient-supply-chain-in-indonesia',
    category: 'Operational Excellence',
    title: 'Building a Resilient Supply Chain in Indonesia',
    date: 'June 2026',
    author: 'Konneckin Insights',
    readingTime: '4 min read',
    excerpt:
      'How to design a supply chain that can adapt to local logistics, labor demands, and regulatory change while minimizing disruption.',
    image: 'https://placehold.co/1200x800/047857/FFFFFF?text=Supply+Chain',
    sections: [
      {
        heading: 'Focus on local partnerships',
        paragraphs: [
          'Strong local partnerships are often the difference between a supply chain that flexes and one that breaks under pressure. Choose partners with proven regulatory compliance and distribution expertise.',
          'It is crucial to align procurement, customs, and logistics planning with your overall market entry timeline.',
        ],
      },
      {
        heading: 'Monitor regulatory and infrastructure risk',
        paragraphs: [
          'Indonesia’s infrastructure and regulatory landscape can vary significantly by region. A localized risk review identifies the factors that matter most for your operation.',
          'Companies should build contingency plans for customs delays, permit renewals, and labor availability as part of quarterly operational reviews.',
        ],
      },
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return insightsArticles.find((article) => article.slug === slug)
}
