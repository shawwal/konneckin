'use client';

import React from 'react';
import { FileWarning, AlertTriangle, Users, Timer } from 'lucide-react';

// --- Data extracted from the HTML ---
const pitfallsData = [
  {
    icon: FileWarning,
    title: 'Too many forms, too little guidance',
    description: "Immigration doesn't come with a checklist—until you work with the right consultant.",
  },
  {
    icon: AlertTriangle,
    title: 'One wrong file = weeks of delay',
    description: 'Immigration systems won’t warn you. They’ll just reject and reset the entire process.',
  },
  {
    icon: Users,
    title: 'HR ≠ immigration experts',
    description: 'Many in-house HR teams aren’t equipped to handle the complexities of expat permits properly.',
  },
  {
    icon: Timer,
    title: 'No time to start from scratch',
    description: 'Your time is better spent building your career or business—not decoding Indonesian immigration law.',
  },
];

// --- The React Component ---
export default function PitfallsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            Still thinking of doing it yourself?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Managing Indonesian visas and permits sounds easy—until you actually try. Here's why most expats come to us after wasting weeks (or months).
          </p>
        </div>

        {/* Pitfalls Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pitfallsData.map((pitfall) => (
            <div 
              key={pitfall.title} 
              className="flex items-start p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex-shrink-0">
                <pitfall.icon className="h-8 w-8 text-red-500 dark:text-red-400" />
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pitfall.title}</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400">{pitfall.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}