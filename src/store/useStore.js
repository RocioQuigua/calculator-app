import { create } from 'zustand';

export const useStore = create((set) => ({
  theme: 'default',
  setTheme: (newTheme) => set({theme: newTheme})
}));