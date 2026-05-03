import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useQuiz } from '../useQuiz';
import { useQuizStore } from '@/lib/stores/quizStore';
import { quizQuestions } from '@/lib/mock-data/quiz-questions';
import { useProgressStore } from '@/lib/stores/progressStore';

// Mock the stores
vi.mock('@/lib/stores/quizStore', () => ({
  useQuizStore: vi.fn()
}));
vi.mock('@/lib/stores/progressStore', () => ({
  useProgressStore: vi.fn()
}));

describe('useQuiz hook', () => {
  let mockStore: any;
  let mockProgressStore: any;

  beforeEach(() => {
    mockStore = {
      currentQuestionIndex: 0,
      score: 0,
      streak: 0,
      answers: {},
      setAnswer: vi.fn(),
      nextQuestion: vi.fn(),
      finishQuiz: vi.fn(),
      isFinished: false,
      resetQuiz: vi.fn(),
      startQuiz: vi.fn(),
    };
    (useQuizStore as any).mockReturnValue(mockStore);

    mockProgressStore = {
        addPoints: vi.fn(),
        unlockAchievement: vi.fn(),
    };
    (useProgressStore as any).mockReturnValue(mockProgressStore);
  });

  it('initializes correctly', () => {
    const { result } = renderHook(() => useQuiz());
    expect(result.current.currentQuestionIndex).toBe(0);
    expect(result.current.isFinished).toBe(false);
    expect(result.current.score).toBe(0);
  });

  it('calls setAnswer when submitting an answer', () => {
    const { result } = renderHook(() => useQuiz());
    act(() => {
      result.current.submitAnswer('Test');
    });
    expect(mockStore.setAnswer).toHaveBeenCalled();
  });

  it('calls finishQuiz when last question is answered', () => {
    // Simulate being on the last question before rendering
    mockStore.currentQuestionIndex = quizQuestions.length - 1;
    
    const { result } = renderHook(() => useQuiz());
    
    act(() => {
        result.current.submitAnswer('Test');
    });
    
    expect(mockStore.finishQuiz).toHaveBeenCalled();
  });
});
