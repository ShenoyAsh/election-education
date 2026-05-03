import { Election } from '@/types';

const currentYear = new Date().getFullYear();

export const elections: Election[] = [
  {
    id: 'e1',
    name: '2024 Presidential Election',
    type: 'federal',
    date: new Date(2024, 10, 5),
    registrationDeadline: new Date(2024, 9, 7),
    earlyVotingStart: new Date(2024, 9, 21),
    earlyVotingEnd: new Date(2024, 10, 3),
    absenteeBallotDeadline: new Date(2024, 9, 29),
    description: 'The general election for President and Vice President of the United States.',
    officialWebsite: 'https://www.usa.gov/election',
    importance: 'critical',
    colorCode: '#1B4FD8'
  },
  {
    id: 'e2',
    name: 'State Primary Election',
    type: 'primary',
    date: new Date(currentYear, 7, 15),
    registrationDeadline: new Date(currentYear, 6, 20),
    earlyVotingStart: new Date(currentYear, 7, 1),
    earlyVotingEnd: new Date(currentYear, 7, 13),
    absenteeBallotDeadline: new Date(currentYear, 7, 5),
    state: 'CA',
    description: 'Primary election to select candidates for state and local offices.',
    officialWebsite: 'https://www.sos.ca.gov/elections',
    importance: 'high',
    colorCode: '#DC2626'
  },
  {
    id: 'e3',
    name: 'City Council Special Election',
    type: 'local',
    date: new Date(currentYear, 4, 20),
    registrationDeadline: new Date(currentYear, 3, 25),
    earlyVotingStart: new Date(currentYear, 4, 10),
    earlyVotingEnd: new Date(currentYear, 4, 18),
    absenteeBallotDeadline: new Date(currentYear, 4, 12),
    description: 'Special election to fill a vacancy on the city council.',
    officialWebsite: 'https://www.cityclerk.org',
    importance: 'medium',
    colorCode: '#F59E0B'
  }
];
