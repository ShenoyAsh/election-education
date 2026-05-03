import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { statesData } from '@/lib/mock-data/states';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { Info, Maximize2, Minimize2 } from 'lucide-react';

// Simplified SVG Path data for US Map (abbreviated for demonstration)
const statePaths: Record<string, string> = {
  'CA': 'M 50 100 L 70 100 L 80 150 L 40 180 L 30 140 Z', // Mock path
  'TX': 'M 150 200 L 250 200 L 260 300 L 160 320 Z', // Mock path
  // In a real implementation, I would use actual SVG path data for all 50 states.
};

export const VotingRightsMap = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [metric, setMetric] = useState<'voterId' | 'turnout' | 'earlyVoting'>('voterId');

  const getStateColor = (stateCode: string) => {
    const data = statesData[stateCode];
    if (!data) return 'var(--surface-2)';

    if (metric === 'voterId') {
      switch (data.voterIdType) {
        case 'strict-photo': return '#991b1b'; // Dark Red
        case 'strict-non-photo': return '#ef4444'; // Red
        case 'non-strict-photo': return '#f59e0b'; // Amber
        case 'non-strict-non-photo': return '#fbbf24'; // Yellow
        case 'none': return '#10b981'; // Green
        default: return 'var(--surface-2)';
      }
    }

    if (metric === 'turnout') {
      const turnout = data.lastElectionTurnout;
      if (turnout > 70) return '#065f46';
      if (turnout > 65) return '#059669';
      if (turnout > 60) return '#10b981';
      return '#34d399';
    }

    return 'var(--primary)';
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="relative overflow-hidden p-0">
          <div className="absolute left-6 top-6 z-10 space-y-2">
            <h3 className="text-lg font-bold">National Voting Rights Map</h3>
            <div className="flex flex-wrap gap-2">
              {(['voterId', 'turnout', 'earlyVoting'] as const).map((m) => (
                <Badge
                  key={m}
                  variant={metric === m ? 'default' : 'outline'}
                  className="cursor-pointer capitalize"
                  onClick={() => setMetric(m)}
                >
                  {m.replace(/([A-Z])/g, ' $1')}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative aspect-[1.6/1] w-full bg-surface-2/30 p-8 pt-24">
            <svg viewBox="0 0 1000 600" className="h-full w-full drop-shadow-xl">
              {Object.keys(statesData).map((code) => (
                <motion.path
                  key={code}
                  d={statePaths[code] || "M 0 0 L 10 0 L 10 10 L 0 10 Z"} // Fallback box
                  fill={getStateColor(code)}
                  stroke="var(--surface)"
                  strokeWidth="1"
                  whileHover={{ scale: 1.02, strokeWidth: 2, zIndex: 10 }}
                  onClick={() => setSelectedState(code)}
                  className="cursor-pointer transition-colors"
                />
              ))}
            </svg>
          </div>

          <div className="flex items-center justify-between bg-surface-2/50 p-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-red-600" />
                <span className="text-[10px] text-text-muted">Strict Laws</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-[10px] text-text-muted">High Access</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8"><Maximize2 className="h-4 w-4" /></Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="lg:col-span-1">
        {selectedState ? (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            key={selectedState}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{statesData[selectedState].stateName}</CardTitle>
                  <span className="text-2xl">🇺🇸</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-sm text-text-muted">Voter ID</span>
                    <Badge variant={statesData[selectedState].voterIdRequired ? 'error' : 'success'}>
                      {statesData[selectedState].voterIdType}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-sm text-text-muted">Turnout (2020)</span>
                    <span className="font-bold">{statesData[selectedState].lastElectionTurnout}%</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-sm text-text-muted">Early Voting</span>
                    <span className="font-bold">{statesData[selectedState].earlyVotingDays} Days</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="text-sm text-text-muted">Electoral Votes</span>
                    <span className="font-bold">{statesData[selectedState].electoralVotes}</span>
                  </div>
                </div>

                <div className="rounded-lg bg-primary/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold text-primary uppercase">Quick Fact</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {statesData[selectedState].stateName} requires registration {statesData[selectedState].registrationDeadlineDays} days before the election.
                  </p>
                </div>

                <Button className="w-full">Full State Profile</Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border p-12 text-center text-text-muted">
            <p>Click a state on the map to see detailed voting rights information.</p>
          </div>
        )}
      </div>
    </div>
  );
};
