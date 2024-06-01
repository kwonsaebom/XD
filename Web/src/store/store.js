import { create } from 'zustand';

export const useStore = create((set) => ({
  userId: '',
  setUserId: (userId) => set({ userId: userId }),
  currentProgress: 0,
  setCurrentProgress: (cnt) => set({ currentProgress: cnt }),
}));
