import { Users, Search, UserCheck, FileText, Briefcase, FileSearch, CheckCircle, Rocket } from 'lucide-react';

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