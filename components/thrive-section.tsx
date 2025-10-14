'use client'
import { Check, Video, Mic, PhoneOff, MessageSquare, Monitor } from 'lucide-react';
import Image from 'next/image';

// Mock data for the component
const cardData = [
  {
    type: 'support',
    title: 'End-to-end market entry support',
    description: 'Company setup, licenses, KITAS, compliance - all under one roof.',
    profiles: [
      {
        name: 'Michelle Ales',
        avatar: '/assets/michelle-ales.png',
        initials: 'MA',
      },
      {
        name: 'Konneckin Jakarta',
        avatar: null,
        initials: 'KJ',
      },
    ],
  },
  {
    type: 'process',
    title: 'Transparent process & pricing',
    description: "Everything's upfront — from timeline to fees.",
  },
  {
    type: 'trusted',
    title: 'Trusted by companies across industries',
    description: 'Tech, manufacturing, creative, energy — all trust Konneckin.',
    imageUrl: '/assets/image-fx-19.webp',
  },
];

// Reusable Card component for different content types
function FeatureCard({ item }: any) {
  if (item.type === 'support') {
    return (
      // Added justify-between to push buttons to the bottom
      <div className="relative flex h-full w-full flex-col justify-between rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-4 shadow-xl dark:from-gray-800 dark:to-gray-900">
        {/* This div wraps the top content (video + text) */}
        <div>
          <div className="mb-6">
            <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm">{item.description}</p>
          </div>
          <div className="flex flex-1 items-stretch justify-center gap-4">
            {item.profiles.slice(0, 2).map((profile: any, index: number) => (
              <div key={profile.name} className="relative flex min-h-[200px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-neutral-700 shadow-lg">
                {profile.avatar ? (
                  <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-4xl font-bold text-gray-400 sm:text-6xl">{profile.initials}</span>
                )}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm sm:text-sm">
                  {index === 0 && <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />}
                  {index === 1 && (
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    </div>
                  )}
                  <span className="hidden sm:inline">{profile.name}</span>
                  <span className="inline sm:hidden">{profile.initials}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons remain at the bottom */}
        <div className="flex items-center justify-center gap-2 pt-6 sm:gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white shadow-md transition-colors hover:bg-neutral-700 sm:h-12 sm:w-12">
            <Mic className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white shadow-md transition-colors hover:bg-orange-500 sm:h-12 sm:w-12">
            <Video className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="absolute h-0.5 w-6 rotate-45 bg-white opacity-90 sm:w-8" />
          </button>
          <button className="hidden h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white shadow-md transition-colors hover:bg-neutral-700 sm:flex">
            <Monitor className="h-6 w-6" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white shadow-md transition-colors hover:bg-neutral-700 sm:h-12 sm:w-12">
            <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button className="ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-colors hover:bg-red-500 sm:h-14 sm:w-14">
            <PhoneOff className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </div>
      </div>
    );
  }

  if (item.type === 'process') {
    return (
      <div className="flex h-full flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm">
        <div className="rounded-lg border bg-muted/50 p-3">
          <div className="flex items-center space-x-2 text-sm">
            <div className="rounded bg-background px-3 py-1.5 text-foreground shadow-sm">Services</div>
            <div className="text-muted-foreground">Timeline</div>
            <div className="text-muted-foreground">Fees</div>
            <div className="text-muted-foreground">Terms</div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-start space-x-2">
              <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary">
                <Check className="h-3 w-3 text-primary-foreground" />
              </div>
              <div>
                <div className="h-3 w-28 rounded-sm bg-muted-foreground/30"></div>
                <div className="mt-1.5 h-2 w-20 rounded-sm bg-muted-foreground/20"></div>
              </div>
            </div>
            <div className="flex items-start space-x-2 opacity-50">
              <div className="mt-1 h-4 w-4 rounded-sm border border-muted-foreground/50"></div>
              <div>
                <div className="h-3 w-32 rounded-sm bg-muted-foreground/30"></div>
                <div className="mt-1.5 h-2 w-24 rounded-sm bg-muted-foreground/20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
          <p className="mt-2 text-muted-foreground">{item.description}</p>
        </div>
      </div>
    );
  }

  if (item.type === 'trusted') {
    return (
      <div className="relative h-full overflow-hidden rounded-2xl border bg-card p-6 shadow-sm min-h-[300px]">
        <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative flex h-full flex-col justify-end">
          <h3 className="font-serif text-2xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-white/90">{item.description}</p>
        </div>
      </div>
    );
  }

  return null;
}

export function ThriveSection() {
  const trustedCard = cardData.find(item => item.type === 'trusted');
  const otherCards = cardData.filter(item => item.type !== 'trusted');

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto container px-4 lg:px-0">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            Thrive in the Indonesia market
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Navigating Indonesia&apos;s complex bureaucracy can be challenging. That&apos;s why you need the best support.
          </p>
        </div>

        {/* --- Final Responsive Grid Layout --- */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Column 1: The two cards stacked vertically */}
          <div className="flex flex-col gap-4">
            {otherCards.map((item) => (
              <FeatureCard key={item.type} item={item} />
            ))}
          </div>

          {/* Column 2: The large "Trusted" card */}
          {trustedCard && (
            <div>
              <FeatureCard item={trustedCard} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}