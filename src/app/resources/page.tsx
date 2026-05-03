'use client';

import React from 'react';
import { ResourceHub } from '@/components/resources/ResourceHub';

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-black">Civic Resource Hub</h1>
        <p className="text-text-secondary max-w-3xl">
          A curated directory of official government portals, non-partisan research tools, and civic education materials to help you stay engaged.
        </p>
      </div>
      <ResourceHub />
    </div>
  );
}
