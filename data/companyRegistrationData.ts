// Define the type for a single opportunity item
import { Building2, Briefcase, Store, HardHat } from 'lucide-react';

export interface OpportunityItem {
  title: string;
  description: string;
}

export interface ServiceItem {
  icon: React.ElementType;
  subtitle: string;
  title: string;
  description: string;
  linkHref: string;
}

export interface TableData {
  headers: string[];
  rows: { [key: string]: string }[];
}


// Export the data array
export const opportunityItems: OpportunityItem[] = [
  {
    title: 'Large population and consumer market',
    description: 'With over 275 million people and a rising middle class, Indonesia offers strong demand across key consumer sectors.',
  },
  {
    title: 'Supportive investment policies',
    description: 'Pro-business reforms and simplified licensing make it easier for foreign investors to set up and operate.',
  },
  {
    title: 'Access to ASEAN markets',
    description: 'As an ASEAN member, Indonesia provides strategic access to over 600 million consumers with reduced trade barriers.',
  },
  {
    title: 'Opportunities in key sectors',
    description: 'High-potential industries like tech, manufacturing, logistics, and F&B are open to foreign investment and primed for growth.',
  },
];

// Export the data array
export const incorporationServices: ServiceItem[] = [
  {
    icon: Building2,
    subtitle: 'What we do',
    title: 'PT PMA (foreign-owned company) establishment',
    description: 'Set up a foreign-owned company (PT PMA) in Indonesia with full compliance and investment approval.',
    linkHref: '/pt-pma-establishment/',
  },
  {
    icon: Briefcase,
    subtitle: 'What we do',
    title: 'Representative office (KPPA) establishment',
    description: 'Open a Representative Office (KPPA) for market research, promotion, or liaison activities — without direct sales.',
    linkHref: '/kppa-establishment-in-indonesia/',
  },
  {
    icon: Store,
    subtitle: 'What we do',
    title: 'Representative office for business trading (KP3A) establishment',
    description: 'Register a foreign trading representative office (KP3A) to engage in trade-related activities under Indonesian law.',
    linkHref: '/kp3a-registration-in-indonesia/',
  },
  {
    icon: HardHat,
    subtitle: 'What we do',
    title: 'Representative office for foreign-owned construction company (BUJKA) establishment',
    description: 'Obtain the BUJKA license to allow foreign construction firms to operate legally and partner with local entities.',
    linkHref: '/bujka-registration-in-indonesia/',
  },
];
// --- Data Export ---
export const comparisonTableData: TableData = {
  headers: ['Criteria', 'PT PMA', 'KPPA', 'KP3A', 'BUJKA'],
  rows: [
    {
      'Criteria': 'Purpose',
      'PT PMA': 'Commercial business operations',
      'KPPA': 'Representative office for liaison only',
      'KP3A': 'Trade promotion & representation',
      'BUJKA': 'Construction project<br>execution'
    },
    {
      'Criteria': 'Allowed to generate revenue',
      'PT PMA': 'Yes',
      'KPPA': 'No',
      'KP3A': 'No',
      'BUJKA': 'Yes'
    },
    {
      'Criteria': 'Ownership',
      'PT PMA': '100% foreign or joint<br>venture',
      'KPPA': 'Fully owned by foreign<br>parent',
      'KP3A': 'Fully owned by foreign<br>principal',
      'BUJKA': 'Licensed foreign<br>construction company'
    },
    {
      'Criteria': 'Legal status',
      'PT PMA': 'Legal entity (limited liability company)',
      'KPPA': 'Not a legal entity',
      'KP3A': 'Not a legal entity',
      'BUJKA': 'Project-based licensed<br>entity'
    },
    {
      'Criteria': 'Minimum capital',
      'PT PMA': 'IDR 10 billion<br>(paid-up min IDR 2.5 billion)',
      'KPPA': 'Not required',
      'KP3A': 'Not required',
      'BUJKA': 'Based on project value & regulation'
    },
    {
      'Criteria': 'Business activities',
      'PT PMA': 'Varies, must align with<br>allowed sectors',
      'KPPA': 'Market research,<br>networking, reporting',
      'KP3A': 'Product representation, promotion',
      'BUJKA': 'Construction only (project-specific)'
    },
    {
      'Criteria': 'License/permit required',
      'PT PMA': 'Business License (OSS)',
      'KPPA': 'KPPA License from BKPM',
      'KP3A': 'KP3A License from Trade Ministry',
      'BUJKA': 'BUJKA License from Construction Authority'
    },
    {
      'Criteria': 'Duration',
      'PT PMA': 'Unlimited (as long as compliant)',
      'KPPA': 'Max 5 years, extendable',
      'KP3A': 'Max 3 years, extendable',
      'BUJKA': 'Project-based, temporary'
    },
    {
      'Criteria': 'Tax obligations',
      'PT PMA': 'Full corporate tax obligations',
      'KPPA': 'No revenue tax (but must report)',
      'KP3A': 'No revenue tax (but must report)',
      'BUJKA': 'Taxed per project and income generated'
    }
  ]
};

