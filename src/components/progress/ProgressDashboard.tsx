import React from 'react';
import { motion } from 'framer-motion';
import { useProgressStore } from '@/lib/stores/progressStore';
import { achievements } from '@/lib/mock-data/achievements';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shared/Card';
import { ProgressBar } from '@/components/shared/ProgressBar';
import { Trophy, Star, Flame, Award, CheckCircle2, Lock } from 'lucide-react';
import { Badge } from '@/components/shared/Badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shared/Button';

export const ProgressDashboard = () => {
  const { points, unlockedAchievements, streak } = useProgressStore();

  const getLevel = (pts: number) => {
    if (pts < 100) return "Curious Citizen";
    if (pts < 300) return "Engaged Voter";
    if (pts < 600) return "Civic Enthusiast";
    if (pts < 1000) return "Democracy Defender";
    return "Electoral Expert";
  };

  const level = getLevel(points);
  const nextLevelPoints = points < 100 ? 100 : points < 300 ? 300 : points < 600 ? 600 : 1000;
  const progressToNext = (points / nextLevelPoints) * 100;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-primary text-white border-none shadow-xl">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-full bg-white/20 p-3">
                <Star className="h-6 w-6 text-yellow-300 fill-current" />
              </div>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">LEVEL {Math.floor(points / 200) + 1}</Badge>
            </div>
            <h3 className="text-3xl font-black mb-1">{points}</h3>
            <p className="text-sm opacity-80 font-bold uppercase tracking-widest mb-6">Civic XP Points</p>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span>{level}</span>
                <span>{nextLevelPoints} XP</span>
              </div>
              <ProgressBar value={progressToNext} className="bg-white/20" indicatorClassName="bg-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-orange-100 p-3 text-orange-500">
                <Flame className="h-8 w-8 fill-current" />
              </div>
              <div>
                <h3 className="text-3xl font-black">{streak}</h3>
                <p className="text-sm text-text-muted font-bold uppercase tracking-widest">Day Streak</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-1">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className={cn(
                    "h-8 w-full rounded-md flex items-center justify-center text-[10px] font-bold",
                    i === 3 ? "bg-orange-500 text-white" : "bg-surface-2 text-text-muted"
                  )}>
                    {day}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-accent/10 p-3 text-accent">
                <Trophy className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-3xl font-black">{unlockedAchievements.length}</h3>
                <p className="text-sm text-text-muted font-bold uppercase tracking-widest">Achievements</p>
              </div>
            </div>
            <div className="mt-6 flex -space-x-2">
              {unlockedAchievements.slice(0, 5).map((id) => (
                <div key={id} className="h-10 w-10 rounded-full border-2 border-white bg-accent flex items-center justify-center text-white shadow-sm">
                  <Award className="h-5 w-5" />
                </div>
              ))}
              {unlockedAchievements.length > 5 && (
                <div className="h-10 w-10 rounded-full border-2 border-white bg-surface-2 flex items-center justify-center text-xs font-bold text-text-muted">
                  +{unlockedAchievements.length - 5}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Badge Gallery</h3>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {achievements.map((achievement) => {
            const isUnlocked = unlockedAchievements.includes(achievement.id);
            return (
              <Card key={achievement.id} className={cn("p-4 text-center", !isUnlocked && "opacity-50 grayscale")}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 text-primary">
                  {isUnlocked ? <Award className="h-6 w-6" /> : <Lock className="h-6 w-6 text-text-muted" />}
                </div>
                <p className="text-xs font-bold line-clamp-1">{achievement.title}</p>
                <p className="text-[10px] text-text-muted mt-1">{achievement.points} XP</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
