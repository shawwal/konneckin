// --- DATA DEFINITIONS ---
type Industry = { name: string; icon: React.ElementType; description: string; };
import { FaBuilding, FaLaptopCode, FaShoppingCart, FaStore, FaMedkit, FaFlask, FaBroadcastTower, FaMicrochip, FaCar, FaPlane, FaBullhorn, FaChartLine } from 'react-icons/fa';

export const industries: Industry[] = [
  { name: 'Foreign manufacturers', icon: FaBuilding, description: 'We assist overseas manufacturers in bringing machinery, components, and equipment into Indonesia for production, installation, or testing purposes.' },
  { name: 'Technology companies', icon: FaLaptopCode, description: 'Our team handles the importation of IT infrastructure, servers, enterprise software hardware, and electronic modules required for operations and development.' },
  { name: 'E-commerce businesses', icon: FaShoppingCart, description: 'We work with online retailers and international sellers who ship goods directly to Indonesian customers. Our IOR service ensures fast clearance and full compliance with customs.' },
  { name: 'Online sellers', icon: FaStore, description: 'For cross-border sellers using platforms like Amazon, Shopify, or independent channels, we provide a seamless import process for fulfilling orders in Indonesia.' },
  { name: 'Medical device companies', icon: FaMedkit, description: 'We manage the import of regulated medical equipment, diagnostic kits, and laboratory tools for hospitals, clinics, and health institutions.' },
  { name: 'Pharmaceutical suppliers', icon: FaFlask, description: 'We handle temperature-sensitive and restricted pharmaceutical imports with full regulatory compliance and timely delivery.' },
  { name: 'Telecom companies', icon: FaBroadcastTower, description: 'We support network infrastructure providers by importing modems, routers, switches, and telecommunication devices needed for rollout and upgrades.' },
  { name: 'Electronic vendors', icon: FaMicrochip, description: 'We facilitate the import of consumer electronics, industrial gadgets, and specialized tools for local distribution or internal use.' },
  { name: 'Automotive firms', icon: FaCar, description: 'We enable importation of auto parts, heavy tools, and mechanical systems used for servicing, prototyping, or research.' },
  { name: 'Aerospace businesses', icon: FaPlane, description: 'We assist companies importing precision tools, parts, and components for aviation projects, aerospace engineering, and air shows.' },
  { name: 'Advertising agencies', icon: FaBullhorn, description: 'We import promotional materials, display kits, and merchandise used for product launches, exhibitions, and branding campaigns.' },
  { name: 'Marketing firms', icon: FaChartLine, description: 'We support campaign execution by importing point-of-sale displays, printed materials, and event props across major cities in Indonesia.' },
];