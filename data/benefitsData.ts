import { ComponentType } from 'react';
import {
  FaFileSignature,
  FaBalanceScale,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaGlobeAmericas
} from 'react-icons/fa';

// Define the type for a single benefit item
export interface BenefitItem {
  text: string;
  icon: ComponentType<{ className?: string }>;
}

// Define the type for the entire data object
export interface BenefitsData {
  title: string;
  highlightedText?: string;
  items: BenefitItem[];
  imageUrl: string;
}

// Updated data object with icons
export const iorBenefitsData: BenefitsData = {
  title: "Why use an IOR service",
  highlightedText: "in Indonesia?",
  imageUrl: '/assets/woman-smile.webp',
  items: [
    {
      text: "No need to establish a local company (PT PMA)",
      icon: FaFileSignature,
    },
    {
      text: "Complete legal compliance with Indonesian regulations",
      icon: FaBalanceScale,
    },
    {
      text: "Reduced risk of penalties and shipment delays",
      icon: FaShieldAlt,
    },
    {
      text: "All paperwork and import duties handled",
      icon: FaFileInvoiceDollar,
    },
    {
      text: "Ideal for foreign businesses, tech companies, and R&D shipments",
      icon: FaGlobeAmericas,
    },
  ],
};