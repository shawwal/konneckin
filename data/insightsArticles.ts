export type InsightSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  faqs?: { question: string; answer: string }[]
}

export type InsightArticle = {
  slug: string
  category: string
  title: string
  date: string
  author: string
  readingTime: string
  excerpt: string
  image: string
  sections: InsightSection[]
}

export const insightsArticles: InsightArticle[] = [
  {
    slug: 'investor-kitas-c313-vs-c314-indonesia-2026',
    category: 'Investor KITAS',
    title: 'Investor KITAS (C313 vs C314) Indonesia 2026',
    date: 'August 2026',
    author: 'Konneckin Insights',
    readingTime: '8 min read',
    excerpt:
      'A clear decision framework for foreign investors choosing between Investor KITAS C313 and C314 in Indonesia, with eligibility, risks, and application guidance for 2026.',
    image: 'https://placehold.co/1200x800/0B3D91/FFFFFF?text=Investor+KITAS',
    sections: [
      {
        heading: 'Executive Summary',
        paragraphs: [
          'Most Investor KITAS applications in Indonesia do not fail because of visa selection.',
          'They fail because the underlying company structure does not meet regulatory expectations.',
          'The distinction between C313 and C314 is straightforward. The implication of choosing the wrong one is not.',
          'For foreign investors, the primary consideration is not duration, but whether the company structure is stable, compliant, and aligned across all regulatory systems.',
        ],
      },
      {
        heading: 'What Is an Investor KITAS?',
        paragraphs: [
          'Investor KITAS (Index C313 and C314) is a residence permit issued to foreign shareholders of an Indonesian foreign-owned company (PT PMA). It allows the holder to:',
        ],
        bullets: [
          'Reside legally in Indonesia',
          'Act as Director or Commissioner',
          'Avoid monthly work permit contributions (DKP-TKA)',
        ],
      },
      {
        heading: 'C313 (1-Year Validity)',
        paragraphs: [
          'Short-term flexibility with lower commitment exposure.',
        ],
        bullets: [
          'Suitable for investors in early-stage or evolving structures',
          'Allows adjustments in shareholding or company setup',
          'Requires annual renewal',
        ],
      },
      {
        heading: 'C314 (2-Year Validity)',
        paragraphs: [
          'Long-term stability with reduced administrative burden.',
        ],
        bullets: [
          'Suitable for established and fully compliant structures',
          'Reduces renewal frequency',
          'Requires confidence in long-term setup',
        ],
      },
      {
        heading: 'The difference is not operational. It is strategic.',
      },
      {
        heading: 'Decision Framework',
        bullets: [
          'If your structure is still evolving → C313 is typically more appropriate',
          'If your structure is stable and aligned → C314 becomes viable',
          'If there is uncertainty at the structural level, committing to a longer validity often introduces unnecessary risk',
        ],
      },
      {
        heading: 'Eligibility Requirements (2026)',
        paragraphs: [
          'Investor KITAS approval depends on both corporate and personal criteria. Meeting these requirements is the baseline for any application.',
        ],
      },
      {
        heading: 'Corporate Requirements',
        bullets: [
          'Registered PT PMA (foreign-owned entity)',
          'Minimum shareholding of IDR 10,000,000,000 per investor',
          'Shareholding clearly reflected in Deed of Establishment and NIB',
          'Applicant must hold Director or Commissioner position',
        ],
      },
      {
        heading: 'Personal Requirements',
        bullets: [
          'Passport validity: Minimum 18 months (C313)',
          'Passport validity: Minimum 30 months (C314)',
          'Bank statement (minimum balance USD 2,000 equivalent)',
          'Proof of residential address in Indonesia',
        ],
      },
      {
        heading: 'Cost Considerations',
        paragraphs: [
          'Investor KITAS is often perceived as cost-efficient due to the absence of recurring work permit fees. However, the primary cost driver is not the visa itself.',
          'Costs typically include government fees, professional handling and compliance review, and structural adjustments if required.',
        ],
        bullets: [
          'Government fees (visa, KITAS issuance, entry permit)',
          'Professional handling and compliance review',
          'Structural adjustments (if required)',
        ],
      },
      {
        heading: 'Additional cost exposure is usually driven by',
        bullets: [
          'Non-compliant company structures',
          'Document inconsistencies',
          'Revisions during the application process',
        ],
      },
      {
        heading: 'Processing Timeline',
        paragraphs: [
          'Under normal conditions, the process follows a structured timeline. Delays are typically not caused by the system, but by inconsistencies in documentation and structure.',
        ],
        bullets: [
          'Document preparation: 3–7 working days',
          'Visa processing: 5–10 working days',
          'Entry and biometric registration: 2–3 days',
          'KITAS issuance: 3–5 working days',
          'Estimated total: 2–4 weeks',
        ],
      },
      {
        heading: 'Key Risk Factors',
        paragraphs: [
          'These risks are often avoidable with proper initial assessment.',
        ],
        bullets: [
          'Misalignment between shareholding structure and legal documentation',
          'Inconsistencies between OSS, Deed, and immigration data',
          'Premature selection of long-term visa without structural certainty',
          'Improper use of nominee arrangements',
        ],
      },
      {
        heading: 'Where Most Investors Get It Wrong',
        paragraphs: [
          'Many investors focus on the visa as the primary challenge. In reality, the visa is rarely the problem.',
          'The majority of complications originate from incorrect company setup, misinterpretation of eligibility requirements, and lack of alignment across regulatory systems.',
          'Choosing between C313 and C314 is a secondary decision. Ensuring structural compliance is the primary one.',
        ],
      },
      {
        heading: 'Frequently Asked Questions',
        faqs: [
          {
            question: 'Can I actively work with an Investor KITAS?',
            answer: 'Yes, within your capacity as Director or Commissioner in your own company.',
          },
          {
            question: 'How long does the process take?',
            answer: 'Typically between 2 to 4 weeks, depending on document readiness.',
          },
          {
            question: 'Can I switch from a Working KITAS (C312)?',
            answer: 'Yes, subject to restructuring of shareholding and position.',
          },
          {
            question: 'Is Investor KITAS more cost-efficient than Working KITAS?',
            answer: 'Generally yes, due to the absence of recurring work permit fees.',
          },
        ],
      },
      {
        heading: 'Advisory Note',
        paragraphs: [
          'If there is any uncertainty regarding your eligibility, it is more effective to assess the structure first rather than proceed and correct later.',
          'A short, focused review can clarify whether your shareholding meets the requirement, which KITAS type aligns with your situation, and what risks may affect your application.',
        ],
      },
      {
        heading: 'Speak with an Advisor',
        paragraphs: [
          'If you are evaluating your Investor KITAS options or company structure, a direct discussion can provide clarity before you proceed. Contact Konneckin to arrange a structured eligibility review.',
        ],
      },
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return insightsArticles.find((article) => article.slug === slug)
}
