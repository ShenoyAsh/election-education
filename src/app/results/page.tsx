'use client';

import React from 'react';
import { ResultsLearningCenter } from '@/components/results/ResultsLearningCenter';

export default function ResultsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-black">Understanding Election Results</h1>
        <p className="text-text-secondary max-w-3xl">
          Learn how votes are counted, certified, and how the legal framework ensures a fair and transparent outcome for every election.
        </p>
      </div>
      <ResultsLearningCenter />
    </div>
  );
}
