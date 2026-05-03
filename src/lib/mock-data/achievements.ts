import { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: 'a1',
    title: 'First Step',
    description: 'Complete your first quiz question.',
    icon: 'CheckCircle',
    category: 'quiz',
    points: 50,
    requirement: 'Answer 1 question in any quiz.',
    isUnlocked: false,
    rarity: 'common'
  },
  {
    id: 'a2',
    title: 'Perfect Score',
    description: 'Get 100% on any quiz.',
    icon: 'Trophy',
    category: 'quiz',
    points: 200,
    requirement: 'All answers correct in a single quiz session.',
    isUnlocked: false,
    rarity: 'uncommon'
  },
  {
    id: 'a3',
    title: 'Myth Buster',
    description: 'Read 10 myth-fact pairs.',
    icon: 'ShieldCheck',
    category: 'knowledge',
    points: 100,
    requirement: 'Open and read the details of 10 different myths.',
    isUnlocked: false,
    rarity: 'common'
  },
  {
    id: 'a4',
    title: 'Map Explorer',
    description: 'View all 50 states on the map.',
    icon: 'Map',
    category: 'exploration',
    points: 150,
    requirement: 'Click on every state on the interactive map.',
    isUnlocked: false,
    rarity: 'uncommon'
  }
];
