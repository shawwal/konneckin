import { AlertCircle, Calculator, Hourglass, ShieldOff, ShieldCheck, Lock, Link } from 'lucide-react';

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
}


// --- Type Definition ---
interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// --- Type Definition ---
interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

// --- Type Definition ---
interface FaqItem {
  question: string;
  answer: string;
}

// --- Data Export ---
export const faqPayrollData: FaqItem[] = [
  {
    question: 'Why should I outsource payroll management in Indonesia?',
    answer: 'Outsourcing payroll helps ensure compliance with Indonesia’s complex labor laws, BPJS contributions, and tax regulations. It reduces administrative burden and minimizes legal risks.',
  },
  {
    question: 'What payroll services does Konneckin offer?',
    answer: 'We provide end-to-end payroll services including monthly salary calculation, tax (PPH 21) computation, BPJS reporting, payslip issuance, compliance tracking, and payroll disbursement.',
  },
  {
    question: 'Is payroll outsourcing compliant with Indonesian labor regulations?',
    answer: 'Yes. Konneckin ensures full compliance with Indonesia’s labor laws, income tax rules, and mandatory social security (BPJS) reporting, so your company stays audit-ready.',
  },
  {
    question: 'Can Konneckin handle payroll for both local and expatriate employees?',
    answer: 'Absolutely. We calculate payroll for Indonesian staff and expats, including proper tax treatment, benefits handling, and regulatory documentation for KITAS holders.',
  },
  {
    question: 'How do you manage confidentiality and data security?',
    answer: 'We follow strict data protection protocols. All payroll data is processed securely, with limited access and encryption to ensure confidentiality and integrity.',
  },
  {
    question: 'How are salary taxes (PPH 21) and BPJS contributions calculated?',
    answer: 'Our system calculates taxes and BPJS based on the latest regulations from the Ministry of Finance and BPJS Ketenagakerjaan/Kesehatan. We also prepare and file necessary reports.',
  },
  {
    question: 'Can I customize payroll components like allowances, bonuses, and deductions?',
    answer: 'Yes. Our system is flexible and can be tailored to your company’s structure—whether it includes THR (religious holiday allowance), incentives, or other benefits.',
  },
  {
    question: 'How often is payroll processed?',
    answer: 'Typically monthly, but we can adapt to your preferred cycle—weekly, bi-weekly, or monthly—based on your business needs and employment contracts.',
  },
  {
    question: 'What’s the onboarding process for payroll service with Konneckin?',
    answer: 'We start with a data collection phase (employee info, contracts, past payroll records), followed by setup, test run, and go-live within 7–10 business days.',
  },
  {
    question: 'Can Konneckin support multi-entity payroll for companies with several branches?',
    answer: 'Yes. We manage payroll across multiple business units or entities within Indonesia and consolidate reports for group-level analysis and reporting.',
  },
];


// --- Data Export ---
export const payrollProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Payroll data collection',
    description: 'We collect employee records, attendance, overtime, and bonus information to support accurate payroll processing.',
  },
  {
    step: '02',
    title: 'Salary & tax calculation',
    description: 'Our payroll experts handle salary, tax, and BPJS calculations with precision, ensuring 100% payroll compliance.',
  },
  {
    step: '03',
    title: 'Review & approval',
    description: 'We provide a detailed payroll summary for your review and approval, giving you full control over your monthly payroll.',
  },
  {
    step: '04',
    title: 'Salary disbursement',
    description: 'We ensure on-time employee salary disbursements through a secure and streamlined payroll system.',
  },
  {
    step: '05',
    title: 'Payslip generation & distribution',
    description: 'Employees receive detailed payslips directly and securely, ensuring transparency in every payroll cycle.',
  },
  {
    step: '06',
    title: 'Reporting & tax submission',
    description: 'We prepare complete payroll reports and submit monthly tax obligations in full compliance with Indonesian payroll regulations.',
  },
];


// --- Data Export ---
export const payrollBenefits: FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: '100% compliance',
    description: 'We ensure that your payroll fully complies with Indonesian labor laws, tax obligations, and BPJS social security requirements, helping your business stay protected and penalty-free.',
  },
  {
    icon: Calculator,
    title: 'Accurate processing',
    description: 'Our team delivers precise payroll calculations and guarantees on-time salary disbursement, giving your employees confidence and satisfaction every pay cycle.',
  },
  {
    icon: Lock,
    title: 'Data security',
    description: 'We prioritize the confidentiality of your employee data by using secure payroll systems and strict internal controls to safeguard sensitive information.',
  },
  {
    icon: Link,
    title: 'End-to-end administration',
    description: 'We manage the entire payroll process for you, from data collection and salary calculation to tax reporting, salary disbursement coordination, and payslip generation.',
  },
];


// --- Data Export ---
export const payrollServicesAccordionData: AccordionItem[] = [
  {
    title: 'Payroll calculation & processing',
    content: 'Monthly salary calculation including taxes, BPJS, overtime, bonuses, and allowances.',
  },
  {
    title: 'Payroll tax reporting',
    content: 'Timely and accurate submission of employee tax obligations to tax authorities.',
  },
  {
    title: 'BPJS administration',
    content: 'Registration, monthly contributions, and reporting for BPJS Kesehatan and BPJS Ketenagakerjaan.',
  },
  {
    title: 'Salary disbursement support',
    content: 'Salary transfer processing with accurate payment scheduling and coordination.',
  },
  {
    title: 'Employee payslip generation',
    content: 'Secure payslip issuance in printable and digital formats.',
  },
  {
    title: 'Expatriate payroll management',
    content: 'Payroll solutions tailored for expatriate employees, including tax equalization and benefit administration.',
  },
];

// --- Data Export ---
export const payrollRisks: RiskItem[] = [
  {
    icon: AlertCircle,
    title: 'Manual processes and human error',
    description: 'Spreadsheets, disconnected systems, or lack of automation often result in late payments, miscalculations, or compliance gaps.',
  },
  {
    icon: Calculator,
    title: 'Complex tax and BPJS calculations',
    description: 'Companies must calculate income tax (PPh 21), social security contributions (BPJS), and allowances correctly — and report them monthly. Errors can trigger audits or fines.',
  },
  {
    icon: Hourglass,
    title: 'Time-consuming reporting and documentation',
    description: 'Monthly payslips, BPJS reports, tax filings, and year-end summaries take hours — eating into your HR team’s productivity.',
  },
  {
    icon: ShieldOff,
    title: 'Lack of confidentiality and data security',
    description: 'Handling payroll in-house often risks sensitive salary data being exposed or mishandled — especially in growing teams without HR infrastructure.',
  },
];
