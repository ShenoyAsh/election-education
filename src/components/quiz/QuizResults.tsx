import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/shared/Button';
import { Card, CardTitle, CardContent } from '@/components/shared/Card';
import { Trophy, RefreshCw, Share2, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onReset: () => void;
}

export const QuizResults = ({ score, totalQuestions, onReset }: QuizResultsProps) => {
  const percentage = (score / (totalQuestions * 100)) * 100; // Assuming 100 pts per question

  useEffect(() => {
    if (percentage >= 80) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1B4FD8', '#DC2626', '#FFFFFF']
      });
    }
  }, [percentage]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto max-w-md text-center"
    >
      <Card className="p-8">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-accent/10 p-4">
            <Trophy className="h-16 w-16 text-accent" />
          </div>
        </div>
        
        <CardTitle className="mb-2 text-3xl font-bold">Quiz Complete!</CardTitle>
        <p className="mb-6 text-text-secondary">
          Great job! You've completed the Civic Knowledge Quiz.
        </p>

        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-surface-2 p-4">
            <p className="text-sm text-text-muted">Final Score</p>
            <p className="text-2xl font-bold text-primary">{score}</p>
          </div>
          <div className="rounded-lg bg-surface-2 p-4">
            <p className="text-sm text-text-muted">Accuracy</p>
            <p className="text-2xl font-bold text-success">{Math.round(percentage)}%</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button onClick={onReset} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
          <Button variant="outline" className="w-full">
            <Share2 className="mr-2 h-4 w-4" /> Share Results
          </Button>
        </div>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-text-secondary"
      >
        <Award className="h-4 w-4 text-accent" />
        Earned 500 Civic Points
      </motion.div>
    </motion.div>
  );
};
