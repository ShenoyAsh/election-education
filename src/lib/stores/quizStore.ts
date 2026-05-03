import { create } from 'zustand';
import { QuizQuestion } from '@/types';

interface QuizState {
  currentQuestionIndex: number;
  score: number;
  streak: number;
  answers: Record<string, string | string[]>;
  isFinished: boolean;
  startTime: number | null;
  setAnswer: (questionId: string, answer: string | string[]) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
  finishQuiz: () => void;
  startQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  currentQuestionIndex: 0,
  score: 0,
  streak: 0,
  answers: {},
  isFinished: false,
  startTime: null,
  setAnswer: (questionId, answer) => 
    set((state) => ({ 
      answers: { ...state.answers, [questionId]: answer } 
    })),
  nextQuestion: () => 
    set((state) => ({ 
      currentQuestionIndex: state.currentQuestionIndex + 1 
    })),
  resetQuiz: () => 
    set({ 
      currentQuestionIndex: 0, 
      score: 0, 
      streak: 0, 
      answers: {}, 
      isFinished: false,
      startTime: null
    }),
  finishQuiz: () => set({ isFinished: true }),
  startQuiz: () => set({ startTime: Date.now(), isFinished: false, currentQuestionIndex: 0 }),
}));
