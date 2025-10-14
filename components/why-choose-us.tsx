import { HiOutlineLightBulb, HiOutlineLocationMarker, HiOutlineGlobeAlt, HiOutlineCash } from 'react-icons/hi';
import FeatureCard from '@/components/feature-card';

export const WhyChooseUsSection = () => {

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your reliable import partner <span className="text-primary">in Indonesia.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={HiOutlineLightBulb} title="Local expertise" text="We’re based in Jakarta and know the ins and outs of Indonesian regulations." />
          <FeatureCard icon={HiOutlineLocationMarker} title="In-house support" text="Legal and customs handled directly by our internal team—fast, accurate, and personal." />
          <FeatureCard icon={HiOutlineGlobeAlt} title="Trusted by global clients" text="Foreign investors and multinationals choose us for compliant and efficient imports." />
          <FeatureCard icon={HiOutlineCash} title="Transparent pricing" text="No surprises. Clear, upfront fees with no hidden costs." />
        </div>
      </div>
    </section>
  );
}