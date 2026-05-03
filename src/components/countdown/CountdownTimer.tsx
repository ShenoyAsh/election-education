import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '@/lib/hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
  label: string;
}

const FlipDigit = ({ value, label }: { value: number; label: string }) => {
  const formattedValue = value.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1">
        {formattedValue.split('').map((digit, i) => (
          <div key={i} className="relative h-16 w-10 overflow-hidden rounded-md bg-surface-2 shadow-inner lg:h-20 lg:w-14">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={digit}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary lg:text-4xl"
              >
                {digit}
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 top-1/2 h-px bg-border/50" />
          </div>
        ))}
      </div>
      <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-text-muted lg:text-xs">
        {label}
      </span>
    </div>
  );
};

export const CountdownTimer = ({ targetDate, label }: CountdownTimerProps) => {
  const { days, hours, minutes, seconds, isPast } = useCountdown(targetDate);

  if (isPast) {
    return (
      <div className="flex h-32 items-center justify-center rounded-xl bg-success/10 p-6 text-2xl font-bold text-success">
        ELECTION DAY IS TODAY! 🗳️
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <p className="text-sm font-semibold text-text-secondary">{label}</p>
      <div className="flex justify-between gap-2 lg:gap-4">
        <FlipDigit value={days} label="Days" />
        <FlipDigit value={hours} label="Hours" />
        <FlipDigit value={minutes} label="Minutes" />
        <FlipDigit value={seconds} label="Seconds" />
      </div>
    </div>
  );
};
