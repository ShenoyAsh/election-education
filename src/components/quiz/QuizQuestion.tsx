import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizQuestion as IQuizQuestion } from '@/types';
import { Button } from '@/components/shared/Button';
import { Card } from '@/components/shared/Card';

interface QuizQuestionProps {
  question: IQuizQuestion;
  onAnswer: (answer: string) => void;
  disabled?: boolean;
}

export const QuizQuestion = ({ question, onAnswer, disabled }: QuizQuestionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.questionId}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Card className="mb-6 overflow-hidden">
          <div className="mb-6">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-primary">
              {question.category} • {question.difficulty}
            </span>
            <h2 className="text-2xl font-bold leading-tight text-text-primary">
              {question.question}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="h-auto w-full justify-start p-4 text-left font-medium hover:border-primary hover:bg-primary/5"
                  onClick={() => onAnswer(option)}
                  disabled={disabled}
                >
                  <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-sm font-bold text-text-secondary">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </Button>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};
