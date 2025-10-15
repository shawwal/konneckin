import { Building2, Briefcase, Users, FileSignature, Landmark, FileCheck2, Banknote } from 'lucide-react';

type EntityItem = {
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

export const legalEntities: EntityItem[] = [
  {
    icon: Building2,
    title: 'PT PMA (Foreign-Owned Company)',
    description: 'The most common entity for foreign investors, allowing for full business operations, revenue generation, and hiring of staff in most sectors.',
  },
  {
    icon: Briefcase,
    title: 'Representative Office (KPPA)',
    description: 'A low-risk option for market research, promotion, and liaison activities. A KPPA cannot engage in direct sales or generate revenue.',
  },
  {
    icon: Users,
    title: 'Local Company (PT)',
    description: 'An entity for Indonesian citizens. We can assist with nominee arrangements for foreign investors in sectors with specific ownership restrictions.',
  },
];

export const registrationProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultation & Document Prep',
    description: 'We help you choose the right KBLI, advise on company structure, and prepare all required documents like the Articles of Association.',
  },
  {
    step: '02',
    title: 'Deed of Establishment & Legalization',
    description: 'We coordinate with a public notary to draft and legalize your company’s Deed of Establishment with the Ministry of Law and Human Rights.',
  },
  {
    step: '03',
    title: 'Tax (NPWP) & NIB Registration',
    description: 'We register your company with the Tax Office to obtain your Tax ID (NPWP) and secure your Business Identification Number (NIB) via the OSS system.',
  },
  {
    step: '04',
    title: 'Bank Account & Final Licenses',
    description: 'We assist with opening your corporate bank account and obtaining any specific operational or commercial licenses required for your sector.',
  },
];

export const faqCompanyRegulationData: FaqItem[] = [
  {
    question: 'How often should we update company data with the government?',
    answer: 'Any time there is a change in your company’s structure—such as directors, shareholders, address, business activities, or capital—you are required to update it immediately with the Ministry of Law and Human Rights (AHU) and the OSS system. Delays may lead to legal or operational issues.',
  },
  {
    question: 'Do foreign-owned companies (PT PMA) have different compliance obligations?',
    answer: 'Yes. PT PMAs must comply with additional requirements under BKPM/OSS regulations, including minimum investment value, business reporting, and sometimes quarterly activity reports. Failure to comply may impact your business license (NIB) or immigration documents.',
  },
  {
    question: 'What happens if we’ve missed past compliance deadlines or filings?',
    answer: 'We can help you regularize or “clean up” your legal standing. This may involve retroactive filings or board resolutions. It’s better to act now before the issue grows into a bigger legal problem.',
  },
  {
    question: 'Do we need to hold an Annual General Meeting (AGM) every year?',
    answer: 'Yes, especially if your company is a PT PMA. AGMs are required to approve financial reports and key decisions. Failure to hold one may raise red flags during audits or M&A activity.',
  },
  {
    question: 'How long does it take to process company amendments?',
    answer: 'On average, simple amendments (like director changes) take 3–5 working days, while more complex changes (like share transfers) can take up to 10–14 working days, depending on document readiness and authority response times.',
  },
  {
    question: 'What if we use a nominee structure—is it still legally safe?',
    answer: 'Nominee structures are common but must be carefully documented. We review or draft nominee agreements that reduce legal risk while protecting your investment, especially in light of increasing regulatory scrutiny.',
  },
  {
    question: 'Can we manage company regulation matters remotely?',
    answer: 'Yes. With a valid power of attorney and digital signatures, we can handle your company’s compliance needs fully online—ideal for overseas shareholders or directors.',
  },
  {
    question: 'Do you only serve clients in Jakarta?',
    answer: 'No. We assist clients across Indonesia and internationally. Many of our clients operate in Bali, Surabaya, Batam, and other regions, and we provide nationwide support.',
  },
];

// export const faqCompanyRegulationData: FaqItem[] = [
//   {
//     question: 'How long does it take to set up a PT PMA in Indonesia?',
//     answer: 'On average, the entire process takes approximately 4 to 6 weeks, from the initial document preparation to receiving all the final registration numbers and licenses.',
//   },
//   {
//     question: 'What is the minimum investment for a PT PMA?',
//     answer: 'The current minimum investment requirement set by the Indonesian Investment Coordinating Board (BKPM) is an investment plan of over IDR 10 billion (approx. USD 650,000).',
//   },
//   {
//     question: 'Can I own 100% of my company in Indonesia?',
//     answer: 'This depends on your business sector, which is defined by the Indonesian Standard Industrial Classification (KBLI). Many sectors are fully open to 100% foreign ownership, while some are partially or fully closed as per the Positive Investment List.',
//   },
//   {
//     question: 'What is the KBLI and why is it important?',
//     answer: 'The KBLI is a classification system that categorizes all economic activities in Indonesia. It is crucial because your chosen KBLI codes determine your eligibility for foreign ownership, the licenses you require, and the business activities you are legally allowed to perform.',
//   },
// ];