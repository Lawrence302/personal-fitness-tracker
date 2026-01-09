type ExerciseLevel = "beginner" | "intermediate" | "advanced";

export type Exercise = {
  id: string;
  name: string; //  e.g., "Pull-up"
  level: ExerciseLevel;
  measurement: "reps" | "seconds";
  type: "strength" | "flexibility" | "mobility";
  description: string; // Optional description or tips
  targetMuscleGroups: string[]; // e.g., ["back", "biceps"]
  equipment?: string[]; // Optional, e.g., ["pull-up bar", "rings"], empty if bodyweight
  sets: number;
  reps: number; // Reps per set
  extraWeight: {
    // Optional for weighted calisthenics
    value: number;
    unit: "kg|lb";
  };
  dateCreated: string; // When exercise was added
  lastPerformed: string; // Optional last performed date
};

export type Workout = {
  id: string;
  date: string; // when workout was done
  name: string;
  level: number;
  estimatedTime: number;
  exercises: Exercise[];
};
