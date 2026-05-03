'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/shared/Button';

export const PollingPlaceLocator = ({ stateName }: { stateName: string }) => {
  const openGoogleMaps = () => {
    const query = encodeURIComponent(`polling places in ${stateName}`);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 overflow-hidden relative">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-text-primary">Find Your Polling Place</h4>
        </div>
        
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          Ready to vote in {stateName}? Use Google Maps to find the nearest official polling locations and get directions.
        </p>

        <div className="flex flex-col gap-3">
          <Button onClick={openGoogleMaps} className="w-full">
            Open Google Maps <Navigation className="ml-2 h-4 w-4" />
          </Button>
          <a 
            href="https://vote.gov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] text-center font-bold uppercase tracking-widest text-text-muted hover:text-primary transition-colors flex items-center justify-center gap-1"
          >
            Powered by Vote.gov <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
      
      {/* Decorative Map Background */}
      <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
        <MapPin className="h-32 w-32 text-primary" />
      </div>
    </div>
  );
};
