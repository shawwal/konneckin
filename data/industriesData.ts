import { ComponentType } from 'react';
import {
  FaBuilding, FaLaptopCode, FaShoppingCart, FaStore, FaMedkit, FaFlask,
  FaBroadcastTower, FaMicrochip, FaCar, FaPlane, FaBullhorn, FaChartLine
} from 'react-icons/fa';

// Interface for a single industry
interface Industry {
  name: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  image: string;
}

// Interface for the entire section's data
interface IndustriesSectionData {
  title: string;
  subtitle: string;
  industries: Industry[];
}

// Export a single object with all data, including the new shortened descriptions
export const iorIndustriesData: IndustriesSectionData = {
  title: "Industries We Serve",
  subtitle: "We offer tailored Importer of Record (IOR) services across diverse industries, ensuring regulatory compliance and smooth delivery for foreign companies importing into Indonesia.",
  industries: [
    {
      name: 'Foreign manufacturers',
      icon: FaBuilding,
      description: 'Assisting overseas manufacturers with importing machinery and equipment for production, installation, or testing in Indonesia.',
      image: '/assets/manufacturers-1.webp'
    },
    {
      name: 'Technology companies',
      icon: FaLaptopCode,
      description: 'Handling the import of IT infrastructure, servers, and electronic modules for tech companies\' operations and development.',
      image: '/assets/technology-1.webp'
    },
    {
      name: 'E-commerce businesses',
      icon: FaShoppingCart,
      description: 'Providing fast, compliant customs clearance for online retailers and international sellers shipping to Indonesian customers.',
      image: '/assets/ecommerce-1.webp'
    },
    {
      name: 'Online sellers',
      icon: FaStore,
      description: 'Offering a seamless import process for cross-border sellers on platforms like Amazon and Shopify to fulfill Indonesian orders.',
      image: '/assets/online-sellers-1.webp'
    },
    {
      name: 'Medical device companies',
      icon: FaMedkit,
      description: 'Managing the compliant import of regulated medical equipment, diagnostic kits, and lab tools for healthcare institutions.',
      image: '/assets/medical-1.webp'
    },
    {
      name: 'Pharmaceutical suppliers',
      icon: FaFlask,
      description: 'Ensuring compliant and timely delivery for temperature-sensitive and restricted pharmaceutical imports.',
      image: '/assets/pharmaceutical-1.webp'
    },
    {
      name: 'Telecom companies',
      icon: FaBroadcastTower,
      description: 'Importing essential telecom devices like modems, routers, and switches for network infrastructure providers.',
      image: '/assets/telecom-1.webp'
    },
    {
      name: 'Electronic vendors',
      icon: FaMicrochip,
      description: 'Facilitating the import of consumer electronics, industrial gadgets, and specialized tools for distribution or internal use.',
      image: '/assets/electronic-1.webp'
    },
    {
      name: 'Automotive firms',
      icon: FaCar,
      description: 'Enabling the import of auto parts, heavy tools, and mechanical systems for automotive servicing, prototyping, and research.',
      image: '/assets/automotive-1.webp'
    },
    {
      name: 'Aerospace businesses',
      icon: FaPlane,
      description: 'Assisting with the import of precision tools and components for aviation projects, engineering, and air shows.',
      image: '/assets/aerospace-1.webp'
    },
    {
      name: 'Advertising agencies',
      icon: FaBullhorn,
      description: 'Importing promotional materials, display kits, and merchandise for product launches, exhibitions, and branding campaigns.',
      image: '/assets/advertising-1.webp'
    },
    {
      name: 'Marketing firms',
      icon: FaChartLine,
      description: 'Supporting marketing campaigns by importing point-of-sale displays, printed materials, and event props.',
      image: '/assets/marketing-1.webp'
    },
  ]
};