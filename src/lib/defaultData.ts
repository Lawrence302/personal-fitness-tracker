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
    id: "wb_upperbody_01",
    name: "Beginner Upper Body Strength",
    bodyRegion: "upper-body",
    date: "",
    level: 1, // Beginner
    estimatedTime: 25,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Incline Push-up")!,
        reps: "8-10",
        sets: 3,
        description:
          "An incline push-up to target the upper chest and shoulders, great for beginners.",
      },
      {
        exercise: exercises.find((e) => e.name === "Knee Push-ups")!,
        reps: "10-12",
        sets: 3,
        description:
          "A modified push-up for beginners to work on chest and triceps strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Scapular Push-ups")!,
        reps: "10-12",
        sets: 3,
        description:
          "A mobility-focused push-up variation to improve scapular control.",
      },
      {
        exercise: exercises.find((e) => e.name === "Back Support")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A simple isometric hold to build shoulder and core endurance while maintaining posture.",
      },
    ],
    description:
      "A beginner upper body routine designed to target the chest, shoulders, and triceps. This workout incorporates modified push-ups, a beginner-friendly version of dips, and isometric holds, all at a manageable intensity for new trainees.",
  },
  {
    id: "wb_upperbody_02",
    name: "Upper Body Basic Builder",
    bodyRegion: "upper-body",
    date: "",
    level: 1, // Beginner
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Scapular Pull-ups")!,
        reps: "5-8",
        sets: 3,
        description:
          "A beginner-friendly pull-up variation to help develop back strength and scapular control.",
      },
      {
        exercise: exercises.find((e) => e.name === "Dead Hang")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A static hold to improve grip strength and shoulder stability while hanging from a bar.",
      },
      {
        exercise: exercises.find((e) => e.name === "Incline Push-up")!,
        reps: "10-12",
        sets: 3,
        description:
          "A wall push-up to help you build chest, shoulder, and tricep strength safely and with lower intensity.",
      },
      {
        exercise: exercises.find((e) => e.name === "Inverted Rows")!,
        reps: "6-8",
        sets: 3,
        description:
          "A horizontal pulling movement to strengthen the back and biceps, great for beginners.",
      },
      {
        exercise: exercises.find((e) => e.name === "Front Support")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A static core and shoulder stability hold that helps develop endurance and support for upper body strength.",
      },
    ],
    description:
      "This beginner-level upper-body workout is focused on building pulling strength with scapular pull-ups, dead hangs, and bodyweight rows. It includes a modified push exercise (wall push-ups) and static holds like front support to enhance shoulder and core stability.",
  },

  {
    id: "wb_fullbody_01",
    name: "Full-Body Basic Builder",
    date: "",
    bodyRegion: "full-body",
    level: 1, // Beginner
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Incline Push-up")!,
        reps: "8-10",
        sets: 3,
        description:
          "A gentle incline push-up to build chest, triceps, and shoulder strength with less intensity.",
      },
      {
        exercise: exercises.find((e) => e.name === "Knee Push-ups")!,
        reps: "10-12",
        sets: 3,
        description:
          "A modified push-up for beginners to work on chest and triceps strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "BodyWeight Squat")!,
        reps: "12-15",
        sets: 3,
        description: "A fundamental squat to build leg strength and stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Wall Sit")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "An isometric hold to build endurance in the quadriceps and glutes.",
      },
      {
        exercise: exercises.find((e) => e.name === "Dead Bug")!,
        reps: "10-12",
        sets: 3,
        description:
          "A core exercise to improve coordination and stability in the abdominal region.",
      },
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A static hold to engage the core, improve stability, and build overall body strength.",
      },
    ],
    description:
      "This full-body beginner routine includes exercises for the chest, triceps, shoulders, legs, and core. With a mix of dynamic movements like incline push-ups and bodyweight squats, plus static holds such as wall sits and planks, it helps build foundational strength for the entire body.",
  },

  {
    id: "wb_lowerbody_01",
    name: "Lower Body Essentials",
    bodyRegion: "lower-body",
    date: "",
    level: 1, // Beginner
    estimatedTime: 25,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "BodyWeight Squat")!,
        reps: "12-15",
        sets: 3,
        description: "A foundational bodyweight squat to build leg strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Wall Sit")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "An isometric exercise that strengthens the quads and builds endurance.",
      },
      {
        exercise: exercises.find((e) => e.name === "Lateral Leg Raises")!,
        reps: "20-24 -  do 10-12  per leg",
        sets: 3,
        description:
          "A beginner-friendly exercise that targets the hip abductors, glutes, and outer thighs.",
      },
      {
        exercise: exercises.find((e) => e.name === "Calf Raises")!,
        reps: "15-20",
        sets: 3,
        description:
          "A simple but effective exercise to strengthen the calves.",
      },
    ],
    description:
      "A lower-body focused workout to build foundational strength with simple bodyweight exercises like squats, step-ups, and calf raises. These exercises target key leg muscles with low impact.",
  },

  {
    id: "wb_lowerbody_02",
    name: "Leg Strength Basics",
    bodyRegion: "lower-body",
    date: "",
    level: 1, // Beginner
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "BodyWeight Squat")!,
        reps: "12-15",
        sets: 3,
        description:
          "A basic squat to strengthen the quads, glutes, and hamstrings.",
      },
      {
        exercise: exercises.find((e) => e.name === "Lunges")!,
        reps: "16-20 - do 8-10 per leg",
        sets: 3,
        description:
          "A beginner-friendly leg exercise that targets quads, hamstrings, and glutes.",
      },
      {
        exercise: exercises.find((e) => e.name === "High Knees")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A cardio exercise that works the hip flexors, quads, and calves, while improving coordination and endurance.",
      },
      {
        exercise: exercises.find((e) => e.name === "Wall Sit")!,
        reps: "30-35 - sec",
        sets: 3,
        description: "An isometric hold to build endurance in the quads.",
      },
    ],
    description:
      "A beginner leg workout focusing on basic bodyweight exercises such as squats, lunges, and glute bridges. The wall sit adds a challenge for endurance and strength.",
  },

  {
    id: "wb_core_01",
    name: "Core Foundation",
    bodyRegion: "core",
    date: "",
    level: 1, // Beginner
    estimatedTime: 20,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "20-30 - sec",
        sets: 3,
        description: "A foundational core exercise to build stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Dead Bug")!,
        reps: "20-24 - do 10-12 per side",
        sets: 3,
        description:
          "A great beginner exercise to improve core strength and coordination.",
      },
      {
        exercise: exercises.find((e) => e.name === "Seated Knee Tucks")!,
        reps: "10-12",
        sets: 3,
        description:
          "A simple exercise that targets the lower abs and hip flexors.",
      },
      {
        exercise: exercises.find((e) => e.name === "Hollow Body Hold")!,
        reps: "10-15 - sec",
        sets: 3,
        description: "A low-impact hold to engage the entire core.",
      },
    ],
    description:
      "A gentle introduction to core exercises. This workout focuses on building a stable core with planks, seated knee tucks, and dead bugs.",
  },

  {
    id: "wb_core_02",
    name: "Core Strength Starter",
    bodyRegion: "core",
    date: "",
    level: 1, // Beginner
    estimatedTime: 25,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "20-30 - sec",
        sets: 3,
        description: "A basic core exercise to improve strength and endurance.",
      },
      {
        exercise: exercises.find((e) => e.name === "Side Plank")!,
        reps: "30-40 - do 15-20  sec per side",
        sets: 3,
        description:
          "A simple variation of the plank that targets the obliques.",
      },
      {
        exercise: exercises.find((e) => e.name === "Leg Raises")!,
        reps: "10-12",
        sets: 3,
        description:
          "A beginner-friendly exercise to strengthen the lower abs.",
      },
      {
        exercise: exercises.find((e) => e.name === "Reverse Crunches")!,
        reps: "10-12",
        sets: 3,
        description: "A simple core exercise that focuses on the lower abs.",
      },
    ],
    description:
      "A core workout designed for beginners that builds strength and stability. The exercises target both the upper and lower abdominal muscles while improving overall core endurance.",
  },

  // level 2 exercises for beginners
  {
    id: "wb_upperbody_03",
    name: "Upper Body Strength 1 (Pushing Focus)",
    bodyRegion: "upper-body",
    date: "",
    level: 2, // Beginner
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Push-up")!,
        reps: "10-12",
        sets: 3,
        description:
          "A foundational push-up to build chest, triceps, and shoulder strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Incline Push-up")!,
        reps: "12-15",
        sets: 3,
        description:
          "An incline push-up to target the upper chest and shoulders, great for beginners.",
      },
      {
        exercise: exercises.find((e) => e.name === "Knee Push-ups")!,
        reps: "12-15",
        sets: 3,
        description:
          "A modified push-up on the knees to work on form and build strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Front Support")!,
        reps: "20-30 - sec",
        sets: 3,
        description: "A static hold to develop shoulder and core stability.",
      },
    ],
    description:
      "A beginner-friendly upper-body workout that focuses on chest, shoulders, and triceps. Includes basic push-ups, incline push-ups, knee push-ups, and static holds for shoulder and core stability.",
  },
  {
    id: "wb_upperbody_04",
    name: "Upper Body Strength 2 (Pulling Focus)",
    bodyRegion: "upper-body",
    date: "",
    level: 2, // Beginner
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Inverted Rows")!,
        reps: "8-10",
        sets: 3,
        description:
          "A basic pulling exercise to build upper back and bicep strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Scapular Pull-ups")!,
        reps: "6-8",
        sets: 3,
        description:
          "A foundational movement for scapular strength, preparing for full pull-ups.",
      },
      {
        exercise: exercises.find((e) => e.name === "Dead Hang")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A static hold to build grip strength and shoulder stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Pull-up Hold")!,
        reps: "10-20 - sec",
        sets: 3,
        description:
          "An isometric hold that targets the upper back and strengthens your pull-up position.",
      },
    ],
    description:
      "A beginner-friendly upper-body workout focusing on building upper back strength, biceps, and grip endurance. Includes inverted rows, scapular pull-ups, dead hangs, and pull-up holds to prepare for more advanced pulling movements.",
  },

  // Lower Body Strength 1 (Level 2 Beginner)
  {
    id: "wb_lowerbody_03",
    name: "Lower Body Strength 1",
    bodyRegion: "lower-body",
    date: "",
    level: 2, // Beginner
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "BodyWeight Squat")!,
        reps: "12-15",
        sets: 3,
        description:
          "A foundational squat to strengthen quads, hamstrings, and glutes.",
      },
      {
        exercise: exercises.find((e) => e.name === "Lunges")!,
        reps: "16-20 - do 8-10 per leg",
        sets: 3,
        description:
          "A basic unilateral leg exercise targeting quads, glutes, and hamstrings.",
      },
      {
        exercise: exercises.find((e) => e.name === "Horse Stance")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "An isometric hold to build endurance in the legs and improve balance.",
      },
      {
        exercise: exercises.find((e) => e.name === "High Knees")!,
        reps: "30-35 - seconds",
        sets: 3,
        description:
          "A cardio exercise to improve lower body endurance, warm up the muscles, and boost heart rate.",
      },
    ],
    description:
      "A beginner-friendly lower-body workout to strengthen quads, hamstrings, and glutes. Includes squats, lunges, and isometric holds for building leg endurance and stability.",
  },

  // Lower Body Strength 2 (Level 2 Beginner)
  {
    id: "wb_lowerbody_04",
    name: "Lower Body Strength 2",
    bodyRegion: "lower-body",
    date: "",
    level: 2, // Beginner
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "BodyWeight Squat")!,
        reps: "12-15",
        sets: 3,
        description:
          "A basic bodyweight squat to strengthen the quads, glutes, and hamstrings.",
      },
      {
        exercise: exercises.find((e) => e.name === "High Knees")!,
        reps: "30-35 - sec",
        sets: 3,
        description:
          "A cardio exercise to improve lower body endurance and warm up the muscles.",
      },
      {
        exercise: exercises.find((e) => e.name === "Wall Sit")!,
        reps: "30-35 - sec",
        sets: 3,
        description:
          "An isometric exercise to build endurance in the quadriceps and glutes.",
      },
      {
        exercise: exercises.find((e) => e.name === "Lateral Leg Raises")!,
        reps: "24-30 - do 12-15 per leg",
        sets: 3,
        description:
          "A lateral movement to target the outer thighs and hip abductors.",
      },
    ],
    description:
      "A routine designed to target leg strength and endurance, including bodyweight squats, high knees, wall sits, and lateral leg raises to build stability and power in the lower body.",
  },

  // Core Strength 1 (Level 2 Beginner)
  {
    id: "wb_core_03",
    name: "Core Strength 1",
    bodyRegion: "core",
    date: "",
    level: 2, // Beginner
    estimatedTime: 25,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A static hold to build strength and stability in the entire core.",
      },
      {
        exercise: exercises.find((e) => e.name === "Leg Raises")!,
        reps: "10-12",
        sets: 3,
        description:
          "An exercise to strengthen the lower abs and improve core stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Bicycle Crunches")!,
        reps: "24-30 - do 12-15  per side",
        sets: 3,
        description:
          "A dynamic movement targeting the abs and obliques to build rotational strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Side Plank")!,
        reps: "40-60 - do 20-30 sec per side",
        sets: 3,
        description:
          "A static hold targeting the obliques and improving core stability.",
      },
    ],
    description:
      "A beginner core workout focused on building strength and stability in the abdominal and lower back muscles. Includes static holds, dynamic crunches, and leg raises for overall core development.",
  },

  // Core Strength 2 (Level 2 Beginner)
  {
    id: "wb_core_04",
    name: "Core Strength 2",
    bodyRegion: "core",
    date: "",
    level: 2, // Beginner
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Leg Raises")!,
        reps: "10-12",
        sets: 3,
        description:
          "A great exercise for strengthening the lower abs and improving flexibility.",
      },
      {
        exercise: exercises.find((e) => e.name === "Russian Twists")!,
        reps: "30-40 - do 15-20 per side",
        sets: 3,
        description:
          "A rotational exercise to engage the obliques and build core stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "30-45 - sec",
        sets: 3,
        description:
          "A core strengthening exercise to improve stability and endurance.",
      },
      {
        exercise: exercises.find((e) => e.name === "Seated Knee Tucks")!,
        reps: "12-15",
        sets: 3,
        description:
          "An exercise to target the lower abs and engage the hip flexors.",
      },
    ],
    description:
      "A beginner core workout to build stability and strength in the abdominal region. Includes leg raises, seated knee tucks, Russian twists, and static holds like the plank for overall core development.",
  },

  // level 3 exercises for intermediates can be added here
  {
    id: "wb_upperbody_05",
    name: "Upper Body Push Strength",
    bodyRegion: "upper-body",
    date: "",
    level: 3, // Intermediate
    estimatedTime: 35,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Push-up")!,
        reps: "15-20",
        sets: 4,
        description:
          "A standard push-up to build chest, triceps, and shoulder strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Decline Push-up")!,
        reps: "12-15",
        sets: 3,
        description:
          "A more challenging push-up variation to target the upper chest and shoulders.",
      },
      {
        exercise: exercises.find((e) => e.name === "Pike Push-up")!,
        reps: "10-12",
        sets: 3,
        description:
          "A shoulder-focused push-up to improve overhead pressing strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Scapular Push-ups")!,
        reps: "12-15",
        sets: 3,
        description:
          "A mobility-focused exercise to enhance scapular control and shoulder health.",
      },
    ],
    description:
      "A pushing-focused upper-body workout designed to strengthen the chest, triceps, and shoulders. The workout includes standard, decline, and pike push-ups to target different areas of the upper body.",
  },
  {
    id: "wb_upperbody_06",
    name: "Upper Body Pull Strength",
    bodyRegion: "upper-body",
    date: "",
    level: 3, // Intermediate
    estimatedTime: 35,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Pull-up")!,
        reps: "8-10",
        sets: 4,
        description:
          "A foundational pulling exercise for upper back and biceps strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Inverted Rows")!,
        reps: "12-15",
        sets: 3,
        description:
          "A horizontal pulling exercise to target the upper back, biceps, and rear shoulders.",
      },
      {
        exercise: exercises.find((e) => e.name === "Scapular Pull-ups")!,
        reps: "10-12",
        sets: 3,
        description:
          "A beginner-friendly pull-up variation to target scapular control and back strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Pull-up Hold")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "An isometric hold at the top of the pull-up to increase grip and back endurance.",
      },
    ],
    description:
      "A pulling-focused upper-body workout to strengthen the back and biceps. The workout includes pull-ups, inverted rows, and scapular pulls for balanced back development.",
  },
  {
    id: "wb_lowerbody_05",
    name: "Lower Body Strength 1",
    bodyRegion: "lower-body",
    date: "",
    level: 3, // Intermediate
    estimatedTime: 35,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "BodyWeight Squat")!,
        reps: "15-20",
        sets: 4,
        description:
          "A bodyweight squat to build strength in the quads, glutes, and hamstrings.",
      },
      {
        exercise: exercises.find((e) => e.name === "Jump Squats")!,
        reps: "12-15",
        sets: 3,
        description:
          "A plyometric exercise to build explosive leg strength and power.",
      },
      {
        exercise: exercises.find((e) => e.name === "Lunges")!,
        reps: "24-30 - do 12-15 per leg",
        sets: 3,
        description:
          "A unilateral leg exercise targeting quads, hamstrings, and glutes.",
      },
      {
        exercise: exercises.find((e) => e.name === "Wall Sit")!,
        reps: "30-45 - sec",
        sets: 3,
        description:
          "An isometric hold to target and build endurance in the quadriceps.",
      },
    ],
    description:
      "A comprehensive lower-body routine designed to target quads, hamstrings, and glutes. This workout includes bodyweight squats, lunges, jump squats for explosiveness, and wall sits for endurance.",
  },
  {
    id: "wb_lowerbody_06",
    name: "Lower Body Strength 2",
    bodyRegion: "lower-body",
    date: "",
    level: 3, // Intermediate
    estimatedTime: 35,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Pistol Squat")!,
        reps: "5-8 - per leg",
        sets: 3,
        description:
          "An advanced single-leg squat variation to target quads, hamstrings, and glutes.",
      },
      {
        exercise: exercises.find((e) => e.name === "Jumping Lunges")!,
        reps: "20-24 - 10-12 per leg",
        sets: 3,
        description:
          "A plyometric lunge variation to improve strength and power in the legs.",
      },
      {
        exercise: exercises.find((e) => e.name === "High Knees")!,
        reps: "30-40 - sec",
        sets: 3,
        description:
          "A cardio drill to elevate heart rate and work the lower body.",
      },
      {
        exercise: exercises.find((e) => e.name === "Lateral Leg Raises")!,
        reps: "30-40 - 15-20 - per leg",
        sets: 3,
        description:
          "A lateral movement to target the outer thighs and hip abductors.",
      },
    ],
    description:
      "A challenging lower-body routine designed for strength, endurance, and power. It incorporates pistol squats, jumping lunges, and high knees for strength and explosiveness.",
  },
  {
    id: "wb_core_05",
    name: "Core Strength 1",
    bodyRegion: "core",
    date: "",
    level: 3, // Intermediate
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "45-60 - sec",
        sets: 4,
        description:
          "A static hold that strengthens the entire core and improves stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Leg Raises")!,
        reps: "15-20",
        sets: 4,
        description:
          "An exercise to target the lower abs and strengthen the core.",
      },
      {
        exercise: exercises.find((e) => e.name === "Russian Twists")!,
        reps: "40-50 - 20-25 per side",
        sets: 3,
        description:
          "A rotational exercise that targets the obliques and builds core stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Hollow Body Hold")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A static hold to strengthen the deep core muscles and improve control.",
      },
    ],
    description:
      "A core workout that targets the entire abdominal region, including the obliques, lower abs, and deep core muscles. This routine includes planks, leg raises, Russian twists, and hollow body holds for full core development.",
  },
  {
    id: "wb_core_06",
    name: "Core Strength 2",
    bodyRegion: "core",
    date: "",
    level: 3, // Intermediate
    estimatedTime: 35,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "V-Ups")!,
        reps: "12-15",
        sets: 4,
        description:
          "A dynamic movement that targets the entire core and improves flexibility.",
      },
      {
        exercise: exercises.find((e) => e.name === "Side Plank")!,
        reps: "60-90 - do 30-45 sec per side",
        sets: 3,
        description:
          "A static hold to build strength in the obliques and improve core stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Tucked Front Lever")!,
        reps: "10-15 - sec",
        sets: 3,
        description:
          "An advanced core hold that targets the deep abdominal muscles.",
      },
      {
        exercise: exercises.find((e) => e.name === "Seated Knee Tucks")!,
        reps: "15-20",
        sets: 3,
        description:
          "An exercise that targets the lower abs and engages the hip flexors.",
      },
    ],
    description:
      "An intermediate core routine to build abdominal strength, flexibility, and endurance. It includes dynamic movements like V-ups, static holds like side planks, and challenging tucked front levers.",
  },

  // level 4 exercises for advanced users can be added here
  {
    id: "wb_upperbody_07",
    name: "Upper Body Push Strength",
    bodyRegion: "upper-body",
    date: "",
    level: 4, // Advanced
    estimatedTime: 40,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "One-Arm Push-up")!,
        reps: "10-16 - do 5-8 per arm",
        sets: 4,
        description:
          "A one-arm push-up variation to build strength and stability in the chest, shoulders, and triceps.",
      },
      {
        exercise: exercises.find((e) => e.name === "Pseudo Planche Push-up")!,
        reps: "8-10",
        sets: 4,
        description:
          "A more challenging push-up variation that targets the shoulders, chest, and triceps.",
      },
      {
        exercise: exercises.find((e) => e.name === "Handstand")!,
        reps: "30-45 - sec",
        sets: 3,
        description:
          "A static handstand hold to challenge shoulder stability and core engagement.",
      },
      {
        exercise: exercises.find((e) => e.name === "Decline Push-up")!,
        reps: "12-15",
        sets: 4,
        description:
          "A challenging push-up variation that targets the upper chest and shoulders.",
      },
    ],
    description:
      "An advanced upper-body push workout to enhance strength, endurance, and stability in the chest, shoulders, and triceps, incorporating one-arm push-ups, handstands, and decline push-ups.",
  },
  {
    id: "wb_upperbody_08",
    name: "Upper Body Pull Strength",
    bodyRegion: "upper-body",
    date: "",
    level: 4, // Advanced
    estimatedTime: 40,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Muscle-up")!,
        reps: "3-5",
        sets: 4,
        description:
          "A dynamic pulling exercise that combines a pull-up and dip, targeting the chest, back, shoulders, and arms.",
      },
      {
        exercise: exercises.find((e) => e.name === "Tucked Front Lever Row")!,
        reps: "4-6",
        sets: 4,
        description:
          "An advanced rowing movement that builds strength in the back and core while challenging stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Straddle Front Lever")!,
        reps: "10-15 - sec",
        sets: 3,
        description:
          "A front lever variation that challenges core stability and lat strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Pull-up")!,
        reps: "8-10",
        sets: 4,
        description:
          "A basic but essential pulling exercise for building upper back and bicep strength.",
      },
    ],
    description:
      "A pulling-focused workout that incorporates muscle-ups, front lever rows, and pull-ups to target upper back, biceps, and core stability.",
  },
  {
    id: "wb_lowerbody_07",
    name: "Lower Body Strength 1",
    bodyRegion: "lower-body",
    date: "",
    level: 4, // Advanced
    estimatedTime: 40,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Pistol Squat")!,
        reps: "10-16 - do 5-8 per leg",
        sets: 4,
        description:
          "A challenging single-leg squat that targets the quads, hamstrings, and glutes, requiring strength and balance.",
      },
      {
        exercise: exercises.find((e) => e.name === "Sissy Squat")!,
        reps: "8-10",
        sets: 3,
        description:
          "A squat variation that focuses on the quads and requires significant knee control.",
      },
      {
        exercise: exercises.find((e) => e.name === "Jumping Lunges")!,
        reps: "24-30 - do 12-15 per leg",
        sets: 4,
        description:
          "A plyometric exercise that targets explosive strength and power in the legs.",
      },
      {
        exercise: exercises.find((e) => e.name === "Horse Stance")!,
        reps: "30-45 - sec",
        sets: 3,
        description:
          "An isometric hold that improves leg endurance and stability, challenging your quads and glutes.",
      },
    ],
    description:
      "An advanced lower-body workout incorporating explosive and stability movements like pistol squats, sissy squats, jumping lunges, and the isometric horse stance.",
  },
  {
    id: "wb_lowerbody_08",
    name: "Lower Body Strength 2",
    bodyRegion: "lower-body",
    date: "",
    level: 4, // Advanced
    estimatedTime: 40,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Pistol Squat")!,
        reps: "12-18 - do 6-8 per leg",
        sets: 4,
        description:
          "A one-legged squat that challenges balance, strength, and mobility.",
      },
      {
        exercise: exercises.find((e) => e.name === "Jump Squats")!,
        reps: "15-20",
        sets: 4,
        description:
          "An explosive squat variation to improve lower body power and cardiovascular fitness.",
      },
      {
        exercise: exercises.find((e) => e.name === "Wall Sit")!,
        reps: "45-60 - sec",
        sets: 4,
        description:
          "An isometric hold to build endurance and strength in the quadriceps and glutes.",
      },
      {
        exercise: exercises.find((e) => e.name === "Lateral Leg Raises")!,
        reps: "30-40 - do 15-20 per leg",
        sets: 3,
        description:
          "A lateral movement targeting the hip abductors, outer thighs, and glutes.",
      },
    ],
    description:
      "An advanced lower-body routine focused on strength, stability, and explosiveness. Includes pistol squats, jump squats, wall sits, and lateral leg raises.",
  },
  {
    id: "wb_core_07",
    name: "Core Strength 1",
    bodyRegion: "core",
    date: "",
    level: 4, // Advanced
    estimatedTime: 35,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Straddle Front Lever")!,
        reps: "10-15 - sec",
        sets: 4,
        description:
          "A static core hold that challenges the entire back, core, and shoulders.",
      },
      {
        exercise: exercises.find((e) => e.name === "Dragon Flags")!,
        reps: "5-8",
        sets: 3,
        description:
          "An advanced movement that targets the lower abs and overall core strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Full L-Sit Hang")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A static hold targeting the core, hip flexors, and shoulders.",
      },
      {
        exercise: exercises.find(
          (e) => e.name === "Advanced Tucked Front Lever",
        )!,
        reps: "20-30 - sec",
        sets: 4,
        description:
          "A static hold to develop strength in the core and lats while maintaining a tucked position in the front lever.",
      },
      {
        exercise: exercises.find((e) => e.name === "Tucked Planche")!,
        reps: "15-20 - sec",
        sets: 3,
        description:
          "An advanced hold for building shoulder stability and core strength.",
      },
    ],
    description:
      "An advanced core workout targeting deep core muscles, lower abs, and shoulder stability. Includes front lever holds, dragon flags, L-sits, and tucked planche.",
  },
  {
    id: "wb_core_08",
    name: "Core Strength 2",
    bodyRegion: "core",
    date: "",
    level: 4, // Advanced
    estimatedTime: 40,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Tucked Front Lever Row")!,
        reps: "4-6",
        sets: 4,
        description:
          "An advanced rowing exercise to strengthen the core and upper back while in a front lever position.",
      },
      {
        exercise: exercises.find((e) => e.name === "L-Sit")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A static hold to engage the core and hip flexors, also challenges shoulder stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "V-Ups")!,
        reps: "12-15",
        sets: 4,
        description:
          "A dynamic core exercise to build strength and control in the abdominal region.",
      },

      {
        exercise: exercises.find((e) => e.name === "Tucked Front Lever")!,
        reps: "10-15 - sec",
        sets: 4,
        description:
          "A foundational static hold for building strength in the core and shoulders.",
      },
    ],
    description:
      "An advanced core workout targeting strength and stability in the abdominal region and shoulders, using static holds and dynamic movements like L-sits, V-ups, and front lever holds.",
  },

  // skill training
  {
    id: "skill_handstand_01",
    name: "Handstand Level 1",
    date: "",
    bodyRegion: "upper-body",
    level: 2, // Beginner to Intermediate
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Wall Supported Handstand")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "A static handstand hold against the wall to build shoulder and core strength, as well as balance.",
      },
      {
        exercise: exercises.find((e) => e.name === "Pike Push-up")!,
        reps: "8-10",
        sets: 3,
        description:
          "A push-up variation to target the shoulders and build upper body strength for handstands.",
      },
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "30-45 - sec",
        sets: 3,
        description:
          "A core engagement exercise to improve stability and balance for handstands.",
      },
      {
        exercise: exercises.find((e) => e.name === "Decline Push-up")!,
        reps: "8-10",
        sets: 3,
        description:
          "An advanced push-up variation that focuses on shoulder and upper body strength, preparing for the inverted position.",
      },
    ],
    description:
      "This handstand progression routine focuses on building shoulder strength, core stability, and balance with wall-supported handstands, pike push-ups, planks, and decline push-ups.",
  },

  {
    id: "skill_frontlever_02",
    name: "Front Lever Level 2",
    date: "",
    bodyRegion: "core",
    level: 4, // Advanced
    estimatedTime: 40,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Tucked Front Lever Row")!,
        reps: "8-10",
        sets: 4,
        description:
          "Increase the difficulty of the rowing exercise to further engage the core and lats.",
      },
      {
        exercise: exercises.find(
          (e) => e.name === "Advanced Tucked Front Lever",
        )!,
        reps: "15-20 - sec",
        sets: 4,
        description:
          "A more advanced version of the front lever with less tuck.",
      },
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "60-80 - sec",
        sets: 3,
        description:
          "A core stabilization hold to improve overall front lever strength.",
      },
      {
        exercise: exercises.find((e) => e.name === "Leg Raises")!,
        reps: "15-20",
        sets: 3,
        description:
          "Higher reps of leg raises to build abdominal strength and control.",
      },
    ],
    description:
      "A more challenging routine with advanced front lever work, including tucked front lever rows, advanced holds, and increased core exercises.",
  },
  {
    id: "skill_planche_01",
    name: "Planche Level 1",
    date: "",
    bodyRegion: "upper-body",
    level: 2, // Beginner to Intermediate
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Pseudo Planche Lean")!,
        reps: "20-30 - sec",
        sets: 3,
        description: "A foundational movement to prepare for the full planche.",
      },
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "60-75 - sec",
        sets: 3,
        description:
          "Builds core stability which is essential for planche training.",
      },
      {
        exercise: exercises.find((e) => e.name === "Scapular Push-ups")!,
        reps: "20-30",
        sets: 3,
        description:
          "Works on scapular mobility and control, which is crucial for the planche.",
      },
      {
        exercise: exercises.find((e) => e.name === "Incline Push-up")!,
        reps: "12-15",
        sets: 3,
        description:
          "A modified push-up to strengthen the chest and shoulders for planche.",
      },
    ],
    description:
      "A beginner planche routine focused on building the foundational strength for planche progression with pseudo planche leans, scapular push-ups, and incline push-ups.",
  },
  {
    id: "skill_planche_02",
    name: "Planche Level 2",
    date: "",
    bodyRegion: "upper-body",
    level: 4, // Advanced
    estimatedTime: 40,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Tucked Planche")!,
        reps: "10-20 - sec",
        sets: 4,
        description:
          "A more advanced planche progression that builds strength in the shoulders and core.",
      },
      {
        exercise: exercises.find((e) => e.name === "Pseudo Planche Push-up")!,
        reps: "6-8",
        sets: 3,
        description:
          "A push-up variation to further develop strength for the planche.",
      },
      {
        exercise: exercises.find((e) => e.name === "Handstand")!,
        reps: "15-20 - sec",
        sets: 3,
        description:
          "Building shoulder and core strength by holding a handstand.",
      },
      {
        exercise: exercises.find((e) => e.name === "Advanced Tucked Planche")!,
        reps: "10-15 - sec",
        sets: 3,
        description:
          "A more difficult variation of the tucked planche for advanced planche training.",
      },
    ],
    description:
      "An advanced planche routine with a focus on improving the tucked planche, pseudo planche push-ups, and handstand holds to build the strength and endurance needed for the full planche.",
  },
  {
    id: "skill_humanflag_01",
    name: "Human Flag Level 1",
    date: "",
    bodyRegion: "full-body",
    level: 2, // Beginner to Intermediate
    estimatedTime: 30,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Side Plank")!,
        reps: "40-60 - do 20-30 sec per side",
        sets: 3,
        description:
          "A basic static hold to activate the obliques and build lateral stability.",
      },
      {
        exercise: exercises.find((e) => e.name === "Side Hip Dips")!,
        reps: "10-12",
        sets: 3,
        description:
          "A dynamic movement to target the obliques, building strength for the human flag.",
      },
      {
        exercise: exercises.find((e) => e.name === "Plank")!,
        reps: "30-45 - sec",
        sets: 3,
        description:
          "A core stability exercise to develop endurance for holding the human flag.",
      },
      {
        exercise: exercises.find((e) => e.name === "Wall Supported Handstand")!,
        reps: "20-30 - sec",
        sets: 3,
        description:
          "Building shoulder strength and balance by practicing a wall-supported handstand.",
      },
    ],
    description:
      "A beginner human flag progression focusing on core stability, oblique work, and shoulder endurance, with side planks, hip dips, and handstand holds.",
  },
  {
    id: "skill_humanflag_02",
    name: "Human Flag Level 2",
    date: "",
    bodyRegion: "full-body",
    level: 4, // Advanced
    estimatedTime: 40,
    exercises: [
      {
        exercise: exercises.find((e) => e.name === "Human Flag")!,
        reps: "5-10 - sec",
        sets: 4,
        description:
          "An advanced hold that requires core and shoulder strength to maintain the human flag position.",
      },
      {
        exercise: exercises.find((e) => e.name === "Tucked Planche")!,
        reps: "15-20 - sec",
        sets: 3,
        description:
          "A challenging static hold that builds the shoulder and core strength necessary for the human flag.",
      },
      {
        exercise: exercises.find((e) => e.name === "Side Plank")!,
        reps: "60-90 - do 30-45 sec per side",
        sets: 3,
        description: "Strengthens the obliques and core with a longer hold.",
      },
      {
        exercise: exercises.find((e) => e.name === "Lateral Leg Raises")!,
        reps: "24-30 - do 12-15 per side",
        sets: 3,
        description:
          "Targets the obliques and hip abductors to improve lateral stability.",
      },
    ],
    description:
      "An advanced human flag routine focusing on strengthening the obliques, shoulders, and core with challenging holds and dynamic movements like lateral leg raises.",
  },
];
