export interface Resource {
  id: string;
  title: string;
  organization: string;
  description: string;
  url: string;
  category: 'government' | 'registration' | 'research' | 'integrity' | 'education' | 'accessibility';
  languages: string[];
  tags: string[];
  trustBadge: string;
  lastVerified: string;
}

export const resources: Resource[] = [
  {
    id: 'r1',
    title: 'Vote.gov',
    organization: 'U.S. Government',
    description: 'The official portal for voter registration and election information across all states.',
    url: 'https://vote.gov',
    category: 'government',
    languages: ['English', 'Spanish', 'Chinese', 'Arabic'],
    tags: ['Official', 'Registration'],
    trustBadge: 'Official Government',
    lastVerified: '2024-03-01'
  },
  {
    id: 'r2',
    title: 'Ballotpedia',
    organization: 'Ballotpedia',
    description: 'The encyclopedia of American politics, providing non-partisan information on every candidate and ballot measure.',
    url: 'https://ballotpedia.org',
    category: 'research',
    languages: ['English'],
    tags: ['Candidate Research', 'Non-partisan'],
    trustBadge: 'Verified NGO',
    lastVerified: '2024-03-15'
  },
  {
    id: 'r3',
    title: 'Election Protection',
    organization: '866-OUR-VOTE',
    description: 'National non-partisan voter protection coalition that provides assistance and legal support.',
    url: 'https://866ourvote.org',
    category: 'integrity',
    languages: ['English', 'Spanish', 'Asian Languages'],
    tags: ['Voter Rights', 'Legal Help'],
    trustBadge: 'Verified NGO',
    lastVerified: '2024-02-20'
  }
];
