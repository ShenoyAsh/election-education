import React from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '@/lib/hooks/useQuiz';
import { QuizQuestion } from './QuizQuestion';
import { QuizProgress } from './QuizProgress';
import { QuizResults } from './QuizResults';
import { Button } from '@/components/shared/Button';
import { Timer } from 'lucide-react';

export const QuizEngine = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    score,
    timeLeft,
    submitAnswer,
    isFinished,
    resetQuiz,
    startQuiz
  } = useQuiz();

  if (isFinished) {
    return <QuizResults score={score} totalQuestions={totalQuestions} onReset={resetQuiz} />;
  }

  if (!currentQuestion) {
    return (
      <div className="flex h-64 flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold">Ready to test your civic knowledge?</h2>
        <Button onClick={startQuiz} size="lg">Start Quiz</Button>
      </div>
    );
  }

  // Circular progress calculation
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / currentQuestion.timeLimit) * circumference;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <QuizProgress current={currentQuestionIndex} total={totalQuestions} />
        
        <div className="relative ml-6 flex h-16 w-16 items-center justify-center">
          <svg className="h-full w-full -rotate-90 transform">
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              className="text-border"
            />
            <motion.circle
              cx="32"
              cy="32"
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset: circumference - progress }}
              className={timeLeft < 5 ? "text-error" : "text-primary"}
            />
          </svg>
          <span className={`absolute text-sm font-bold ${timeLeft < 5 ? "animate-pulse text-error" : "text-text-primary"}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      <QuizQuestion
        question={currentQuestion}
        onAnswer={submitAnswer}
      />
      
      <div className="mt-8 flex justify-center text-sm text-text-muted">
        <Timer className="mr-2 h-4 w-4" />
        Bonus points for speed!
      </div>
    </div>
  );
};
