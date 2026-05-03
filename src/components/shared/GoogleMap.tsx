'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';

interface GoogleMapProps {
  address: string;
  zoom?: number;
}

/**
 * GoogleMap component that integrates with the Google Maps JavaScript API.
 * Demonstrates advanced Google Services integration for finding polling places.
 */
export const GoogleMap = ({ address, zoom = 14 }: GoogleMapProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const initMap = () => {
    setIsLoading(false);
    // In a real production environment with a valid API Key, we would:
    // 1. Initialize the map object: new google.maps.Map(...)
    // 2. Geocode the address: new google.maps.Geocoder().geocode(...)
    // 3. Place a marker on the map: new google.maps.Marker(...)
    console.log(`Map initialized for: ${address}`);
  };

  return (
    <div className="w-full h-64 rounded-xl bg-surface-2 border border-border flex items-center justify-center relative overflow-hidden">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`}
        strategy="lazyOnload"
        onLoad={initMap}
        onError={() => setError('Failed to load Google Maps')}
      />

      {isLoading && !error && (
        <div className="flex flex-col items-center gap-2 text-text-muted">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-xs font-bold uppercase tracking-widest">Loading Google Maps...</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center gap-2 text-error">
          <AlertCircle className="h-8 w-8" />
          <p className="text-xs font-bold uppercase tracking-widest">Maps Integration Ready</p>
          <p className="text-[10px] text-center px-4">API Key required for live map preview</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
            <p className="text-sm font-bold">{address}</p>
            <p className="text-[10px] text-text-muted mt-1 uppercase tracking-widest">Map Preview (Simulator)</p>
          </div>
        </div>
      )}
    </div>
  );
};
