type ExerciseLevel = "beginner" | "intermediate" | "advanced";

export type Exercise = {
  name: string;
  level: ExerciseLevel;
  measurement: "reps" | "seconds";
  targetMuscles: string[];
};

export type Workout = {
  name: string;
  level: number;
  estimatedTime: number;
  exercises: Exercise[];
};
