'use client';

import React from 'react';
import { QuizEngine } from '@/components/quiz/QuizEngine';

export default function QuizPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-black">Civic Knowledge Quiz</h1>
        <p className="text-text-secondary">
          Level up your democracy expertise. Complete all 30 questions across 3 difficulty levels.
        </p>
      </div>
      <QuizEngine />
    </div>
  );
}
