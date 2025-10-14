import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FaqSection = ({ faqData }: any) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null) as any;
  const handleFaqToggle = (index: number) => setOpenFaq(openFaq === index ? null : index);
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">Frequently asked questions</h2>
            <p className="text-lg mb-6">Can’t find what you are looking for?</p>
            <a href="/contact" className="inline-block mb-4" aria-label="Contact us">
              <Button>Contact us</Button>
            </a>
          </div>
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqData?.map((faq: any, index: number) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full flex justify-between items-center text-left py-2"
                  >
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">{faq.question}</span>
                    {openFaq === index ? <FiChevronUp className="w-6 h-6 text-blue-500" /> : <FiChevronDown className="w-6 h-6 text-gray-500" />}
                  </button>
                  {openFaq === index && (
                    <div className="mt-2 pr-8">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;