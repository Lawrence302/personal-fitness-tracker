//  contains default data for the fitness tracker app such as default exercises and workouts

import type { Exercise } from "./types"; // assuming your Exercise type is defined in types.ts

export const exercises: Exercise[] = [
  {
    id: "pushup",
    name: "Push-up",
    level: "beginner",
    measurement: "reps",
    type: "strength",
    description:
      "Keep your core tight, body in a straight line, and elbows at about a 45-degree angle as you lower and push up.",
    targetMuscleGroups: ["Chest", "Shoulders", "Triceps", "Core"],

    unitPoint: 1,
    dateCreated: new Date().toISOString(),
  },
  {
    id: "pullup",
    name: "Pull-up",
    level: "intermediate",
    measurement: "reps",
    type: "strength",
    description:
      "Start from a dead hang and pull until your chin goes over the bar, using a full range of motion.",
    targetMuscleGroups: ["Back", "Biceps", "Shoulders"],

    unitPoint: 2,
    dateCreated: new Date().toISOString(),
  },
  {
    id: "squat",
    name: "Squat",
    level: "beginner",
    measurement: "reps",
    type: "strength",
    description:
      "Keep your chest up and back neutral as you lower your hips until your thighs are parallel to the ground.",
    targetMuscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core"],

    unitPoint: 1,
    dateCreated: new Date().toISOString(),
  },
  {
    id: "deadhang",
    name: "Dead Hang",
    level: "beginner",
    measurement: "seconds",
    type: "strength",
    description:
      "Hang from the bar with straight arms, relaxed shoulders, and controlled breathing.",
    targetMuscleGroups: ["Forearms", "Grip", "Shoulders"],

    unitPoint: 1,
    dateCreated: new Date().toISOString(),
  },
  {
    id: "plank",
    name: "Plank",
    level: "beginner",
    measurement: "seconds",
    type: "strength",
    description:
      "Maintain a straight line from head to heels while keeping your core tight and hips level.",
    targetMuscleGroups: ["Core", "Shoulders", "Glutes"],

    unitPoint: 1,
    dateCreated: new Date().toISOString(),
  },
];
