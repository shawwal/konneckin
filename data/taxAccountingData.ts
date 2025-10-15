import { Calculator, BookOpen, UserCheck, Landmark, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

// --- Type Definitions ---
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

// --- Page Data ---
export const taxServices: ServiceItem[] = [
  {
    icon: Calculator,
    title: 'Monthly & Annual Tax Reporting',
    description: 'We manage all your mandatory tax filings, including Corporate Income Tax, VAT (PPN), and employee withholding tax (PPh 21), ensuring accuracy and timeliness.',
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping & Financial Statements',
    description: 'Our team maintains your financial records, preparing clear and compliant financial statements (Balance Sheet, P&L) for management and audit purposes.',
  },
  {
    icon: UserCheck,
    title: 'BPJS Management (Social Security)',
    description: 'We handle the registration, monthly contributions, and reporting for BPJS Kesehatan (Healthcare) and Ketenagakerjaan (Employment) for all your staff.',
  },
  {
    icon: Landmark,
    title: 'Tax Advisory & Planning',
    description: 'Leverage our expertise for strategic tax planning to optimize your financial efficiency and ensure you remain compliant with Indonesia’s dynamic tax regulations.',
  },
];

export const whyChooseUsData: WhyItem[] = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed Compliance',
    description: 'Our certified experts ensure every report is filed accurately and on time, protecting you from costly penalties.'
  },
  {
    icon: Clock,
    title: 'Save Time & Resources',
    description: 'Outsourcing your accounting allows your team to focus on core business activities and strategic growth.'
  },
  {
    icon: TrendingUp,
    title: 'Strategic Financial Insights',
    description: 'We provide clear financial statements that give you the insights needed to make informed business decisions.'
  }
];

export const faqTaxAccountingData: FaqItem[] = [
  {
    question: 'Is tax reporting mandatory for a company that isn’t profitable yet?',
    answer: 'Yes. All registered companies (PT PMA) in Indonesia must file monthly and annual tax reports, even if they have zero revenue or are operating at a loss. This is a mandatory requirement to maintain your company’s active status with the tax office.',
  },
  {
    question: 'What is the difference between BPJS Kesehatan and Ketenagakerjaan?',
    answer: 'BPJS Kesehatan is the national health insurance program, while BPJS Ketenagakerjaan is the social security program covering work-related accidents, old age, and death benefits. Both are mandatory for all employees in Indonesia, including expatriates.',
  },
  {
    question: 'Can I handle my company’s bookkeeping myself?',
    answer: 'While possible, it is not recommended unless you are an expert in Indonesian accounting standards (SAK) and tax law. Errors in bookkeeping can lead to incorrect tax filings and significant penalties. Professional services ensure accuracy and compliance.',
  },
  {
    question: 'What documents are needed for monthly tax reporting?',
    answer: 'Typically, you will need to provide your sales invoices, purchase invoices, expense receipts, bank statements, and payroll details for the month. Our team will provide a clear checklist and guide you through the process.',
  },
];