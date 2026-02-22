'use client'

import FaqSection from '@/components/faq-section';
import IntegratedAdvisorySection from '@/components/integrated-advisory';
import { SplitTwoSection } from '@/components/split-two-section';
import {
  Check,
  Briefcase,
  LineChart,
  Users,
  Home,
  Search,
  FileText,
  Activity,
  UserCheck
} from 'lucide-react';

const kitasCategoriesData = [
  {
    icon: LineChart,
    title: 'Investor KITAS',
    description: 'For foreign shareholders holding qualifying equity in a PT PMA.',
  },
  {
    icon: Briefcase,
    title: 'Working KITAS',
    description: 'Alignment between job title, RPTKA approval, and KBLI classification.',
  },
  {
    icon: UserCheck,
    title: 'Director or Commissioner KITAS',
    description: 'Evaluation of shareholding, capital compliance, and director position.',
  },
  {
    icon: Users,
    title: 'Dependent and Family KITAS',
    description: 'For family members joining primary KITAS holders in Indonesia.',
  },
  {
    icon: Home,
    title: 'Second Home Visa',
    description: 'Long-term residency options for eligible foreigners.',
  },
  {
    icon: Home,
    title: 'Retirement KITAS',
    description: 'Residency structured for retirement in Indonesia.',
  },
];

const structuredProcessData = [
  {
    step: '01',
    icon: Search,
    title: 'Initial Assessment',
    description: 'Analysis of role, shareholding, and company compliance exposure.',
  },
  {
    step: '02',
    icon: FileText,
    title: 'Regulatory Review',
    description: 'Alignment between OSS, KBLI, capital structure, and manpower requirements.',
  },
  {
    step: '03',
    icon: Users,
    title: 'Submission and Coordination',
    description: 'Managed communication with relevant authorities.',
  },
  {
    step: '04',
    icon: Check,
    title: 'KITAS Issuance',
    description: 'Biometric registration and formal issuance of stay permit.',
  },
  {
    step: '05',
    icon: Activity,
    title: 'Ongoing Monitoring',
    description: 'Supervision of expiration timeline and reporting obligations.',
  },
];

const faqKitasData = [
  {
    question: "What is the difference between Investor KITAS and Working KITAS?",
    answer: "Speak with our team for a structured assessment based on your role and residency objectives."
  },
  {
    question: "Can a Director apply for Investor KITAS without holding shares?",
    answer: "Speak with our team for a structured assessment based on your role and residency objectives."
  },
  {
    question: "Is RPTKA required for all KITAS applications?",
    answer: "Speak with our team for a structured assessment based on your role and residency objectives."
  },
  {
    question: "How long does the KITAS process take in Indonesia?",
    answer: "Speak with our team for a structured assessment based on your role and residency objectives."
  },
  {
    question: "Can my family join me under my KITAS?",
    answer: "Speak with our team for a structured assessment based on your role and residency objectives."
  },
  {
    question: "What are common reasons for KITAS rejection?",
    answer: "Speak with our team for a structured assessment based on your role and residency objectives."
  },
  {
    question: "Can I convert a Visit Visa into KITAS?",
    answer: "Speak with our team for a structured assessment based on your role and residency objectives."
  },
  {
    question: "What happens if my KITAS expires?",
    answer: "Speak with our team for a structured assessment based on your role and residency objectives."
  },
  {
    question: "Do I need to establish a PT PMA to obtain Investor KITAS?",
    answer: "Speak with our team for a structured assessment based on your role and residency objectives."
  }
];

const HeroSection = () => (
  <section className="bg-white dark:bg-gray-900 py-10 md:py-12">
    <div className="container mx-auto">
      <SplitTwoSection
        title="Legal Stay and Work Permit for Foreigners"
        subtitle="Indonesia provides strong business opportunities, but immigration and manpower regulations are strictly enforced. Konneckin ensures your KITAS is structured properly from the beginning so you avoid rejection risk and long term compliance issues."
        ctaText="Request a KITAS Assessment"
        ctaHref="/contact"
        imageUrl="/assets/woman-look-left.webp"
        imageAlt="Foreign resident in Indonesia"
        imageOnLeft={false}
        containerClassName="lg:rounded-2xl"
      />
    </div>
  </section>
);

export default function KitasPage() {
  return (
    <>
      <HeroSection />

      {/* ========== 1. Structural Compliance Section ========== */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto container px-4 lg:px-0">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl text-slate-900 dark:text-white">
              Immigration Compliance Is Structural
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Indonesian authorities cross reference immigration data with manpower approval, OSS licensing, and corporate reporting.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Regulatory Alignment</h3>
              <p className="text-muted-foreground">Assessment of current immigration and manpower framework.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Integrated Advisory</h3>
              <p className="text-muted-foreground">Konneckin operates as a corporate services advisory firm, not a standalone visa processor. This integration ensures your KITAS remains aligned with your business structure over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2. KITAS Categories Section ========== */}
      <section className="py-20 sm:py-28 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              KITAS and Residency Categories
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Konneckin advises across various KITAS and residency categories in Indonesia, covering corporate, family, and long term stay requirements.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitasCategoriesData.map((category) => (
              <div key={category.title} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full h-12 w-12 flex items-center justify-center">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{category.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Not sure which KITAS category applies to you?</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Request a KITAS Assessment
            </button>
          </div>
        </div>
      </section>

      {/* ========== 3. Our Structured Process Section ========== */}
      <section className="py-20 sm:py-28 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Our Structured Process
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              A structured approach designed to ensure regulatory alignment and long term compliance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {structuredProcessData.map((step) => (
              <div key={step.step} className="flex flex-col sm:flex-row items-start sm:items-center bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-14 w-14 flex items-center justify-center font-bold text-lg mb-4 sm:mb-0 sm:mr-6">
                  {step.step.split(' ')[0]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IntegratedAdvisorySection />
      {/* ========== 5. FAQ Section ========== */}
      <FaqSection faqData={faqKitasData} />
    </>
  );
}