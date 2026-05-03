'use client';

import React from 'react';
import { VotingRightsMap } from '@/components/map/VotingRightsMap';

export default function MapPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-black">Voting Rights Explorer</h1>
        <p className="text-text-secondary max-w-3xl">
          An interactive visualization of the current state of voting rights and election laws across the United States. Select a state to view detailed requirements.
        </p>
      </div>
      <VotingRightsMap />
    </div>
  );
}
