import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Map, 
  HelpCircle, 
  Calendar, 
  BookOpen, 
  Accessibility, 
  ClipboardCheck,
  Zap,
  Vote
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/quiz', label: 'Civic Quiz', icon: Zap },
  { href: '/map', label: 'Voting Rights Map', icon: Map },
  { href: '/planner', label: 'Voter Planner', icon: ClipboardCheck },
  { href: '/simulator', label: 'EC Simulator', icon: Vote },
  { href: '/resources', label: 'Resources', icon: BookOpen },
  { href: '/myth-buster', label: 'Myth Buster', icon: HelpCircle },
  { href: '/accessibility', label: 'Inclusivity', icon: Accessibility },
];

export const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-col w-72 bg-surface border-r border-border h-screen sticky top-0", className)}>
      <div className="p-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-black">E</span>
          </div>
          <span className="text-2xl font-black tracking-tight">ElectIQ</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-text-secondary hover:bg-surface-2 hover:text-text-primary"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 transition-transform group-hover:scale-110",
                isActive ? "text-primary" : "text-text-muted"
              )} />
              <span className="font-bold text-sm">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-8">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-lg shadow-primary/20">
          <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Upcoming</p>
          <p className="text-lg font-bold leading-tight">2024 Presidential Election</p>
          <p className="text-xs opacity-80 mt-2">Nov 5th, 2024</p>
        </div>
      </div>
    </div>
  );
};
