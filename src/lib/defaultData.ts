//  contains default data for the fitness tracker app such as default exercises and workouts

import type { Workout } from "./types"; // assuming your Exercise type is defined in types.ts
import { exercises } from "./exercises"; // assuming you have a separate file for exercises

export const muscleGroups = [
  // Core & trunk
  "Core",
  "Abs",
  "Lower Abs",
  "Obliques",
  "Hip Flexors",

  // Upper body – push
  "Chest",
  "Shoulders",
  "Triceps",

  // Upper body – pull
  "Back",
  "Lats",
  "Biceps",

  // Lower body
  "Quadriceps",
  "Glutes",
  "Hamstrings",
  "Calves",
  "Adductors",

  // Grip & support
  "Forearms",
  "Grip",
];

// Default workouts combining the above exercises
export const workoutPrograms: Workout[] = [
  {
    id: "wb_fullbody_01",
    name: "Full Body Blast",
    date: "",
    level: 1, // Beginner
    estimatedTime: 30,
    exercises: [
      exercises.find((e) => e.name === "Push-up")!,
      exercises.find((e) => e.name === "Squat")!,
      exercises.find((e) => e.name === "Pull-up")!,
      exercises.find((e) => e.name === "Plank")!,
    ],
    description:
      "A beginner-friendly full body routine to build foundational strength.",
  },
  {
    id: "wb_core_01",
    name: "Core Focus",
    date: "",
    level: 1, // Beginner
    estimatedTime: 15,
    exercises: [
      exercises.find((e) => e.name === "Plank")!,
      exercises.find((e) => e.name === "Dead Hang")!,
      exercises.find((e) => e.name === "Push-up")!,
      exercises.find((e) => e.name === "Squat")!,
    ],
    description:
      "Focuses on core stability and endurance to improve posture and balance.",
  },
  {
    id: "wb_upper_01",
    name: "Upper Body Strength",
    date: "",
    level: 2, // Intermediate
    estimatedTime: 25,
    exercises: [
      exercises.find((e) => e.name === "Push-up")!,
      exercises.find((e) => e.name === "Pull-up")!,
      exercises.find((e) => e.name === "Dead Hang")!,
      exercises.find((e) => e.name === "Plank")!,
    ],
    description:
      "Builds upper body strength and grip endurance for intermediate trainees.",
  },
  {
    id: "wb_lower_01",
    name: "Leg & Core Power",
    date: "",
    level: 2, // Intermediate
    estimatedTime: 20,
    exercises: [
      exercises.find((e) => e.name === "Squat")!,
      exercises.find((e) => e.name === "Plank")!,
      exercises.find((e) => e.name === "Dead Hang")!,
      exercises.find((e) => e.name === "Push-up")!,
    ],
    description:
      "Targets lower body and core strength to increase stability and power.",
  },
];
