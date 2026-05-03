import { useCallback, useEffect, useState } from 'react';
import { useQuizStore } from '@/lib/stores/quizStore';
import { quizQuestions } from '@/lib/mock-data/quiz-questions';
import { useProgressStore } from '@/lib/stores/progressStore';

export const useQuiz = () => {
  const {
    currentQuestionIndex,
    score,
    streak,
    answers,
    setAnswer,
    nextQuestion,
    finishQuiz,
    isFinished,
    resetQuiz,
    startQuiz
  } = useQuizStore();

  const { addPoints, unlockAchievement } = useProgressStore();
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const currentQuestion = quizQuestions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion && !isFinished) {
      setTimeLeft(currentQuestion.timeLimit);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentQuestionIndex, isFinished, currentQuestion]);

  const submitAnswer = useCallback((answer: string | string[]) => {
    if (isFinished || !currentQuestion) return;

    setAnswer(currentQuestion.questionId, answer);
    
    const isCorrect = Array.isArray(currentQuestion.correctAnswer)
      ? JSON.stringify(answer) === JSON.stringify(currentQuestion.correctAnswer)
      : answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      let points = currentQuestion.points;
      
      // Speed bonus
      if (timeLeft > currentQuestion.timeLimit / 2) {
        points += 50;
      }
      
      // Streak bonus
      if (streak >= 3) {
        points = Math.round(points * 1.5);
      }
      
      addPoints(points);
      
      if (currentQuestionIndex === 0) {
        unlockAchievement('a1');
      }
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      nextQuestion();
    } else {
      finishQuiz();
      if (score === quizQuestions.length * 100) {
        unlockAchievement('a2');
      }
    }
  }, [currentQuestion, currentQuestionIndex, isFinished, nextQuestion, finishQuiz, setAnswer, addPoints, streak, timeLeft, score, unlockAchievement]);

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: quizQuestions.length,
    score,
    streak,
    timeLeft,
    submitAnswer,
    isFinished,
    resetQuiz,
    startQuiz
  };
};
