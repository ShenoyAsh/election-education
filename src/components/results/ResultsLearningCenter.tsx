import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { Clock, CheckCircle2, ChevronRight, Scale, Info, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/shared/Badge';

const steps = [
  { id: 'counting', title: 'Vote Counting', icon: Clock, desc: 'How ballots are processed on election night and beyond.' },
  { id: 'certification', title: 'Certification', icon: CheckCircle2, desc: 'The legal process of verifying election results.' },
  { id: 'recounts', title: 'Recounts', icon: RefreshCw, desc: 'When and how votes are counted a second time.' },
  { id: 'challenges', title: 'Legal Challenges', icon: Scale, desc: 'How disputes are resolved in the court system.' },
];

export const ResultsLearningCenter = () => {
  const [countingProgress, setCountingProgress] = useState(0);
  const [ballotType, setBallotType] = useState<'in-person' | 'mail-in' | 'provisional'>('in-person');

  const simulateCounting = () => {
    setCountingProgress(0);
    const interval = setInterval(() => {
      setCountingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge className="bg-accent/10 text-accent border-accent/20">LEARNING MODULE</Badge>
          <h2 className="text-4xl font-bold leading-tight">What happens after you cast your vote?</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Understanding the process from the close of polls to the certification of results helps ensure confidence in our democracy.
          </p>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors bg-surface">
                <div className="rounded-lg bg-primary/10 p-3 h-fit text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">{step.title}</h4>
                  <p className="text-sm text-text-muted">{step.desc}</p>
                </div>
                <ChevronRight className="ml-auto h-5 w-5 text-text-muted self-center" />
              </div>
            ))}
          </div>
        </div>

        <Card className="p-8 border-none bg-primary text-white overflow-hidden relative">
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Counting Simulator</h3>
              <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">Demo</div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-2">
                {(['in-person', 'mail-in', 'provisional'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setBallotType(type)}
                    className={cn(
                      "flex-1 px-3 py-2 rounded-lg text-xs font-bold transition-all",
                      ballotType === type ? "bg-white text-primary" : "bg-white/10 text-white hover:bg-white/20"
                    )}
                  >
                    {type.replace('-', ' ')}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Counting {ballotType} ballots...</span>
                  <span>{countingProgress}%</span>
                </div>
                <ProgressBar 
                  value={countingProgress} 
                  indicatorClassName="bg-accent" 
                  className="bg-white/20"
                />
              </div>

              <div className="rounded-lg bg-white/10 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase">Did you know?</span>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">
                  {ballotType === 'mail-in' 
                    ? "In many states, mail ballots are only processed after polls close, which is why results can change over several days."
                    : "In-person results are typically the first to be reported on election night."}
                </p>
              </div>

              <Button 
                onClick={simulateCounting} 
                className="w-full bg-accent text-white hover:bg-accent/90 border-none"
              >
                Start Counting Simulation
              </Button>
            </div>
          </div>
          
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/5" />
        </Card>
      </div>
    </div>
  );
};
