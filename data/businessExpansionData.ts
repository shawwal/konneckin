import { PackageCheck, Users, Building2, Network, ShieldCheck, TrendingUp, Target } from 'lucide-react';

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type WhyItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export const expansionServices: ServiceItem[] = [
  {
    icon: PackageCheck,
    title: 'Product Registration (BPOM & others)',
    description: 'Before you can sell regulated products like food, drugs, or cosmetics, you need approval from agencies like BPOM. We manage the entire registration process for you.',
  },
  {
    icon: Users,
    title: 'Hiring Expatriates',
    description: 'Scaling your team with foreign talent requires new work permits (KITAS) and compliance with Ministry of Manpower regulations. We handle all the necessary paperwork.',
  },
  {
    icon: Building2,
    title: 'Opening Representative Offices',
    description: 'A Representative Office (KPPA) is a low-risk way to explore the market. We facilitate the setup process for market research and liaison activities.',
  },
  {
    icon: Network,
    title: 'Distributor & Agent Sourcing',
    description: 'Finding reliable local partners is key to market penetration. We connect you with our network of vetted distributors and agents to accelerate your entry.',
  },
];

export const whyPartnerData: WhyItem[] = [
  {
    icon: Target,
    title: 'Strategic Market Insight',
    description: 'Leverage our local knowledge to make informed decisions about distribution channels and market entry strategies.'
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Navigation',
    description: 'We are experts in BPOM and Ministry of Manpower regulations, ensuring your expansion is fully compliant.'
  },
  {
    icon: TrendingUp,
    title: 'Accelerated Growth',
    description: 'By handling the complexities, we free you up to focus on strategic initiatives and sustainable growth.'
  }
];

export const faqBusinessExpansionData: FaqItem[] = [
  {
    question: 'What is BPOM and do I need it?',
    answer: 'BPOM is Indonesia\'s National Agency of Drug and Food Control. You are required to obtain BPOM registration if you plan to import or sell food, beverages, supplements, drugs, or cosmetic products in Indonesia.',
  },
  {
    question: 'Can a Representative Office generate revenue?',
    answer: 'No. A Representative Office (KPPA) is strictly prohibited from engaging in direct sales or generating revenue. Its purpose is limited to market research, liaison, and promotional activities for its parent company.',
  },
  {
    question: 'What is the process for hiring an expatriate for my PT PMA?',
    answer: 'The process involves several steps: securing a Foreign Manpower Utilization Plan (RPTKA), obtaining a government notification, and then applying for the work visa (VITAS) and the subsequent stay permit (KITAS). We manage this entire workflow for you.',
  },
  {
    question: 'How do I find a reliable distributor in Indonesia?',
    answer: 'Finding the right partner requires significant due diligence. Key steps include verifying their license, checking their distribution network, and assessing their track record. We assist by connecting clients with our network of trusted and vetted partners across various industries.',
  },
];