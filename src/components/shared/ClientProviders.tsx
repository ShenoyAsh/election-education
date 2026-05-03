'use client';

import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAppSettingsStore } from '@/lib/stores/appSettingsStore';
import { useProgressStore } from '@/lib/stores/progressStore';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

const queryClient = new QueryClient();

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const { theme, highContrast, fontSize, dyslexiaFont, reduceMotion } = useAppSettingsStore();
  const { updateStreak } = useProgressStore();

  useEffect(() => {
    // Apply accessibility settings to document root
    const root = document.documentElement;
    root.setAttribute('data-civic-theme', theme);
    root.setAttribute('data-theme', 'light'); // Default to light, could add dark toggle
    
    if (highContrast) root.classList.add('high-contrast');
    else root.classList.remove('high-contrast');
    
    root.style.fontSize = fontSize === 'sm' ? '14px' : fontSize === 'lg' ? '18px' : '16px';
    
    if (dyslexiaFont) root.classList.add('dyslexia-font');
    else root.classList.remove('dyslexia-font');
    
    if (reduceMotion) root.classList.add('reduce-motion');
    else root.classList.remove('reduce-motion');

    // Update daily streak on mount
    updateStreak();
  }, [theme, highContrast, fontSize, dyslexiaFont, reduceMotion, updateStreak]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen bg-background transition-colors duration-300">
        <Sidebar className="hidden lg:flex" />
        <div className="flex-1 flex flex-col min-w-0">
          <Navbar />
          <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
