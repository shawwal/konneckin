import {
  Building,
  Briefcase,
  Plane,
  Ship,
  ArrowRight,
} from 'lucide-react';

export const mainServices = [
  {
    icon: Building,
    title: 'Business expansion',
    description: 'Easy market entry with local experts and global quality.',
    href: '/business-expansion',
    highlighted: true,
    // Sub-services are now nested inside the main service
    subServices: [
      {
        title: 'Market research',
        description: 'Easy market entry with local experts and global quality.',
        href: '/market-research',
      },
      {
        title: 'Company registration',
        description: 'Company registration in Indonesia made easy and fast.',
        href: '/company-registration',
      },
      {
        title: 'Business matchmaking',
        description: 'Find trusted business partners in Indonesia quickly and easily.',
        href: '/business-matchmaking',
      },
    ],
  },
  {
    icon: Briefcase,
    title: 'Post-establishment',
    description: 'Helping your business grow with reliable support in Indonesia.',
    href: '/post-establishment',
    // Added sub-services for this category
    subServices: [
      {
        title: 'Recruitment Service',
        description: 'Hiring top talent in Indonesia made simple',
        href: '/recruitment-service'
      },
      {
        title: 'Payroll management',
        description: 'Ensure accurate and timely payroll processing, BPJS contributions, and statutory compliance for your workforce.',
        href: '/payroll-management/',
      },
      {
        title: 'Tax & accounting solutions',
        description: 'Focus on your core business while we handle your taxes, reporting, and financial management with care.',
        href: '/tax-accounting-solutions/',
      },
      {
        title: 'Product certification & regulatory compliance',
        description: 'We handle product registration (e.g., BPOM), certifications, and ongoing regulatory compliance to ensure your operations are always legally sound.',
        href: '/product-certification-regulatory-compliance/',
      },
      {
        title: 'Company regulation',
        description: 'We assist in drafting and registering your mandatory Company Regulation (Peraturan Perusahaan) to ensure HR policies align with Indonesian labor laws.',
        href: '/company-regulation/',
      },
    ],
  },
  {
    icon: Plane,
    title: 'Expatriate support',
    description: 'Complete expatriate services for an easy and smooth relocation.',
    href: '/expatriate-support',
    // Added sub-services for this category
    subServices: [
      {
        title: 'Visa & Immigration',
        description: 'Secure work and stay permits hassle-free.',
        href: '/visa-immigration',
      },
      {
        title: 'Relocation Services',
        description: 'Find housing, schools, and settle in.',
        href: '/relocation-services',
      },
    ],
  },
  {
    icon: Ship,
    title: 'Importer of record',
    description: 'Ensuring smooth imports without local presence.',
    href: '/importer-of-record',
    // This one might have fewer or no sub-services
    subServices: [
      {
        title: 'Customs Clearance',
        description: 'Efficient and compliant customs processing.',
        href: '/customs-clearance',
      },
    ],
  },
];

// The old static subServices array is removed

export const featuredLinks = [
  {
    imageUrl: 'https://placehold.co/100x100/e0e7ff/3730a3?text=Collaborate',
    imageAlt: 'Team collaborating on a project',
    title: "Let's collaborate",
    description: 'Start your partnership with us',
    href: '/contact',
  },
  {
    imageUrl: 'https://placehold.co/100x100/e0e7ff/3730a3?text=Insights',
    imageAlt: 'Abstract representation of data and insights',
    title: 'News & insights',
    description: 'Stay informed with our latest news and valuable insight',
    href: '/insights',
  },
  {
    imageUrl: 'https://placehold.co/100x100/e0e7ff/3730a3?text=Services',
    imageAlt: 'Grid icon representing all services',
    title: 'View all our services',
    description: '',
    href: '/services',
  },
];