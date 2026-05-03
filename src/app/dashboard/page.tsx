'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { elections } from '@/lib/mock-data/elections';
import { ElectionCard } from '@/components/countdown/ElectionCard';
import { ProgressDashboard } from '@/components/progress/ProgressDashboard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shared/Card';
import { Button } from '@/components/shared/Button';
import { ArrowRight, Trophy, Zap, Map, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black tracking-tight"
        >
          Welcome back, <span className="text-primary">Voter!</span>
        </motion.h1>
        <p className="text-text-secondary max-w-2xl">
          Track your progress, explore upcoming elections, and enhance your civic knowledge with ElectIQ's interactive platform.
        </p>
      </div>

      <ProgressDashboard />

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Upcoming Elections</h2>
          <Button variant="ghost">View All Elections <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elections.map((election, index) => (
            <motion.div
              key={election.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ElectionCard election={election} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-primary to-primary-dark text-white p-8">
          <Zap className="mb-6 h-12 w-12 text-accent fill-current" />
          <h3 className="text-2xl font-bold mb-4 text-white">Daily Civic Quiz</h3>
          <p className="text-white/80 mb-8 leading-relaxed">
            Test your knowledge about the electoral process and earn bonus points to level up your profile.
          </p>
          <Link href="/quiz">
            <Button className="bg-white text-primary hover:bg-white/90">Start Quiz Now</Button>
          </Link>
        </Card>

        <Card className="bg-gradient-to-br from-secondary to-red-800 text-white p-8">
          <Map className="mb-6 h-12 w-12 text-white" />
          <h3 className="text-2xl font-bold mb-4 text-white">Voting Rights Map</h3>
          <p className="text-white/80 mb-8 leading-relaxed">
            Compare voting laws across all 50 states and understand the requirements for your jurisdiction.
          </p>
          <Link href="/map">
            <Button className="bg-white text-secondary hover:bg-white/90">Explore Map</Button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
