import { create } from 'zustand';

export const useStore = create((set) => ({
  userId: '',
  setUserId: (userId) => set({ userId: userId }),
}));
