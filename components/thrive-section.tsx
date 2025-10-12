'use client'
import { Check, User, Video, Mic, Phone } from 'lucide-react';

// Mock data for the component
const cardData = [
  {
    type: 'support',
    title: 'End-to-end market entry support',
    description: 'Company setup, licenses, KITAS, compliance - all under one roof.',
    profiles: [
      {
        name: 'Michelle Ales',
        avatar: '/assets/michelle-ales.avif',
      },
      {
        name: 'Konneckin Jakarta',
        avatar: null,
        initials: 'K',
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
      <div className="relative flex h-full flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm">
        <div>
          <h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
          <p className="mt-2 text-muted-foreground">{item.description}</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {item.profiles.map((profile: any) => (
            <div key={profile.name} className="flex flex-col items-center">
              <div className="relative flex h-32 w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-700">
                {profile.avatar ? (
                  <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-muted-foreground">{profile.initials}</span>
                )}
                <div className="absolute bottom-2 left-2 text-xs drop-shadow-md glass p-0.5">{profile.name}</div>
              </div>
              <div className="mt-2 flex items-center justify-center gap-2">
                  <div className="rounded-md bg-muted p-1.5"><Video className="h-4 w-4 text-muted-foreground"/></div>
                  <div className="rounded-md bg-muted p-1.5"><Mic className="h-4 w-4 text-muted-foreground"/></div>
                  <div className="rounded-md bg-destructive p-1.5"><Phone className="h-4 w-4 text-white"/></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (item.type === 'process') {
    return (
      <div className="flex h-full flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm">
        {/* Mockup UI Tabs */}
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
      <div className="relative h-full min-h-[350px] overflow-hidden rounded-2xl border bg-card p-6 shadow-sm md:min-h-0">
        <img src={item.imageUrl} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
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
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            Thrive in the Indonesia market
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Navigating Indonesia&apos;s complex bureaucracy can be challenging. That&apos;s why you need the best support.
          </p>
        </div>

        {/* --- Responsive Grid --- */}
        {/* Mobile: 1 column */}
        {/* Tablet: 1 column (can be changed to 2 if needed) */}
        {/* Desktop: 3 columns */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
          {cardData.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
