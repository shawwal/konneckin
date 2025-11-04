'use client'
import { useState } from 'react';
import Link from 'next/link'; // <-- 1. IMPORT NEXT.JS LINK
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a utility for classnames

// Mock data extracted from the HTML, including copywriting
const contentData = [
  {
    id: 1,
    title: 'General overview of corporate law in Indonesia',
    description: 'An essential guide to understanding the legal framework for establishing and operating a business in Indonesia, covering key regulations, compliance, and investment laws.',
    imageUrl: '/assets/konneckin-people.webp',
    link: '/industries',
  },
  {
    id: 2,
    title: 'Unlocking business opportunities in Indonesia: The power of strategic business matchmaking',
    description: 'Discover how business matchmaking services can accelerate your market entry and help you build reliable partnerships in Indonesia.',
    imageUrl: '/assets/ev-charging.webp',
    link: '/services',
  },
  {
    id: 3,
    title: 'What comes after company registration in Indonesia?',
    description: 'Registering a company is just the beginning. Many foreign businesses in Indonesia are surprised to learn how much still needs to be done.',
    imageUrl: '/assets/people-working.webp',
    link: '/services',
  },
  {
    id: 4,
    title: 'All news & insight',
    description: 'Explore our collection of articles, news, and in-depth analysis covering the latest market trends and business developments.',
    imageUrl: '/assets/a-woman-and-balloon.webp',
    link: '/insights',
  },
];

export function LatestContentSection() {
  // State to track the currently hovered item. Default to the first item.
  const [hoveredId, setHoveredId] = useState(contentData[0].id);

  return (
    <section className="bg-background py-0 md:py-0 mt-14">
      <div className="mx-auto w-full px-0">
        <div className="text-center">
          <h2 className="font-serif px-4 lg:px-0 text-3xl font-semibold md:text-4xl">
            Stay ahead with our latest content
          </h2>
        </div>

        <div className="mt-12">
          <div className="relative flex min-h-[650px] w-full flex-col overflow-hidden border bg-card shadow-sm md:flex-row">
            {/* Background Images Container */}
            <div className="absolute inset-0">
              {contentData.map((item) => (
                <img
                  key={item.id}
                  src={item.imageUrl}
                  alt={item.title}
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out',
                    hoveredId === item.id
                      ? 'opacity-100 scale-105'
                      : 'opacity-0 scale-100'
                  )}
                />
              ))}
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50 transition-colors duration-500" />
            </div>

            {/* Content Columns */}
            {contentData.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                className="relative flex-1 cursor-pointer border-b border-white/10 p-6 last:border-b-0 md:border-b-0 md:border-r"
              >
                <div className="flex h-full flex-col justify-end text-white">
                  <h3 className="font-serif text-xl font-medium transition-transform duration-500">
                    {item.title}
                  </h3>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-700 ease-in-out',
                      hoveredId === item.id ? 'max-h-48' : 'max-h-0'
                    )}
                  >
                    <p className="mt-3 text-sm text-white/80">
                      {item.description}
                    </p>
                    
                    {/* --- FIX IS HERE --- */}
                    <Link
                      href={item.link}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-white hover:underline"
                      aria-label={`Learn more about: ${item.title}`} // 3. ADD ARIA-LABEL
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    {/* --- END FIX --- */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}