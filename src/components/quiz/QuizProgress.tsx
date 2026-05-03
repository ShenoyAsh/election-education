import React from 'react';
import { motion } from 'framer-motion';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { CheckCircle, Circle } from 'lucide-react';

interface QuizProgressProps {
  current: number;
  total: number;
}

export const QuizProgress = ({ current, total }: QuizProgressProps) => {
  return (
    <div className="mb-8 w-full space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-text-secondary">
          Question {current + 1} of {total}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                scale: i === current ? 1.2 : 1,
                backgroundColor: i < current ? 'var(--primary)' : (i === current ? 'var(--accent)' : 'var(--border)')
              }}
              className="h-2 w-2 rounded-full"
            />
          ))}
        </div>
      </div>
      <ProgressBar value={((current + 1) / total) * 100} />
    </div>
  );
};
