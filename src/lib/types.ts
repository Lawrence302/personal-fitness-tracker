export type ExerciseLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "expert"
  | "elite";
export type MovementPatternType =
  | "push"
  | "pull"
  | "legs"
  | "core"
  | "isometric"
  | "explosive"
  | "full-body";

export type UserRank =
  | "NEWBIE"
  | "BEGINNER"
  | "INTERMEDIATE"
  | "ADVANCED"
  | "EXPERT"
  | "ELITE";

export type bodyRegion = "core" | "upper-body" | "lower-body" | "full-body";

export type TierInfo = {
  userRank: UserRank;
  pointsToNextTier: number;
  nextTier: UserRank | null;
  progressToNextTier: number; // percentage
};

export type Exercise = {
  id: string;
  thumbnailUrl?: string; // Optional thumbnail image URL
  name: string; //  e.g., "Pull-up"
  level: ExerciseLevel;
  measurement: "reps" | "seconds";
  type: "strength" | "flexibility" | "mobility" | "conditioning" | "cardio";
  movementPattern: MovementPatternType;
  tags: string[]; // e.g., ["bodyweight", "upper-body", "vertical-pull"]
  mistakes: string[]; // common mistakes to avoid
  description: string; // Optional description or tips
  targetMuscleGroups: string[]; // e.g., ["back", "biceps"]
  bodyRegion: bodyRegion;
  equipment?: string[]; // Optional, e.g., ["pull-up bar", "rings"], empty if bodyweight
  unitPoint: number; // points awarded per unit (rep or second)
  extraWeight?: {
    // Optional for weighted calisthenics
    value: number;
    unit: "kg" | "lb";
  };
  progression: string[]; // e.g., ["negative pull-up", "assisted pull-up", "pull-up"]
  dateCreated: string; // When exercise was added
  lastPerformed?: string; // Optional last performed date
  media?: {
    type: "image" | "video";
    url: string;
  }[]; // Optional media links
};

export type Workout = {
  id: string;
  name: string; // Descriptive name for the workout (e.g., "Push & Pull Basics")
  bodyRegion: bodyRegion;
  date: string; // When the workout was completed
  level: number; // The workout level (e.g., Beginner = 1)
  estimatedTime: number; // Estimated time in minutes
  exercises: {
    exercise: Exercise; // Full exercise object
    reps: string; // The number of reps (or duration, depending on the exercise)
    sets: number; // Number of sets
    description: string; // Short description of the exercise
  }[]; // Array of exercises in this workout
  description: string; // A detailed description of the workout
};

export type ExerciseLog = {
  id: string;
  activitySessionId: string;
  exerciseId: string;
  exerciseName: string;
  measurement: string;
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
  globalDateTime: string; // exact date and time when log was created
  timeZone: string;
};

export type ActivitySession = {
  id: string; // generated
  startTime: string;
  endTime: string;
  exerciseLogIds: string[];
  totalPoints: number;
  active: 0 | 1; // 1 = active, 0 = inactive
};

export type UserInfo = {
  id: string;
  name?: string;
  age?: number;
  height?: number; // in cm
  weight?: number; // in kg
  goals?: string;
  // tierInfo: TierInfo;
  // totalPoints: number;
  // totalWorkouts: number;
  // totalExerciseLogs: number;
  joinedDate?: string | null;
};

export type StreakStats = {
  id: string;
  currentStreak: number; // in days
  longestStreak: number; // in days
  lastActiveDate: string; // date of last activity
};

export type TrainingWorkoutLog = {
  id: string;
  routineName: string;
  workoutId: string;
  started: 0 | 1;
  active: 0 | 1;
  completed: 0 | 1;
  startTime: string;
  endTime: string | undefined;
  estimatedTime: number; // in minutes
  exerciseLogs: string[]; // ids of exerciselogs
  completedExercises: string[]; // ids of completed exercises
  exercisesAtempted: string[]; // ids of individual exercises in the session
  progress: number;
  totalPoints: number;
};
