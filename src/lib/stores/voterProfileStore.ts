import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { VoterProfile } from '@/types';

interface VoterProfileState {
  profile: VoterProfile;
  updateProfile: (updates: Partial<VoterProfile>) => void;
  resetProfile: () => void;
}

const initialProfile: VoterProfile = {
  location: {
    state: '',
  },
  registrationStatus: 'not-sure',
  isFirstTimeVoter: false,
  votingMethodPreference: 'undecided',
  accessibilityNeeds: [],
  interests: [],
  notifications: {
    email: '',
    enabled: false,
    frequency: 'weekly',
  },
};

export const useVoterProfileStore = create<VoterProfileState>()(
  persist(
    (set) => ({
      profile: initialProfile,
      updateProfile: (updates) =>
        set((state) => ({
          profile: { ...state.profile, ...updates },
        })),
      resetProfile: () => set({ profile: initialProfile }),
    }),
    {
      name: 'voter-profile',
    }
  )
);
