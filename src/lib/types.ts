type ExerciseLevel = "beginner" | "intermediate" | "advanced";

type Exercise = {
  name: string;
  level: ExerciseLevel;
  targetMuscles: string[];
};

export type Workout = {
  name: string;
  level: number;
  estimatedTime: number;
  exercises: Exercise[];
};
