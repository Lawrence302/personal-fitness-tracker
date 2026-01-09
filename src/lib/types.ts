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
  unitPoint: number; // points awarded per unit (rep or second)
  extraWeight?: {
    // Optional for weighted calisthenics
    value: number;
    unit: "kg" | "lb";
  };
  dateCreated: string; // When exercise was added
  lastPerformed?: string; // Optional last performed date
};

export type Workout = {
  id: string;
  date: string; // when workout was done
  name: string;
  level: number;
  estimatedTime: number;
  exercises: Exercise[];
};

export type ExerciseLog = {
  id: string;
  activitySessionId: string;
  exerciseId: string;
  exerciseName: string;
  workoutRoutineId?: string; // in case if was part of a workout session
  setsCompleted: number;
  totalRepsOrDuration: number; // reps or duration for this set
  setDetails?: {
    setNumber: number;
    repsOrDuration: number;
    extraWeightUsed?: {
      value: number;
      unit: "kg" | "lb";
    };
  }[]; // detailed breakdown per set
  pointsEarned: number;
  date: string; // when log was created
  time: string; // time of the log
};

export type ActivitySession = {
  id: string; // generated
  startTime: string;
  endTime: string;
  exerciseLogIds: string[];
  totalPoints: number;
};
