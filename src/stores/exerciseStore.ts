import { create } from "zustand";

import type { ExerciseLog } from "../lib/types";

interface ExerciseStoreType {
  exerciseLogs: ExerciseLog[];
  currentStreak: number;
  longhestStreak: number;
  updateCurrentStreak: (streak: number) => void;
  updateLongestStreak: (streak: number) => void;
}

const useExerciseStore = create<ExerciseStoreType>((set) => ({
  exerciseLogs: [],
  currentStreak: 0,
  longhestStreak: 0,
  updateCurrentStreak: (streak: number) => set({ currentStreak: streak }),
  updateLongestStreak: (streak: number) =>
    set({
      longhestStreak: streak,
    }),
}));

export default useExerciseStore;
