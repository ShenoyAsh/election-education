'use client';

import React from 'react';
import { VoterJourneyPlanner } from '@/components/planner/VoterJourneyPlanner';

export default function PlannerPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-black">Voter Journey Planner</h1>
        <p className="text-text-secondary">
          Create your personalized, step-by-step action plan for the upcoming election. We'll help you with registration, deadlines, and more.
        </p>
      </div>
      <VoterJourneyPlanner />
    </div>
  );
}
