import { create } from "zustand";
interface PointsStore {
  totalPoints: number;
  setTotalPoints: (points: number) => void;
  incrementPoints: (points: number) => void;
}
const usePointsStore = create<PointsStore>((set) => ({
  totalPoints: 0,
  setTotalPoints: (points: number) => set({ totalPoints: points }),
  incrementPoints: (points: number) =>
    set((state) => ({ totalPoints: state.totalPoints + points })),
}));
export default usePointsStore;
