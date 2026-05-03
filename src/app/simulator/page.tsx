'use client';

import React from 'react';
import { ElectoralSimulator } from '@/components/simulator/ElectoralSimulator';

export default function SimulatorPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-black">Electoral College Simulator</h1>
        <p className="text-text-secondary max-w-3xl">
          Test different election scenarios and see how a candidate can reach the 270 electoral votes needed to win the Presidency.
        </p>
      </div>
      <ElectoralSimulator />
    </div>
  );
}
