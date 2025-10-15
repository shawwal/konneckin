import { Lightbulb, Users, LineChart, Target, FileSearch, Presentation, BarChart, CheckCircle } from 'lucide-react';

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