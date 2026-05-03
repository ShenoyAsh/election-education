import { ElectionMyth } from '@/types';

export const electionMyths: ElectionMyth[] = [
  {
    id: 'm1',
    myth: 'Dead people regularly vote in elections in large numbers.',
    fact: 'Voter rolls are regularly cleaned, and cases of ballots being cast in the name of deceased individuals are extremely rare and typically caught by election officials.',
    rating: 'false',
    category: 'fraud',
    sources: [
      { name: 'Brennan Center', url: 'https://www.brennancenter.org', type: 'ngo' },
      { name: 'CISA', url: 'https://www.cisa.gov', type: 'government' }
    ],
    dateDebunked: '2024-01-15',
    shareCount: 1250,
    helpfulVotes: 450,
    explanation: 'While names of deceased people may remain on rolls for a short period due to administrative lag, the act of someone successfully impersonating a dead voter and casting a ballot is statistically negligible.',
    relatedMyths: ['m3']
  },
  {
    id: 'm2',
    myth: 'You need a photo ID in every state to vote.',
    fact: 'Photo ID requirements vary by state. Many states accept non-photo ID, and some have no ID requirement beyond registration.',
    rating: 'false',
    category: 'voting-process',
    sources: [
      { name: 'Vote.org', url: 'https://www.vote.org', type: 'ngo' }
    ],
    dateDebunked: '2024-02-10',
    shareCount: 800,
    helpfulVotes: 320,
    explanation: 'As of 2024, only about half of the states require a photo ID to vote in person. Others have varying levels of requirements or alternative ways to verify identity.',
    relatedMyths: []
  },
  {
    id: 'm3',
    myth: 'Voting by mail is fundamentally insecure and leads to widespread fraud.',
    fact: 'Mail-in voting has multiple security layers, including signature verification, unique barcodes, and secure drop boxes. Studies consistently show fraud rates are extremely low.',
    rating: 'false',
    category: 'voting-process',
    sources: [
      { name: 'MIT Election Data & Science Lab', url: 'https://electionlab.mit.edu', type: 'academic' }
    ],
    dateDebunked: '2024-03-05',
    shareCount: 3500,
    helpfulVotes: 1200,
    explanation: 'Election officials across the political spectrum have affirmed the security of mail-in voting. Oregon, for example, has voted entirely by mail for over 20 years with minimal issues.',
    relatedMyths: ['m1']
  }
];
