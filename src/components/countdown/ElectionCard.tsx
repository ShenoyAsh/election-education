import React from 'react';
import { Election } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { CountdownTimer } from './CountdownTimer';
import { Calendar, MapPin, Globe, Bell } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/shared/Button';

interface ElectionCardProps {
  election: Election;
}

export const ElectionCard = ({ election }: ElectionCardProps) => {
  return (
    <Card hoverable className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <Badge variant={election.importance === 'critical' ? 'error' : 'default'} className="mb-2">
            {election.type.toUpperCase()}
          </Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="text-xl line-clamp-1">{election.name}</CardTitle>
        <div className="flex items-center text-sm text-text-muted">
          <Calendar className="mr-1 h-3 w-3" />
          {format(election.date, 'MMMM do, yyyy')}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-6">
        <CountdownTimer targetDate={election.date} label="Countdown to Election Day" />
        
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-lg border border-border p-2">
            <p className="text-text-muted">Registration Deadline</p>
            <p className="font-bold">{format(election.registrationDeadline, 'MMM d')}</p>
          </div>
          <div className="rounded-lg border border-border p-2">
            <p className="text-text-muted">Early Voting Starts</p>
            <p className="font-bold">{format(election.earlyVotingStart, 'MMM d')}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 text-xs" onClick={() => window.open(election.officialWebsite, '_blank')}>
            <Globe className="mr-1 h-3 w-3" /> Official Site
          </Button>
          <Button variant="outline" className="flex-1 text-xs">
            <MapPin className="mr-1 h-3 w-3" /> Polling Places
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
