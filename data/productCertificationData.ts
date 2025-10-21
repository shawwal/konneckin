import { FlaskConical, Stamp, Signal, Award, Stethoscope, QrCode, ShieldCheck, Clock, Rocket, FileQuestion, Languages, TimerOff, ShieldAlert, Scale, Zap, UserCheck  } from 'lucide-react';

type CertificationItem = {
  icon: React.ElementType;
  title: string;
  category: string;
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
interface BenefitItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// --- Data Export ---
export const productCertificationBenefits: BenefitItem[] = [
  {
    icon: Scale,
    title: 'Local regulatory expertise',
    description: 'Our in-depth knowledge of Indonesian agencies like BPOM, BPJPH, DJKI, and Kominfo ensures your application meets every technical requirement—right from the start.',
  },
  {
    icon: Zap,
    title: 'Faster turnaround, zero guesswork',
    description: 'We streamline the certification process with clear timelines, transparent costs, and step-by-step guidance—so your product can go to market faster.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated client support',
    description: 'You’ll be assigned a dedicated consultant who will handle your project and provide real-time updates, from document prep to approval.',
  },
  {
    icon: Award,
    title: 'Trusted by local and international brands',
    description: 'Whether you’re a local SME or a foreign investor, we’ve successfully supported businesses of all sizes across industries—from F&B to cosmetics and electronics.',
  },
];


// --- Data Export ---
export const productCertificationServices: AccordionItem[] = [
  {
    title: 'SNI certification',
    content: 'Ensure your products meet the Indonesian National Standard (SNI) to access key retail and government markets legally.',
  },
  {
    title: 'BPOM registration',
    content: 'Mandatory for food, beverage, cosmetics, and supplements before being distributed or sold in Indonesia. We handle the full BPOM registration process.',
    // linkText: 'Learn more',
    // linkHref: 'https://konneckin.com/payroll-management/', // Note: Link from original HTML, might need correction
  },
  {
    title: 'Halal certification',
    content: 'We assist with Halal certification through BPJPH or LPPOM MUI to meet national requirements and build trust among Muslim consumers.',
  },
  {
    title: 'Trademark registration',
    content: 'Protect your brand name and logo legally in Indonesia through official trademark registration with the Ministry of Law and Human Rights.',
  },
  {
    title: 'Distribution license',
    content: 'Get a product distribution license from BPOM or the Ministry of Health, required to sell regulated goods in Indonesia.',
  },
  {
    title: 'Import Permit (API-U, API-P, PI, etc.)',
    content: 'We help businesses obtain import licenses to legally bring goods into Indonesia, including API and other trade-related permits.',
  },
  {
    title: 'PSE (Postel) Certification',
    content: 'Mandatory for telecommunication and electronic devices, PSE ensures your tech products are compliant with Indonesian regulations.',
  },
];



// --- Data Export ---
export const faqProductCertification: FaqItem[] = [
  {
    question: 'What certifications are required to sell products in Indonesia?',
    answer: 'It depends on your product category. For example, food and cosmetics require BPOM registration, electronic devices may need PSE certification, while certain goods must meet SNI standards. Halal certification is mandatory for some categories like processed food and beverages.',
  },
  {
    question: 'How long does it take to get BPOM or Halal certification?',
    answer: 'On average, BPOM registration can take 2–3 months depending on the product type and completeness of your documents. Halal certification typically takes 1–2 months, but this may vary based on the audit results and type of product.',
  },
  {
    question: 'Do I need to register my product even if I only sell online?',
    answer: 'Yes. Whether sold offline or online (e.g. via Shopee, Tokopedia, or your own website), regulated products like food, cosmetics, or supplements still require proper registration such as BPOM and/or Halal certification.',
  },
  {
    question: 'Can I apply for these certifications as a foreign company?',
    answer: 'In most cases, you’ll need a local legal entity (e.g. PT or distributor) to apply. However, we can assist you with legal representation or help you set up a local company to streamline the process.',
  },
  {
    question: 'What happens if I sell unregistered products in Indonesia?',
    answer: 'Selling unregistered or non-compliant products can lead to serious penalties including product recall, fines, and import bans. It can also damage your brand reputation and disrupt your market entry plan.',
  },
  {
    question: 'Does Konneckin handle the entire process for me?',
    answer: 'Yes. We offer full-service support—from document preparation, agency communication, lab testing coordination, to submission and follow-up—so you don’t have to worry about the technicalities.',
  },
  {
    question: 'Can Konneckin also assist with multiple certifications at once?',
    answer: 'Absolutely. We frequently assist clients who need BPOM + Halal + SNI simultaneously. Our team helps you align all requirements and avoid redundant steps in the process.',
  },
  {
    question: 'How much does it cost to register a product in Indonesia?',
    answer: 'Costs vary depending on the type of product and the certification needed. We offer transparent pricing and will provide a detailed quotation after an initial consultation.',
  },
];


// --- Data Export ---
export const productCertificationRisks: RiskItem[] = [
  {
    icon: FileQuestion,
    title: 'Unclear regulations and inconsistent requirements',
    description: 'Many businesses struggle to understand whether SNI, BPOM, Halal, or other licenses are required for their products.',
  },
  {
    icon: Languages,
    title: 'Language barriers and bureaucracy',
    description: 'Navigating Indonesian government systems can be frustrating without local support or clear instructions.',
  },
  {
    icon: TimerOff,
    title: 'Delays in product launch',
    description: 'Without proper documentation or testing, certification applications may be rejected, causing serious market entry delays.',
  },
  {
    icon: ShieldAlert,
    title: 'Risk of non-compliance penalties',
    description: 'Selling unregistered products can result in government sanctions, market bans, or even legal consequences.',
  },
];


export const certificationsData: CertificationItem[] = [
  {
    icon: FlaskConical,
    title: 'BPOM',
    category: 'Food, Drugs, & Cosmetics',
    description: 'Mandatory registration with the National Agency of Drug and Food Control for all food, supplements, drugs, and cosmetic products.',
  },
  {
    icon: Stamp,
    title: 'SNI',
    category: 'Indonesian National Standard',
    description: 'A required quality and safety certification for a specific list of products, including electronics, toys, steel, and bottled water.',
  },
  {
    icon: Signal,
    title: 'POSTEL / SDPPI',
    category: 'Telecommunications & IT',
    description: 'Certification for any device that transmits or receives a radio frequency, such as laptops, mobile phones, and IoT devices.',
  },
  {
    icon: Award,
    title: 'Halal Certification',
    category: 'Halal Products',
    description: 'Essential certification for food, beverages, and cosmetics targeting Indonesia’s large Muslim consumer market.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Device License',
    category: 'Medical Devices',
    description: 'A required distribution license (IPAK) for importing and selling medical equipment and devices in Indonesia.',
  },
  {
    icon: QrCode,
    title: 'E-Label / QR Code',
    category: 'Labeling for Electronics',
    description: 'Digital labeling registration required for telecommunication devices, allowing consumers to verify authenticity via QR code.',
  },
];

export const whyPartnerData: WhyItem[] = [
    {
        icon: ShieldCheck,
        title: 'End-to-End Management',
        description: 'We handle every step, from document preparation and submission to coordinating with testing labs and government agencies.'
    },
    {
        icon: Clock,
        title: 'Faster Market Entry',
        description: 'Our expertise helps you avoid common mistakes and navigate the bureaucracy efficiently, reducing your time-to-market.'
    },
    {
        icon: Rocket,
        title: 'Regulatory Expertise',
        description: 'Stay ahead of changing regulations. We provide the expert guidance needed to ensure your products remain compliant.'
    }
];

export const faqProductCertificationData: FaqItem[] = [
  {
    question: 'What is the difference between BPOM and Halal certification?',
    answer: 'BPOM certification is mandatory and focuses on the safety, quality, and health standards of a product. Halal certification is for compliance with Islamic law and, while not always mandatory, is highly expected by the majority of Indonesian consumers for food and cosmetic products.',
  },
  {
    question: 'Is SNI certification mandatory for all products?',
    answer: 'No, but it is mandatory for a specific list of products regulated by the government to protect consumer safety. Importing products on this list without an SNI mark can result in customs seizure and legal penalties.',
  },
  {
    question: 'How long does product registration take?',
    answer: 'The timeline varies significantly by certification type. POSTEL can be relatively quick (a few weeks), while BPOM and SNI can take several months due to laboratory testing and complex documentation requirements. We help streamline this process as much as possible.',
  },
  {
    question: 'Can I apply for these certifications as a foreign company?',
    answer: 'Generally, no. The applicant and license holder for product certifications must be a legally established Indonesian entity (like a PT PMA). We can assist in setting up this entity or provide solutions to facilitate the registration process on your behalf.',
  },
];