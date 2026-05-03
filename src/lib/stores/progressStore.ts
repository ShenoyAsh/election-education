import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Achievement } from '@/types';

interface ProgressState {
  points: number;
  unlockedAchievements: string[];
  completedQuests: string[];
  streak: number;
  lastActive: string | null;
  addPoints: (amount: number) => void;
  unlockAchievement: (id: string) => void;
  completeQuest: (id: string) => void;
  updateStreak: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      points: 0,
      unlockedAchievements: [],
      completedQuests: [],
      streak: 0,
      lastActive: null,
      addPoints: (amount) => set((state) => ({ points: state.points + amount })),
      unlockAchievement: (id) => {
        if (!get().unlockedAchievements.includes(id)) {
          set((state) => ({ unlockedAchievements: [...state.unlockedAchievements, id] }));
        }
      },
      completeQuest: (id) => {
        if (!get().completedQuests.includes(id)) {
          set((state) => ({ completedQuests: [...state.completedQuests, id] }));
        }
      },
      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0];
        const lastActive = get().lastActive;
        
        if (lastActive === today) return;
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (lastActive === yesterdayStr) {
          set((state) => ({ streak: state.streak + 1, lastActive: today }));
        } else {
          set({ streak: 1, lastActive: today });
        }
      },
    }),
    {
      name: 'learning-progress',
    }
  )
);
