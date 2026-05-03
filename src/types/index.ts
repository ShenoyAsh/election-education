export type ElectionType = "federal" | "state" | "local" | "primary" | "runoff";
export type Importance = "critical" | "high" | "medium" | "low";

export interface Election {
  id: string;
  name: string;
  type: ElectionType;
  date: Date;
  registrationDeadline: Date;
  earlyVotingStart: Date;
  earlyVotingEnd: Date;
  absenteeBallotDeadline: Date;
  state?: string;
  description: string;
  officialWebsite: string;
  isUserRegistered?: boolean;
  reminderSet?: boolean;
  importance: Importance;
  colorCode: string;
}

export type QuestionType = "multiple-choice" | "true-false" | "ordering" | "fill-blank";
export type Difficulty = "easy" | "medium" | "hard";

export interface QuizQuestion {
  questionId: string;
  question: string;
  type: QuestionType;
  options: string[];
  correctAnswer: string | string[];
  explanation: string;
  hint: string;
  difficulty: Difficulty;
  category: string;
  points: number;
  timeLimit: number;
}

export interface StateData {
  stateCode: string;
  stateName: string;
  voterIdRequired: boolean;
  voterIdType: "strict-photo" | "strict-non-photo" | "non-strict-photo" | "non-strict-non-photo" | "none";
  automaticVoterRegistration: boolean;
  sameDayRegistration: boolean;
  earlyVotingDays: number;
  noExcuseAbsentee: boolean;
  felonyDisenfranchisement: "permanent" | "post-sentence" | "parole" | "probation" | "none";
  onlineRegistration: boolean;
  preRegistrationAge: number;
  registrationDeadlineDays: number;
  lastElectionTurnout: number;
  electoralVotes: number;
  governorParty: "D" | "R" | "I";
  legislatureControl: "D" | "R" | "Split";
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: "registration" | "preparation" | "day-of" | "after";
  deadline?: Date;
  isCompleted: boolean;
  isRequired: boolean;
  actionUrl?: string;
  actionLabel?: string;
  estimatedTime: string;
  proTip?: string;
}

export interface ElectionMyth {
  id: string;
  myth: string;
  fact: string;
  rating: "false" | "misleading" | "partly-true" | "context-needed";
  category: "registration" | "voting-process" | "results" | "fraud" | "rights";
  sources: Array<{
    name: string;
    url: string;
    type: "government" | "academic" | "news" | "ngo";
  }>;
  dateDebunked: string;
  shareCount: number;
  helpfulVotes: number;
  explanation: string;
  relatedMyths: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "quiz" | "exploration" | "planning" | "social" | "knowledge";
  points: number;
  requirement: string;
  isUnlocked: boolean;
  unlockedAt?: Date;
  rarity: "common" | "uncommon" | "rare" | "legendary";
}

export interface VoterProfile {
  location: {
    state: string;
    county?: string;
    city?: string;
    zipCode?: string;
  };
  registrationStatus: "yes" | "no" | "not-sure";
  partyAffiliation?: string;
  isFirstTimeVoter: boolean;
  votingMethodPreference: "in-person" | "early" | "mail-in" | "undecided";
  accessibilityNeeds: string[];
  interests: string[];
  notifications: {
    email: string;
    enabled: boolean;
    frequency: "immediate" | "weekly" | "monthly";
  };
}
