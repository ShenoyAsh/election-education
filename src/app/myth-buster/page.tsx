'use client';

import React from 'react';
import { MythBuster } from '@/components/myth-buster/MythBuster';

export default function MythBusterPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-black">Election Myth-Buster</h1>
        <p className="text-text-secondary max-w-3xl">
          Fact-checking common misconceptions about the electoral process. Our goal is to provide verified, non-partisan information to every voter.
        </p>
      </div>
      <MythBuster />
    </div>
  );
}
