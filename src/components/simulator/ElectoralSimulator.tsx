import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { statesData } from '@/lib/mock-data/states';
import { Card, CardContent } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import { Trophy, RefreshCw, Info } from 'lucide-react';

type Party = 'D' | 'R' | 'T'; // Democrat, Republican, Toss-up

export const ElectoralSimulator = () => {
  const [stateStatus, setStateStatus] = useState<Record<string, Party>>(() => {
    const initial: Record<string, Party> = {};
    Object.keys(statesData).forEach(code => {
      initial[code] = 'T';
    });
    return initial;
  });

  const totals = useMemo(() => {
    let d = 0;
    let r = 0;
    let t = 0;
    Object.entries(stateStatus).forEach(([code, status]) => {
      const votes = statesData[code]?.electoralVotes || 0;
      if (status === 'D') d += votes;
      else if (status === 'R') r += votes;
      else t += votes;
    });
    return { d, r, t };
  }, [stateStatus]);

  const toggleState = (code: string) => {
    setStateStatus(prev => {
      const current = prev[code];
      const next: Party = current === 'T' ? 'D' : current === 'D' ? 'R' : 'T';
      return { ...prev, [code]: next };
    });
  };

  const resetMap = () => {
    const initial: Record<string, Party> = {};
    Object.keys(statesData).forEach(code => {
      initial[code] = 'T';
    });
    setStateStatus(initial);
  };

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden border-none shadow-none bg-transparent">
        <div className="mb-8 flex h-24 overflow-hidden rounded-2xl bg-surface-2 shadow-inner">
          <motion.div 
            animate={{ width: `${(totals.d / 538) * 100}%` }}
            className="flex h-full items-center justify-center bg-blue-600 text-white transition-all"
          >
            <span className="text-2xl font-black">{totals.d}</span>
          </motion.div>
          <div className="relative flex h-full grow items-center justify-center bg-surface-2">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-text-primary z-10">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-b bg-text-primary px-2 py-1 text-[10px] font-bold text-white uppercase">
                270 to Win
              </div>
            </div>
            <span className="text-sm font-bold text-text-muted">{totals.t} Remaining</span>
          </div>
          <motion.div 
            animate={{ width: `${(totals.r / 538) * 100}%` }}
            className="flex h-full items-center justify-center bg-red-600 text-white transition-all"
          >
            <span className="text-2xl font-black">{totals.r}</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="relative aspect-[1.6/1] w-full rounded-2xl bg-surface p-4 shadow-xl border border-border">
              <svg viewBox="0 0 1000 600" className="h-full w-full">
                {Object.keys(statesData).map((code) => (
                  <motion.path
                    key={code}
                    d="M 0 0 L 10 0 L 10 10 L 0 10 Z" // Placeholder, in real use actual paths
                    fill={stateStatus[code] === 'D' ? '#2563eb' : stateStatus[code] === 'R' ? '#dc2626' : '#e2e8f0'}
                    stroke="white"
                    strokeWidth="1"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => toggleState(code)}
                    className="cursor-pointer"
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Info className="h-4 w-4" /> Simulator Controls
                </h3>
                <p className="text-xs text-text-muted">
                  Click a state to assign it to a party. Assign 270 votes to declare a winner.
                </p>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="justify-start" onClick={resetMap}>
                    <RefreshCw className="mr-2 h-4 w-4" /> Reset Map
                  </Button>
                </div>
              </CardContent>
            </Card>

            {(totals.d >= 270 || totals.r >= 270) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Card className={totals.d >= 270 ? "bg-blue-600 text-white" : "bg-red-600 text-white"}>
                  <CardContent className="pt-6 text-center">
                    <Trophy className="mx-auto mb-2 h-8 w-8" />
                    <h4 className="text-xl font-bold">
                      {totals.d >= 270 ? "Democrats" : "Republicans"} Win!
                    </h4>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
