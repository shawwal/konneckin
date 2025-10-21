import { Handshake, Building, Package, UserSearch, Building2, Map, Rocket, Gem, ShieldAlert, Globe, Telescope, Hourglass } from 'lucide-react';

// --- Type Definitions ---
type ServiceItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

interface AccordionItem {
  title: string;
  content: string;
  // linkText and linkHref are optional as they are not in the source HTML
  linkText?: string;
  linkHref?: string;
}

interface RiskItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

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

// --- Type Definition ---


// --- Data Export ---
export const marketRisks: RiskItem[] = [
  {
    icon: ShieldAlert,
    title: 'Unvetted or unreliable partners',
    description: 'Without an established network, companies may end up working with agents or vendors who lack credibility, experience, or proper licenses—resulting in delays, poor service, or legal issues.',
  },
  {
    icon: Globe,
    title: 'Lack of local market understanding',
    description: 'Many foreign businesses misjudge local culture, communication styles, and business etiquette, which can create friction and damage relationships with potential partners.',
  },
  {
    icon: Telescope,
    title: 'Misaligned goals and expectations',
    description: 'Collaborating with the wrong partner often leads to mismatched strategies, unmet KPIs, and diluted brand presence in the local market.',
  },
  {
    icon: Hourglass,
    title: 'Time-consuming and costly',
    description: 'Identifying the right partner without guidance can take months and significant investment, often with little return.',
  },
];

export const matchmakingProcessData: AccordionItem[] = [
  {
    title: 'Partner identification and sourcing',
    content: 'We conduct thorough market research to identify and select the best-fit business partners, suppliers, distributors, or investors aligned with your company’s goals.',
  },
  {
    title: 'B2B meeting coordination',
    content: 'We organize and facilitate business-to-business meetings, either face-to-face or virtual, ensuring productive and efficient interactions.',
  },
  {
    title: 'Negotiation support',
    content: 'Our team provides expert assistance during negotiation processes to help secure favorable agreements and build lasting partnerships.',
  },
  {
    title: 'Due diligence and partner evaluation',
    content: 'We perform in-depth analysis and verification to assess the credibility and compatibility of prospective partners.',
  },
  {
    title: 'Market entry and expansion strategy',
    content: 'We develop tailored strategies to support your business’s successful expansion in the Indonesian market through strategic collaborations.',
  },
  {
    title: 'Comprehensive support services',
    content: 'Including assistance with licensing, legal consultation, and administrative processes essential for partnership establishment.',
  },
];

export const matchmakingClients = [
  {
    icon: Building2,
    title: 'Foreign companies',
    description: 'Seeking to enter or expand in the Indonesian market.',
  },
  {
    icon: Map,
    title: 'Local businesses',
    description: 'Aiming to find reliable suppliers, distributors, or strategic partners.',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Looking for industry collaborations and growth opportunities.',
  },
  {
    icon: Gem,
    title: 'Investors',
    description: 'Searching for promising business ventures and partnerships in Indonesia.',
  },
];

// --- Data Export ---
export const faqBusinessMatchmakingData: FaqItem[] = [
  {
    question: 'What is business matchmaking, and how can it help my company in Indonesia?',
    answer: 'Business matchmaking is a professional service that connects your company with the right business partners, such as suppliers, distributors, or investors in Indonesia. It helps reduce market entry risks, save time, and accelerate business growth by introducing you to pre-qualified, reliable local partners.',
  },
  {
    question: 'Who can benefit from Konneckin’s business matchmaking services?',
    answer: 'Our services are ideal for foreign companies entering the Indonesian market, local businesses seeking strategic partners, startups looking for industry collaborations, and investors exploring business opportunities in Indonesia.',
  },
  {
    question: 'How do you identify and match potential partners?',
    answer: 'We use a tailored approach based on your business goals, industry, and partnership requirements. Our team conducts in-depth research, evaluates compatibility, and performs due diligence to ensure the right match with credible and suitable local businesses.',
  },
  {
    question: 'How long does the business matchmaking process usually take?',
    answer: 'The timeframe varies depending on your specific requirements and the industry, but on average, the process takes between 2 to 6 weeks. We prioritize quality over speed to ensure long-term, strategic partnerships.',
  },
  {
    question: 'Do you assist with negotiations and agreements?',
    answer: 'Yes. As part of our end-to-end support, we assist with scheduling meetings, interpreting cultural and business norms, and guiding you through negotiation and agreement phases to help ensure smooth communication and alignment.',
  },
  {
    question: 'Can Konneckin help with legal and licensing processes after matchmaking?',
    answer: 'Absolutely. In addition to our business matchmaking service, we provide full support for business registration, licensing, and visa arrangements—ensuring your new partnerships can operate legally and efficiently in Indonesia.',
  },
  {
    question: 'Are the partners you recommend already verified?',
    answer: 'Yes. Every potential partner we introduce is thoroughly screened through our internal evaluation process. This includes background checks, operational assessments, and reference verification to ensure they meet our standards of trust and professionalism.',
  },
  {
    question: 'What industries do you specialize in for matchmaking?',
    answer: 'We serve a wide range of industries including manufacturing, retail, technology, FMCG, healthcare, renewable energy, and professional services. If you\'re looking for business partners in Indonesia, we likely have the right connections for your sector.',
  },
];

