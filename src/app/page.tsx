'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/shared/Button';
import { Badge } from '@/components/shared/Badge';
import { ArrowRight, CheckCircle, Shield, Globe, Users } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
      <div className="space-y-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Badge variant="outline" className="px-4 py-1.5 text-primary border-primary/20 bg-primary/5 rounded-full mb-6">
            Non-partisan Election Education Platform
          </Badge>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black tracking-tight leading-[1.1]"
        >
          Democracy is <span className="text-primary">Participatory.</span> <br />
          We make it <span className="text-secondary">Accessible.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-text-secondary max-w-2xl mx-auto"
        >
          Empowering citizens with the knowledge, tools, and personalized paths to engage with our electoral process confidently.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Link href="/dashboard">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/resources">
            <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full">
              Explore Resources
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl pt-12"
      >
        {[
          { icon: Shield, label: 'Verified Info', color: 'text-primary' },
          { icon: CheckCircle, label: 'Voter Readiness', color: 'text-success' },
          { icon: Globe, label: 'All 50 States', color: 'text-accent' },
          { icon: Users, label: 'Inclusive Design', color: 'text-secondary' },
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className={cn("p-4 rounded-2xl bg-surface-2", feature.color)}>
              <feature.icon className="h-8 w-8" />
            </div>
            <span className="font-bold text-sm">{feature.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
