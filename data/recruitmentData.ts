import { Users, Search, UserCheck, FileText,  UserX, Clock, Puzzle, FileWarning, BrainCircuit, Network, DraftingCompass, Gauge, Trophy} from 'lucide-react';

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
interface RiskItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// --- Type Definition ---
interface AccordionItem {
  title: string;
  content: string;
}

// --- Data Export ---
export const faqRecruitment: FaqItem[] = [
  {
    question: 'How long does the recruitment process typically take?',
    answer: 'The recruitment timeline varies depending on the position and the talent availability. Typically, for mid-level positions, the process takes 2-4 weeks, while executive search may take 4-8 weeks. We always strive to provide high-quality candidates within the shortest possible time frame.',
  },
  {
    question: 'Do you offer a guarantee period for candidates?',
    answer: 'Yes, we provide a candidate replacement guarantee if the hired candidate leaves or is terminated within the agreed probation period. The guarantee period typically ranges from 1 to 3 months, depending on the agreement.',
  },
  {
    question: 'Can Konneckin handle confidential hiring?',
    answer: 'Absolutely. We have extensive experience managing confidential recruitment processes. We ensure strict privacy and professionalism when sourcing and communicating with candidates for sensitive roles.',
  },
  {
    question: 'What is your recruitment fee structure?',
    answer: 'Our recruitment fees are typically based on a percentage of the candidate’s annual gross salary. We offer flexible fee structures depending on the hiring volume, position level, and partnership terms. Please contact us for a customized quotation.',
  },
  {
    question: 'Do you support mass hiring or project-based recruitment?',
    answer: 'Yes, we have a dedicated team that can handle mass recruitment and project-based hiring efficiently. We are experienced in delivering large-scale hiring solutions within tight deadlines, tailored to your business needs.',
  },
  {
    question: 'Can you help with temporary or contract staffing?',
    answer: 'Yes, we offer temporary and contract staffing services for businesses needing short-term placements, project-based hires, or maternity leave coverage. This allows companies to maintain operational flexibility without long-term commitments.',
  },
  {
    question: 'Do you assist with expatriate hiring?',
    answer: 'Yes, we can fully support expatriate hiring, including the processing of work permits (KITAS), visa applications, and onboarding coordination for foreign professionals relocating to Indonesia.',
  },
  {
    question: 'What is your sourcing strategy for finding top talent?',
    answer: 'We utilize a multi-channel sourcing strategy, including our proprietary candidate database, targeted headhunting, professional networks, and job portals. We also leverage passive candidate outreach to attract hard-to-find talent.',
  },
  {
    question: 'Can you help with employer branding to attract better candidates?',
    answer: 'Yes, we provide employer branding advisory to help position your company as an attractive workplace. This includes optimizing job postings, enhancing candidate communication, and promoting your company’s unique values to the market.',
  },
];

// --- Type Definition ---
interface StrengthItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// --- Data Export ---
export const recruitmentStrengths: StrengthItem[] = [
  {
    icon: BrainCircuit,
    title: 'Deep industry expertise',
    description: 'Our consultants have in-depth knowledge across various sectors, enabling us to deliver highly relevant talent for each industry.',
  },
  {
    icon: Network,
    title: 'Extensive talent network',
    description: 'We leverage a strong, diverse, and continuously growing candidate pool.',
  },
  {
    icon: DraftingCompass,
    title: 'Custom-built recruitment strategies',
    description: 'We design tailored hiring solutions that align with each client’s business goals, culture, and timelines.',
  },
  {
    icon: Gauge,
    title: 'Speed without compromising quality',
    description: 'Our streamlined recruitment process significantly reduces time-to-hire while maintaining high standards in candidate selection.',
  },
  {
    icon: UserCheck,
    title: 'Post-placement support and commitment',
    description: 'We provide continuous support even after candidate onboarding to ensure successful integration and long-term retention.',
  },
  {
    icon: Trophy,
    title: 'Proven success with leading companies',
    description: 'We are trusted by established organizations to manage critical hiring needs and deliver consistent, high-impact results.',
  },
];
// --- Data Export ---
export const recruitmentSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Talent mapping',
    description: 'We identify and analyze the talent landscape to provide strategic insights on the availability, quality, and competitiveness of potential candidates.',
  },
  {
    step: '02',
    title: 'Talent sourcing',
    description: 'We actively reach out to the right talent through targeted search, leveraging both active and passive candidate networks.',
  },
  {
    step: '03',
    title: 'Candidate screening & assessment',
    description: 'We conduct comprehensive evaluations to ensure candidates meet the required skills, experience, and cultural fit for the organization.',
  },
  {
    step: '04',
    title: 'Offer management',
    description: 'We facilitate smooth offer negotiations to align expectations between clients and candidates, ensuring a positive acceptance rate.',
  },
  {
    step: '05',
    title: 'After-service: Replacement guarantee & Onboarding monitoring',
    description: 'We offer a replacement guarantee to provide peace of mind, ensuring clients have the right talent in place without additional risk.',
  },
];

// --- Data Export ---
export const hiringServicesAccordionData: AccordionItem[] = [
  {
    title: 'Executive search',
    content: 'We connect you with senior leaders and specialist talent who can drive strategic growth in Indonesia.',
  },
  {
    title: 'Mass hiring & workforce scaling',
    content: 'Quickly build operational teams across multiple locations — ideal for manufacturing, logistics, or customer service sectors.',
  },
  {
    title: 'Recruitment process outsourcing (RPO)',
    content: 'Let us manage your hiring end-to-end, from job postings to onboarding — so you can focus on your business.',
  },
  {
    title: 'Local & regional talent sourcing',
    content: 'Find qualified local professionals across Indonesia and Southeast Asia through our trusted recruitment network.',
  },
  {
    title: 'Expat recruitment & compliance',
    content: 'We help you hire foreign professionals while ensuring full visa and labor law compliance.',
  },
  {
    title: 'Project-based & contract hiring',
    content: 'Get flexible staffing solutions for short-term projects, freelance roles, or seasonal needs — fast and hassle-free.',
  },
];

// --- Data Export ---
export const hiringRisks: RiskItem[] = [
  {
    icon: UserX,
    title: 'Limited access to qualified talent',
    description: 'The best candidates aren’t always visible on job portals. Without trusted local networks, companies miss out on high-quality professionals or face inflated agency fees.',
  },
  {
    icon: Clock,
    title: 'Slow and inconsistent hiring process',
    description: 'Delays in screening, poor interview-to-hire conversion, and unreliable communication from applicants can extend the timeline by weeks—costing time and productivity.',
  },
  {
    icon: Puzzle,
    title: 'Lack of cultural and behavioral fit',
    description: 'Even when candidates meet the technical requirements, misalignment in communication style, work ethic, or business culture can lead to failed hires and high turnover.',
  },
  {
    icon: FileWarning,
    title: 'Unclear hiring compliance and contracts',
    description: 'Foreign companies often face uncertainty around employment contracts, probation rules, and what’s legally required under Indonesian labor law.',
  },
];


// --- Page Data ---
export const recruitmentServices: ServiceItem[] = [
  {
    icon: Users,
    title: 'Executive & C-Level Search',
    description: 'We specialize in sourcing high-caliber senior leaders and executives with the specific skills to drive your business forward in Indonesia.',
  },
  {
    icon: Search,
    title: 'Managerial & Specialist Hiring',
    description: 'Find the mid-level and specialized talent you need, from technical experts to operational managers, through our targeted search process.',
  },
  {
    icon: UserCheck,
    title: 'Candidate Vetting & Screening',
    description: 'We conduct thorough initial screenings, interviews, and background checks to ensure you only see the most qualified and suitable candidates.',
  },
  {
    icon: FileText,
    title: 'Work Permit (KITAS) Integration',
    description: 'For expatriate hires, we seamlessly integrate the visa and work permit application process into the recruitment timeline for a smooth onboarding.',
  },
];

export const recruitmentProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Role Definition & Search',
    description: 'We work with you to define the ideal candidate profile and then launch a targeted search using our extensive network.',
  },
  {
    step: '02',
    title: 'Screening & Shortlisting',
    description: 'We rigorously screen all applicants, conducting initial interviews to present you with a shortlist of the top 3-5 candidates.',
  },
  {
    step: '03',
    title: 'Client Interviews & Selection',
    description: 'You conduct the final interviews with the best candidates. We facilitate the process and gather feedback.',
  },
  {
    step: '04',
    title: 'Offer & Onboarding',
    description: 'We assist with the job offer and contract negotiation. For expats, we then initiate the work permit process for a seamless start.',
  },
];

export const faqRecruitmentData: FaqItem[] = [
  {
    question: 'How long does the recruitment process usually take?',
    answer: 'A typical recruitment cycle, from defining the role to making a job offer, takes approximately 4 to 8 weeks. This can vary based on the seniority and specialization of the role.',
  },
  {
    question: 'What makes recruiting in Indonesia unique?',
    answer: 'The Indonesian talent market is relationship-driven. Success requires a deep local network and an understanding of cultural nuances in negotiation and communication. Additionally, navigating the legal requirements for both local and expatriate employment is crucial.',
  },
  {
    question: 'Do you specialize in certain industries?',
    answer: 'While we have experience across a broad range of industries, we have particular expertise in technology, manufacturing, professional services, and consumer goods sectors.',
  },
  {
    question: 'How do you ensure you find the right fit for our company culture?',
    answer: 'Our process begins with a deep dive into your company culture, values, and long-term goals. We assess candidates not just for their technical skills but also for their soft skills and alignment with your team\'s dynamics, ensuring a lasting and successful placement.',
  },
];