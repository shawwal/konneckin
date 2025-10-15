import { FlaskConical, Stamp, Signal, Award, Stethoscope, QrCode, ShieldCheck, Clock, Rocket } from 'lucide-react';

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