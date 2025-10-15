import { Handshake, Building, Package, UserSearch, Target, ShieldCheck, Network } from 'lucide-react';

// --- Type Definitions ---
type ServiceItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

// --- Page Data ---
export const matchmakingServices: ServiceItem[] = [
  {
    icon: Handshake,
    title: 'Joint Venture (JV) Partner Sourcing',
    description: 'Find a strategic local partner to share risks, combine resources, and leverage local expertise for a successful joint venture.',
  },
  {
    icon: Building,
    title: 'Mergers & Acquisitions (M&A) Targets',
    description: 'Identify and connect with potential M&A targets that align with your strategic goals for rapid market entry or expansion.',
  },
  {
    icon: Package,
    title: 'Distributor & Supplier Matching',
    description: 'We connect you with a network of vetted, reliable distributors and suppliers to build a robust and efficient supply chain in Indonesia.',
  },
  {
    icon: UserSearch,
    title: 'Local Talent & Expertise Connections',
    description: 'Access our network of industry experts and key local talent to build a strong advisory board or foundational team.',
  },
];

export const matchmakingProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Profiling',
    description: 'We start by understanding your exact business needs, strategic goals, and the ideal profile of the partner you are seeking.',
  },
  {
    step: '02',
    title: 'Market Screening & Vetting',
    description: 'Our team conducts a thorough market scan to identify potential partners, followed by a rigorous vetting process to verify their credibility.',
  },
  {
    step: '03',
    title: 'Introduction & Facilitation',
    description: 'We facilitate a confidential introduction between you and the shortlisted candidates and can assist in initial negotiations if required.',
  },
  {
    step: '04',
    title: 'Due Diligence & Finalization',
    description: 'We support you through the final due diligence process to ensure you have all the information needed to finalize a successful partnership.',
  },
];

export const faqBusinessMatchmakingData: FaqItem[] = [
  {
    question: 'How do you ensure the partners you recommend are reliable?',
    answer: 'Our process involves a multi-stage vetting procedure. We verify the company\'s legal standing, assess their track record and reputation in the market, and conduct initial interviews to ensure they align with your strategic objectives and values. We only introduce partners that meet our strict credibility criteria.',
  },
  {
    question: 'Is a local partner necessary to do business in Indonesia?',
    answer: 'While not always legally mandatory (for 100% foreign-owned sectors), having a strong local partner is often a significant strategic advantage. They provide invaluable local knowledge, an established network, and help navigate cultural and bureaucratic complexities, greatly accelerating your path to success.',
  },
  {
    question: 'How long does the business matchmaking process take?',
    answer: 'The timeline typically ranges from 4 to 8 weeks, depending on the specificity and complexity of your partner requirements. A search for a highly specialized distributor, for example, may take longer than sourcing a general business partner.',
  },
  {
    question: 'Is the introduction process confidential?',
    answer: 'Absolutely. Confidentiality is paramount in our process. We do not disclose your company’s identity to potential partners without your explicit consent. Initial discussions are often handled on a no-name basis to protect your strategic interests.',
  },
];