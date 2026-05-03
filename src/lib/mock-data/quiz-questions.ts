import { QuizQuestion } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  {
    questionId: 'q1',
    question: 'What is the minimum age to vote in federal elections in the United States?',
    type: 'multiple-choice',
    options: ['16', '18', '21', '25'],
    correctAnswer: '18',
    explanation: 'The 26th Amendment, ratified in 1971, lowered the voting age from 21 to 18 for all federal and state elections.',
    hint: 'It was lowered during the Vietnam War.',
    difficulty: 'easy',
    category: 'Voting Basics',
    points: 100,
    timeLimit: 20,
  },
  {
    questionId: 'q2',
    question: 'True or False: All states require a photo ID to vote in person.',
    type: 'true-false',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Voter ID laws vary significantly by state. Some states require a photo ID, some accept non-photo ID, and others have no ID requirement at all.',
    hint: 'Think about states like California or New York.',
    difficulty: 'easy',
    category: 'Voting Basics',
    points: 100,
    timeLimit: 15,
  },
  {
    questionId: 'q3',
    question: 'Order the steps of the presidential election process from first to last.',
    type: 'ordering',
    options: [
      'Primaries and Caucuses',
      'National Conventions',
      'General Election',
      'Electoral College Vote',
      'Inauguration'
    ],
    correctAnswer: [
      'Primaries and Caucuses',
      'National Conventions',
      'General Election',
      'Electoral College Vote',
      'Inauguration'
    ],
    explanation: 'The process starts with primaries, leads to conventions, then the general election, followed by the Electoral College, and ends with the Inauguration on January 20th.',
    hint: 'It starts with choosing party nominees.',
    difficulty: 'medium',
    category: 'Electoral Process',
    points: 200,
    timeLimit: 45,
  },
  {
    questionId: 'q4',
    question: 'How many electoral votes are needed to win the Presidency?',
    type: 'fill-blank',
    options: [],
    correctAnswer: '270',
    explanation: 'There are 538 total electoral votes. A candidate needs a simple majority of 270 to win.',
    hint: 'It is more than half of 538.',
    difficulty: 'easy',
    category: 'Electoral Process',
    points: 150,
    timeLimit: 20,
  },
  {
    questionId: 'q5',
    question: 'Which amendment granted women the right to vote?',
    type: 'multiple-choice',
    options: ['15th', '19th', '21st', '26th'],
    correctAnswer: '19th',
    explanation: 'The 19th Amendment, ratified in 1920, prohibited states and the federal government from denying the right to vote on the basis of sex.',
    hint: 'It was ratified in 1920.',
    difficulty: 'medium',
    category: 'Advanced Civics',
    points: 200,
    timeLimit: 25,
  },
  // ... Add more questions to reach 30 in a real scenario
];

// Helper to get questions by category
export const getQuestionsByCategory = (category: string) => 
  quizQuestions.filter(q => q.category === category);
