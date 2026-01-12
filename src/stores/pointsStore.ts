import { create } from "zustand";
interface PointsStore {
  totalPoints: number;
  currentStreak: number;
  longhestStreak: number;
  setTotalPoints: (points: number) => void;
  incrementPoints: (points: number) => void;
  updateCurrentStreak: (streak: number) => void;
  updatelonghestStreak: (streak: number) => void;
}
const usePointsStore = create<PointsStore>((set) => ({
  totalPoints: 0,
  currentStreak: 0,
  longhestStreak: 0,
  setTotalPoints: (points: number) => set({ totalPoints: points }),
  incrementPoints: (points: number) =>
    set((state) => ({ totalPoints: state.totalPoints + points })),
  updateCurrentStreak: (streak: number) => set({ currentStreak: streak }),
  updatelonghestStreak: (streak: number) =>
    set({
      longhestStreak: streak,
    }),
}));

export default usePointsStore;
