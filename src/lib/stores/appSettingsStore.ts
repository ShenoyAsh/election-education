import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppSettingsState {
  theme: 'patriot' | 'classic' | 'modern';
  highContrast: boolean;
  fontSize: 'sm' | 'md' | 'lg';
  dyslexiaFont: boolean;
  reduceMotion: boolean;
  colorBlindMode: 'none' | 'deuteranopia' | 'protanopia';
  setTheme: (theme: 'patriot' | 'classic' | 'modern') => void;
  toggleHighContrast: () => void;
  setFontSize: (size: 'sm' | 'md' | 'lg') => void;
  toggleDyslexiaFont: () => void;
  toggleReduceMotion: () => void;
  setColorBlindMode: (mode: 'none' | 'deuteranopia' | 'protanopia') => void;
}

export const useAppSettingsStore = create<AppSettingsState>()(
  persist(
    (set) => ({
      theme: 'patriot',
      highContrast: false,
      fontSize: 'md',
      dyslexiaFont: false,
      reduceMotion: false,
      colorBlindMode: 'none',
      setTheme: (theme) => set({ theme }),
      toggleHighContrast: () => set((state) => ({ highContrast: !state.highContrast })),
      setFontSize: (fontSize) => set({ fontSize }),
      toggleDyslexiaFont: () => set((state) => ({ dyslexiaFont: !state.dyslexiaFont })),
      toggleReduceMotion: () => set((state) => ({ reduceMotion: !state.reduceMotion })),
      setColorBlindMode: (colorBlindMode) => set({ colorBlindMode }),
    }),
    {
      name: 'app-settings',
    }
  )
);
