'use client'

import React from 'react';

// Keyframes for a continuous scrolling animation.
const slideKeyframes = `
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export function TrustedLogos({ isAnimationEnabled = true }) {
  // Simplified the logos array - no theme-specific properties needed anymore.
  const logos = [
    { src: "/client-logo/google.png", alt: "Google Logo" },
    { src: "/client-logo/shopee.png", alt: "Shopee Logo" },
    { src: "/client-logo/calvin-klein.png", alt: "Calvin Klein Logo" },
    { src: "/client-logo/suez.png", alt: "Suez Logo" },
    { src: "/client-logo/djoy.png", alt: "Djoy Logo" },
    { src: "/client-logo/iqos.png", alt: "IQOS Logo" },
  ];

  // Dynamically create the class for the animation
  const animationClass = isAnimationEnabled 
    ? 'animate-[slide_20s_linear_infinite]' 
    : '';

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-8 md:py-10">
      <style>{slideKeyframes}</style>
      
      <div className="mx-auto text-center w-fit rounded-full border bg-neutral-100 px-4 py-2 text-sm text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
        {"Trusted by leading companies around the world"}
      </div>

      {/* --- EDITED SECTION --- */}
      {/* The container now has a background that changes with the theme. */}
      <div className="group mt-10 w-full overflow-hidden rounded-xl bg-white shadow-inner dark:bg-neutral-800">
        <div className={`flex w-max items-center motion-safe:group-hover:paused ${animationClass}`}>
          {/* Duplicate the logos array for a seamless, infinite loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="px-10 py-6"> {/* Added vertical padding for spacing */}
              <img
                src={logo.src}
                alt={logo.alt}
                // The className is now simple and static for all logos.
                className="h-8 max-h-8 w-auto flex-shrink-0 object-contain md:h-10 md:max-h-10"
                // Hide broken image links
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

