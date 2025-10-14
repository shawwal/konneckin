import { ComponentType } from 'react';
import {
  FaBuilding, FaLaptopCode, FaShoppingCart, FaStore, FaMedkit, FaFlask,
  FaBroadcastTower, FaMicrochip, FaCar, FaPlane, FaBullhorn, FaChartLine
} from 'react-icons/fa';

// Add the 'image' property to the interface
interface Industry {
  name: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  image: string; // <-- New property for the background image URL
}

interface IndustriesSectionData {
  title: string;
  subtitle: string;
  industries: Industry[];
}

// Add the image URLs to your data object
export const iorIndustriesData: IndustriesSectionData = {
  title: "Industries We Serve",
  subtitle: "We support a diverse range of industries with tailored Importer of Record (IOR) services. Our expertise helps foreign companies comply with Indonesian import regulations and ensure smooth delivery for specialized goods.",
  industries: [
    {
      name: 'Foreign manufacturers',
      icon: FaBuilding,
      description: 'We assist overseas manufacturers...',
      image: '/assets/manufacturers-1.webp'
    },
    {
      name: 'Technology companies',
      icon: FaLaptopCode,
      description: 'Our team handles the importation of IT infrastructure...',
      image: '/assets/technology-1.webp'
    },
    {
      name: 'E-commerce businesses',
      icon: FaShoppingCart,
      description: 'We work with online retailers and international sellers...',
      image: '/assets/ecommerce-1.webp'
    },
    {
      name: 'Online sellers',
      icon: FaStore,
      description: 'For cross-border sellers using platforms like Amazon...',
      image: '/assets/online-sellers-1.webp'
    },
    {
      name: 'Medical device companies',
      icon: FaMedkit,
      description: 'We manage the import of regulated medical equipment...',
      image: '/assets/medical-1.webp'
    },
    {
      name: 'Pharmaceutical suppliers',
      icon: FaFlask,
      description: 'We handle temperature-sensitive and restricted pharmaceutical imports...',
      image: '/assets/pharmaceutical-1.webp'
    },
    {
      name: 'Telecom companies',
      icon: FaBroadcastTower,
      description: 'We support network infrastructure providers...',
      image: '/assets/telecom-1.webp'
    },
    {
      name: 'Electronic vendors',
      icon: FaMicrochip,
      description: 'We facilitate the import of consumer electronics...',
      image: '/assets/electronic-1.webp'
    },
    {
      name: 'Automotive firms',
      icon: FaCar,
      description: 'We enable importation of auto parts, heavy tools...',
      image: '/assets/automotive-1.webp'
    },
    {
      name: 'Aerospace businesses',
      icon: FaPlane,
      description: 'We assist companies importing precision tools...',
      image: '/assets/aerospace-1.webp'
    },
    {
      name: 'Advertising agencies',
      icon: FaBullhorn,
      description: 'We import promotional materials, display kits...',
      image: '/assets/advertising-1.webp'
    },
    {
      name: 'Marketing firms',
      icon: FaChartLine,
      description: 'We support campaign execution by importing point-of-sale displays...',
      image: '/assets/marketing-1.webp'
    },
  ]
};