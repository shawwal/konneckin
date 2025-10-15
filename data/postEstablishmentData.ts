import { BookUser, Calculator, Mailbox, Landmark, UserCheck, ShieldAlert, TrendingUp, CheckCircle } from 'lucide-react';

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

export const postEstablishmentServices: ServiceItem[] = [
  {
    icon: BookUser,
    title: 'Corporate Secretarial Services',
    description: 'We handle all your mandatory corporate filings, shareholder resolutions, and ensure your company documentation is always up-to-date and compliant.',
  },
  {
    icon: Calculator,
    title: 'Accounting, Tax & BPJS Reporting',
    description: 'Our expert team manages your monthly and annual tax reports, bookkeeping, and mandatory social security (BPJS) contributions to ensure full financial compliance.',
  },
  {
    icon: Mailbox,
    title: 'Business Address & Office Space',
    description: 'Utilize our prestigious business address or virtual office solutions to establish a professional presence without the overhead of a physical office.',
  },
  {
    icon: Landmark,
    title: 'Bank Account Assistance',
    description: 'We facilitate the process of opening a corporate bank account, navigating the specific requirements and documentation needed by Indonesian banks.',
  },
  {
    icon: UserCheck,
    title: 'Nominee Director & Commissioner',
    description: 'Fulfill local directorship requirements with our trusted nominee services, ensuring your company structure remains compliant with Indonesian Company Law.',
  },
];

export const whyItMattersData: WhyItem[] = [
    {
        icon: ShieldAlert,
        title: 'Avoid Fines and Penalties',
        description: 'Non-compliance can result in severe penalties. We ensure all your reporting deadlines are met accurately.'
    },
    {
        icon: CheckCircle,
        title: 'Maintain Good Standing',
        description: 'Proper compliance keeps your business in good standing with government authorities like the BKPM and Tax Office.'
    },
    {
        icon: TrendingUp,
        title: 'Focus on Your Growth',
        description: 'Offload your administrative burdens to us so you can focus your energy on growing your business operations.'
    }
];

export const faqPostEstablishmentData: FaqItem[] = [
  {
    question: 'What is a corporate secretary in Indonesia?',
    answer: 'A corporate secretary is responsible for ensuring the company complies with all statutory and regulatory requirements. Their duties include maintaining company records, filing annual returns, and managing shareholder communications. While not mandatory for all PT PMAs, it is a highly recommended function for maintaining good corporate governance.',
  },
  {
    question: 'Are accounting and tax reporting mandatory even if my company is not yet profitable?',
    answer: 'Yes. All registered companies in Indonesia must file monthly and annual tax reports, regardless of their operational or profit status. Failure to do so can lead to penalties. This includes reporting for Corporate Income Tax, VAT (PPN), and employee income tax (PPh 21).',
  },
  {
    question: 'Can I use a virtual office for my PT PMA?',
    answer: 'Yes, using a virtual office is a common and cost-effective solution for many businesses, especially in the early stages. It provides a legal business address required for registration without the cost of leasing physical space. We can help you determine if a virtual office is suitable for your specific business activities (KBLI).',
  },
  {
    question: 'What is BPJS and is it mandatory for expatriates?',
    answer: 'BPJS is Indonesia’s universal social security program, covering healthcare (Kesehatan) and employment (Ketenagakerjaan). It is mandatory for all employees, including expatriates who have been working in Indonesia for more than six months. Companies are legally required to register their employees and contribute to the program.',
  },
];