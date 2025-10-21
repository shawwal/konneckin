import { Calculator, BookOpen, UserCheck, Landmark, ShieldCheck, Clock, TrendingUp, Scale, DatabaseZap, TrendingDown, ShieldAlert, Zap, FileCheck2 } from 'lucide-react';

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


// --- Type Definition ---
interface RiskItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// --- Type Definition ---
interface AccordionItem {
  title: string;
  content: string;
  linkText?: string;
  linkHref?: string;
}

// --- Type Definition ---
interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// --- Data Export ---
export const taxAndAccountingBenefits: FeatureItem[] = [
  {
    icon: Zap,
    title: 'Set up fast',
    description: 'Get your EFIN and VAT registration done quickly with minimal paperwork.',
  },
  {
    icon: FileCheck2,
    title: 'Report with confidence',
    description: 'Submit monthly and annual tax reports accurately and on time—always.',
  },
  {
    icon: ShieldCheck,
    title: 'Stay compliant',
    description: 'We keep your business fully aligned with Indonesian tax laws and investment reporting requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Focus on growth',
    description: 'Let us handle the tax and accounting complexity so you can focus on growing your business.',
  },
];


// --- Data Export ---
export const faqTaxAndAccountingData: FaqItem[] = [
  {
    question: 'Do I need to register an EFIN for my company in Indonesia?',
    answer: 'Yes, EFIN (Electronic Filing Identification Number) registration is required for companies in Indonesia to submit tax reports online. Konneckin can help you register your EFIN quickly and correctly to ensure smooth tax reporting.',
  },
  {
    question: 'How long does the VAT registration process take in Indonesia?',
    answer: 'VAT registration in Indonesia typically takes between 7 to 14 working days, depending on document readiness and tax office processing time. Konneckin ensures timely submission and clear guidance throughout the process.',
  },
  {
    question: 'Can Konneckin handle monthly and annual tax reporting for foreign-owned companies (PMA)?',
    answer: 'Yes, we provide comprehensive tax reporting services for both local and foreign-owned companies (PMA). Our team is experienced in managing tax compliance for international businesses operating in Indonesia.',
  },
  {
    question: 'What tax reports must my company submit in Indonesia?',
    answer: 'Your company must submit monthly tax reports, annual corporate income tax reports, and investment reports (for foreign-owned entities). Konneckin manages all these reports accurately and ensures compliance with Indonesian tax regulations.',
  },
  {
    question: 'How can Konneckin help ensure my company’s tax compliance in Indonesia?',
    answer: 'We provide end-to-end tax and accounting services, from EFIN registration, monthly tax reporting, VAT registration, to annual reporting and investment submissions. Our expert team ensures your company always meets Indonesian tax deadlines and regulatory standards.',
  },
  {
    question: 'Is my company’s financial data safe with Konneckin?',
    answer: 'Yes, we prioritize strict data confidentiality and apply secure financial data management practices. Your tax records and financial information are handled with the highest level of security and integrity.',
  },
  {
    question: 'What happens if my company misses a tax deadline in Indonesia?',
    answer: 'Missing tax deadlines can result in penalties and interest charges. Konneckin helps you avoid this by providing timely reminders, precise calculations, and on-time tax submissions to keep your business fully compliant.',
  },
];


export const taxAndAccountingServices: AccordionItem[] = [
  {
    title: 'EFIN registration',
    content: 'We handle your EFIN registration process swiftly, ensuring you can start submitting tax reports without delays.',
    // linkText: 'Learn more',
    // linkHref: 'https://konneckin.com/bujka-registration-in-indonesia/',
  },
  {
    title: 'Monthly tax and accounting reporting',
    content: 'We manage your monthly tax calculations and financial reports with precision and timeliness, keeping your business fully compliant.',
  },
  {
    title: 'VAT registration',
    content: 'We assist you with VAT registration and ensure you meet all requirements to operate smoothly in Indonesia.',
  },
  {
    title: 'Annual tax reporting',
    content: 'We prepare and submit your annual tax reports accurately, helping you fulfill Indonesia’s tax obligations and avoid penalties.',
  },
  {
    title: 'Investment report',
    content: 'We provide accurate and timely investment reporting to meet regulatory requirements for both local and foreign-owned companies.',
  },
];


// --- Data Export ---
export const financialComplianceRisks: RiskItem[] = [
  {
    icon: Scale,
    title: 'Complex regulatory labyrinth',
    description: "You face the constant challenge of understanding and complying with Indonesia's evolving tax laws, investment regulations, and corporate governance requirements.",
  },
  {
    icon: DatabaseZap,
    title: 'Data discrepancies and lack of transparency',
    description: 'Gaining a clear, accurate, and real-time financial picture is difficult due to fragmented data, inconsistent reporting, or a lack of transparent financial processes.',
  },
  {
    icon: TrendingDown,
    title: 'Inefficient capital allocation',
    description: 'Without precise financial insights and robust compliance, you struggle to optimize capital allocation, assess investment risks, and maximize returns within the Indonesian market.',
  },
  {
    icon: ShieldAlert,
    title: 'Operational bottlenecks and compliance risk',
    description: 'Your focus shifts from strategic growth to managing tedious administrative tasks, ensuring audit readiness, and mitigating the ever-present risk of penalties from non-compliance.',
  },
];


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