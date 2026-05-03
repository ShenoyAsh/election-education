import React from 'react';
import { motion } from 'framer-motion';
import { useAppSettingsStore } from '@/lib/stores/appSettingsStore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import { Eye, Type, MousePointer2, Ear, UserCircle, Accessibility } from 'lucide-react';
import { Badge } from '@/components/shared/Badge';

export const AccessibilityCenter = () => {
  const { 
    highContrast, toggleHighContrast,
    fontSize, setFontSize,
    dyslexiaFont, toggleDyslexiaFont,
    reduceMotion, toggleReduceMotion,
    colorBlindMode, setColorBlindMode
  } = useAppSettingsStore();

  const settings = [
    {
      id: 'visual',
      title: 'Visual Assistance',
      icon: Eye,
      controls: [
        { label: 'High Contrast', active: highContrast, action: toggleHighContrast },
        { label: 'Dyslexia Friendly Font', active: dyslexiaFont, action: toggleDyslexiaFont },
      ]
    },
    {
      id: 'motion',
      title: 'Navigation & Motion',
      icon: MousePointer2,
      controls: [
        { label: 'Reduce Motion', active: reduceMotion, action: toggleReduceMotion },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Accessibility className="h-6 w-6" />
              </div>
              <div>
                <CardTitle>Accessibility Controls</CardTitle>
                <p className="text-sm text-text-muted">Customize the platform to meet your needs.</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {settings.map((section) => (
                <div key={section.id} className="space-y-4">
                  <h4 className="flex items-center gap-2 font-bold text-text-primary">
                    <section.icon className="h-4 w-4" /> {section.title}
                  </h4>
                  <div className="space-y-3">
                    {section.controls.map((control) => (
                      <div key={control.label} className="flex items-center justify-between p-3 rounded-lg bg-surface-2">
                        <span className="text-sm font-medium">{control.label}</span>
                        <Button 
                          variant={control.active ? 'primary' : 'outline'} 
                          size="sm"
                          onClick={control.action}
                        >
                          {control.active ? 'On' : 'Off'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-border pt-6">
              <h4 className="flex items-center gap-2 font-bold text-text-primary">
                <Type className="h-4 w-4" /> Text Size
              </h4>
              <div className="flex gap-4">
                {(['sm', 'md', 'lg'] as const).map((size) => (
                  <Button
                    key={size}
                    variant={fontSize === size ? 'primary' : 'outline'}
                    className="flex-1 capitalize"
                    onClick={() => setFontSize(size)}
                  >
                    {size === 'sm' ? 'Small' : size === 'md' ? 'Normal' : 'Large'}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-primary text-white">
            <CardContent className="pt-6">
              <UserCircle className="mb-4 h-10 w-10 opacity-80" />
              <h3 className="text-lg font-bold mb-2">Personal Needs Assessment</h3>
              <p className="text-sm opacity-90 mb-6">Take a quick quiz to get a personalized guide on your voting rights and accommodations.</p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">Start Assessment</Button>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-white">
            <CardContent className="pt-6">
              <Ear className="mb-4 h-10 w-10 opacity-80" />
              <h3 className="text-lg font-bold mb-2">Voting with Disabilities</h3>
              <p className="text-sm opacity-90 mb-6">Learn about your legal rights under the ADA and the Voting Rights Act of 1965.</p>
              <Button variant="secondary" className="bg-white text-secondary hover:bg-white/90">View Guide</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="lg:col-span-1 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-surface-2 border border-border">
              <p className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Assistance Hotlines</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">English</span>
                  <span className="font-bold text-primary">866-OUR-VOTE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Spanish</span>
                  <span className="font-bold text-primary">888-VE-Y-VOTA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">ASL</span>
                  <span className="font-bold text-primary">301-818-VOTE</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full">Download Rights Guide (PDF)</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
