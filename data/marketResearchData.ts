import { Lightbulb, Users, LineChart, Target, FileSearch, Presentation, BarChart, CheckCircle,  Swords, FileWarning } from 'lucide-react';

// --- Type Definitions ---
type ServiceItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type ProcessStep = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};
interface MarketResearchRisk {
  icon: React.ElementType;
  title: string;
  description: string;
}
interface AccordionItem {
  title: string;
  content: string;
}

// --- Data Export ---
export const marketResearchAccordionData: AccordionItem[] = [
  {
    title: 'Industry overview',
    content: 'Understand the market size, trends, growth potential, and key dynamics in your target sector.',
  },
  {
    title: 'Customer profiling',
    content: 'Identify your ideal customer segments, purchasing behavior, and cultural preferences.',
  },
  {
    title: 'Competitor analysis',
    content: 'See how you compare to existing players, and uncover what they\'re doing right—and wrong.',
  },
  {
    title: 'Pricing benchmarking',
    content: 'Understand the price range customers are willing to pay, and what competitors charge.',
  },
  {
    title: 'Regulatory scan',
    content: 'Know the licenses, permits, and compliance issues before entering the market.',
  },
  {
    title: 'Market feasibility study',
    content: 'Get a full report assessing whether your business model fits the Indonesian market.',
  },
];


// --- Data Export ---
export const marketResearchRisks: MarketResearchRisk[] = [
  {
    icon: Target,
    title: 'Misguided targeting',
    description: 'Entering a segment that looks promising—until you realize your actual customers are somewhere else.',
  },
  {
    icon: Users,
    title: 'Ignoring local behavior',
    description: 'Assuming consumers in Indonesia behave like they do in other markets. Spoiler: they don’t.',
  },
  {
    icon: Swords,
    title: 'Overlooking the competition',
    description: 'You set your price, launch your service, then realize five local players already dominate the space.',
  },
  {
    icon: FileWarning,
    title: 'Missing regulatory red flags',
    description: 'Failure to understand regulatory nuance can lead to costly mistakes or even business shutdown.',
  },
];


// --- Page Data ---
export const researchServices: ServiceItem[] = [
  {
    icon: Target,
    title: 'Market Entry Strategy',
    description: 'We help you identify the most viable entry channels, whether it\'s direct investment, joint ventures, or finding local distributors.',
  },
  {
    icon: Users,
    title: 'Competitor Analysis',
    description: 'Understand the key players in your sector. We provide detailed analysis of their strengths, weaknesses, and market positioning.',
  },
  {
    icon: LineChart,
    title: 'Market Sizing & Opportunity',
    description: 'Get accurate data on market size, growth potential, and consumer trends to validate your business case and investment decisions.',
  },
  {
    icon: Lightbulb,
    title: 'Consumer Behavior Insights',
    description: 'Gain a deep understanding of local consumer preferences, purchasing habits, and cultural nuances to tailor your product or service effectively.',
  },
];

export const researchProcess: ProcessStep[] = [
  {
    icon: FileSearch,
    title: 'Discovery & Scoping',
    description: 'We start by understanding your specific business goals, target audience, and key questions to define the scope of the research.',
  },
  {
    icon: BarChart,
    title: 'Data Collection & Analysis',
    description: 'Our team gathers relevant data from primary and secondary sources, including industry reports, surveys, and local interviews.',
  },
  {
    icon: Presentation,
    title: 'Reporting & Strategy',
    description: 'We deliver a comprehensive report with actionable insights and strategic recommendations to guide your next steps in the market.',
  },
  {
    icon: CheckCircle,
    title: 'Implementation Support',
    description: 'Beyond research, we can assist you with implementing the recommendations, from company setup to partner sourcing.',
  },
];

export const faqMarketResearchData: FaqItem[] = [
  {
    question: 'How long does a typical market research project take?',
    answer: 'A standard market research project typically takes 3 to 6 weeks, depending on the complexity of the scope, the depth of analysis required, and the availability of data.',
  },
  {
    question: 'Why is local market research so important in Indonesia?',
    answer: 'Indonesia is a highly diverse archipelago with unique consumer behaviors and business practices in each region. A one-size-fits-all approach often fails. Local research ensures your strategy is tailored to the specific market conditions, cultural nuances, and regulatory landscape.',
  },
  {
    question: 'Can you conduct research for a very niche industry?',
    answer: 'Yes. We have experience across a wide range of sectors and can tailor our research methodology to fit niche industries. This often involves more in-depth primary research, such as interviews with key industry players and potential customers.',
  },
  {
    question: 'What kind of deliverables can I expect from the research?',
    answer: 'You will receive a comprehensive, professionally written report that includes an executive summary, detailed analysis of findings, data visualizations (charts and graphs), and a set of clear, actionable recommendations to support your strategic decision-making.',
  },
];

export const faqMarketResearch: FaqItem[] = [
  {
    question: 'Why should I conduct market research before investing in Indonesia?',
    answer: 'Indonesia’s diverse market and regulatory environment make local insights crucial. Market research reduces risks and helps tailor your strategy for long-term success.',
  },
  {
    question: 'What types of market research does Konneckin offer?',
    answer: 'We provide industry analysis, feasibility studies, competitor mapping, consumer behavior insights, pricing strategy, and regulatory reviews—customized for the Indonesian market.',
  },
  {
    question: 'How can I identify the right customer segment in Indonesia?',
    answer: 'Our data-driven research helps define your ideal target audience based on demographics, buying patterns, and market demand across different regions.',
  },
  {
    question: 'Does Konneckin help validate business ideas?',
    answer: 'Yes. We evaluate market size, competition, operational feasibility, and legal framework to support informed investment decisions.',
  },
  {
    question: 'What sectors in Indonesia show strong growth potential?',
    answer: 'Tech, food & beverage, manufacturing, renewable energy, and fintech are thriving. Konneckin offers sector-specific insights to guide your entry.',
  },
  {
    question: 'What challenges do foreign investors commonly face in Indonesia?',
    answer: 'Key challenges include navigating regulations, cultural adaptation, and local competition. Our research highlights risks and provides practical solutions.',
  },
  {
    question: 'How up-to-date is the market data provided?',
    answer: 'We combine real-time primary research with reliable secondary sources to deliver accurate and actionable insights.',
  },
  {
    question: 'Can I request research for a specific or niche market?',
    answer: 'Yes. We deliver tailored reports for niche sectors such as halal products, digital health, education, and sustainability.',
  },
  {
    question: 'Do you provide insights beyond Jakarta?',
    answer: 'Absolutely. We cover key regions like Surabaya, Bali, Medan, Batam, and emerging secondary cities with growing investor interest.',
  },
];