import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number; // 0 to 100
  max?: number;
  className?: string;
  indicatorClassName?: string;
  showValue?: boolean;
}

export const ProgressBar = ({ 
  value, 
  max = 100, 
  className, 
  indicatorClassName,
  showValue = false 
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn("h-full bg-primary", indicatorClassName)}
        />
      </div>
      {showValue && (
        <span className="mt-1 text-xs text-text-muted">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};
