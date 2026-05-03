import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVoterProfileStore } from '@/lib/stores/voterProfileStore';
import { Button } from '@/components/shared/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { MapPin, UserCheck, Mail, Bell, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { cn } from '@/lib/utils';

const steps = [
  { id: 'location', title: 'Location', icon: MapPin },
  { id: 'status', title: 'Status', icon: UserCheck },
  { id: 'method', title: 'Method', icon: Mail },
  { id: 'notifications', title: 'Alerts', icon: Bell },
];

export const VoterJourneyPlanner = () => {
  const { profile, updateProfile } = useVoterProfileStore();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Where do you vote?</h3>
            <p className="text-text-secondary text-sm">We use this to show you state-specific deadlines and polling locations.</p>
            <div className="grid grid-cols-1 gap-4">
              <select 
                className="w-full rounded-md border border-border bg-surface p-3"
                value={profile.location.state}
                onChange={(e) => updateProfile({ location: { ...profile.location, state: e.target.value } })}
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
              </select>
              <input 
                placeholder="Zip Code (Optional)"
                className="w-full rounded-md border border-border bg-surface p-3"
                value={profile.location.zipCode || ''}
                onChange={(e) => updateProfile({ location: { ...profile.location, zipCode: e.target.value } })}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Are you registered to vote?</h3>
            <div className="grid grid-cols-1 gap-3">
              {(['yes', 'no', 'not-sure'] as const).map((status) => (
                <Button
                  key={status}
                  variant={profile.registrationStatus === status ? 'primary' : 'outline'}
                  className="justify-start h-14"
                  onClick={() => updateProfile({ registrationStatus: status })}
                >
                  {status === 'yes' && <CheckCircle2 className="mr-3 h-5 w-5" />}
                  <span className="capitalize">{status.replace('-', ' ')}</span>
                </Button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">How do you prefer to vote?</h3>
            <div className="grid grid-cols-1 gap-3">
              {(['in-person', 'early', 'mail-in', 'undecided'] as const).map((method) => (
                <Button
                  key={method}
                  variant={profile.votingMethodPreference === method ? 'primary' : 'outline'}
                  className="justify-start h-14"
                  onClick={() => updateProfile({ votingMethodPreference: method })}
                >
                  <span className="capitalize">{method.replace('-', ' ')}</span>
                </Button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Stay informed</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <p className="font-bold">Email Reminders</p>
                  <p className="text-xs text-text-muted">Get alerts for upcoming deadlines.</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={profile.notifications.enabled}
                  onChange={(e) => updateProfile({ notifications: { ...profile.notifications, enabled: e.target.checked } })}
                  className="h-5 w-5 rounded border-border text-primary"
                />
              </div>
              {profile.notifications.enabled && (
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-border bg-surface p-3"
                  value={profile.notifications.email}
                  onChange={(e) => updateProfile({ notifications: { ...profile.notifications, email: e.target.value } })}
                />
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="mx-auto max-w-2xl overflow-hidden">
      <div className="bg-primary/5 px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary">Voter Journey Planner</h2>
          <Badge variant="outline" className="bg-white">Step {currentStep + 1} of {steps.length}</Badge>
        </div>
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          {steps.map((step, i) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div 
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors",
                  i <= currentStep ? "bg-primary border-primary text-white" : "bg-white border-border text-text-muted"
                )}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <span className={cn(
                "mt-2 text-[10px] font-bold uppercase tracking-wider",
                i <= currentStep ? "text-primary" : "text-text-muted"
              )}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <CardContent className="p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[300px]"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          <Button 
            variant="outline" 
            onClick={prevStep} 
            disabled={currentStep === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button onClick={currentStep === steps.length - 1 ? () => {} : nextStep}>
            {currentStep === steps.length - 1 ? 'Generate My Plan' : 'Continue'} 
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
