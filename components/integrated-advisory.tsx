import Image from 'next/image';

const IntegratedAdvisorySection = () => {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- Text Content --- */}
          <div className="max-w-xl lg:pr-8">
            <h2 className="text-3xl font-semibold text-[#1e3f66] dark:text-blue-400">
              Integrated Corporate and Immigration Advisory
            </h2>
            <div className="mt-6 space-y-6 text-slate-700 dark:text-slate-300 text-base lg:text-lg leading-relaxed">
              <p>Konneckin operates as a corporate services advisory firm, not a standalone visa processor.</p>
              <p>
                Our broader capabilities include PT PMA establishment, representative office setup, OSS licensing, tax and accounting advisory, payroll structuring, and corporate compliance review. [cite: 120]
              </p>
              <p>
                This integration ensures your KITAS remains aligned with your business structure over time. 
              </p>
            </div>
          </div>
          
          {/* --- Image Section --- */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 shadow-sm">
            <Image 
              // Make sure to add your image to your public/assets folder and update this path if needed
              src="/assets/pillow.webp" 
              alt="Integrated Advisory Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedAdvisorySection;