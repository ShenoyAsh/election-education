'use client';

import React from 'react';
import { AccessibilityCenter } from '@/components/accessibility/AccessibilityCenter';

export default function AccessibilityPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-black">Accessibility & Inclusivity</h1>
        <p className="text-text-secondary max-w-3xl">
          Empowering every citizen to vote. Find specific guides for your needs and customize your platform experience.
        </p>
      </div>
      <AccessibilityCenter />
    </div>
  );
}
