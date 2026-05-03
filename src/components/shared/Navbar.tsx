import React from 'react';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useAppSettingsStore } from '@/lib/stores/appSettingsStore';
import { Bell, Settings, Search, User, Zap } from 'lucide-react';
import { Badge } from '@/components/shared/Badge';

export const Navbar = () => {
  const { points } = useProgressStore();
  const { theme, setTheme } = useAppSettingsStore();

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-between border-b border-border bg-background/80 px-8 backdrop-blur-md">
      <div className="relative w-96 hidden md:block">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
        <input 
          type="text" 
          placeholder="Search for election info..." 
          className="w-full rounded-full border border-border bg-surface-2/50 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 border border-accent/20">
          <Zap className="h-4 w-4 text-accent fill-current" />
          <span className="text-sm font-black text-accent">{points} XP</span>
        </div>

        <div className="flex gap-4">
          <button className="relative rounded-full bg-surface-2 p-2 text-text-secondary hover:text-text-primary transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-error border-2 border-background" />
          </button>
          
          <button 
            className="rounded-full bg-surface-2 p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setTheme(theme === 'patriot' ? 'modern' : 'patriot')}
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>

        <div className="h-8 w-px bg-border mx-2" />

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold leading-none">Guest Voter</p>
            <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider mt-1">Level 1</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-transparent group-hover:border-primary transition-all">
            <User className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
};
