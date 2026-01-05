import { Layers } from "lucide-react";
import { useState } from "react";
import WorkoutSession from "./workoutSession";
import type { Workout } from "../lib/types";

const workoutPrograms: Workout[] = [
  {
    name: "Full Body Foundations",
    level: 1,
    estimatedTime: 20,
    exercises: [
      {
        name: "Air Squats",
        level: "beginner",
        targetMuscles: ["quads", "glutes"],
      },
      {
        name: "Push-Ups",
        level: "beginner",
        targetMuscles: ["chest", "triceps", "shoulders"],
      },
      {
        name: "Forward Lunges",
        level: "beginner",
        targetMuscles: ["quads", "glutes", "hamstrings"],
      },
      {
        name: "Plank",
        level: "beginner",
        targetMuscles: ["core", "shoulders"],
      },
    ],
  },
  {
    name: "Upper Body Calisthenics",
    level: 2,
    estimatedTime: 20,
    exercises: [
      {
        name: "Pull-Ups",
        level: "intermediate",
        targetMuscles: ["back", "biceps"],
      },
      {
        name: "Chin-Ups",
        level: "intermediate",
        targetMuscles: ["biceps", "back"],
      },
      {
        name: "Dips (on chair/bench)",
        level: "intermediate",
        targetMuscles: ["triceps", "chest", "shoulders"],
      },
      {
        name: "Pike Push-Ups",
        level: "intermediate",
        targetMuscles: ["shoulders", "triceps"],
      },
    ],
  },
  {
    name: "Lower Body Calisthenics",
    level: 2,
    estimatedTime: 20,
    exercises: [
      {
        name: "Jump Squats",
        level: "intermediate",
        targetMuscles: ["quads", "glutes"],
      },
      {
        name: "Lunges",
        level: "beginner",
        targetMuscles: ["quads", "glutes", "hamstrings"],
      },
      { name: "Calf Raises", level: "beginner", targetMuscles: ["calves"] },
      {
        name: "Glute Bridges",
        level: "beginner",
        targetMuscles: ["glutes", "hamstrings", "lower back"],
      },
    ],
  },
  {
    name: "Core Focus",
    level: 1,
    estimatedTime: 15,
    exercises: [
      {
        name: "Plank",
        level: "beginner",
        targetMuscles: ["core", "shoulders"],
      },
      {
        name: "Side Plank",
        level: "beginner",
        targetMuscles: ["obliques", "core"],
      },
      {
        name: "Hollow Body Hold",
        level: "intermediate",
        targetMuscles: ["core"],
      },
      {
        name: "Mountain Climbers",
        level: "beginner",
        targetMuscles: ["core", "hip flexors", "shoulders"],
      },
    ],
  },
];

const Workouts = () => {
  const [showWorkouts, setShowWorkouts] = useState(true);
  const [showWorkoutSession, setShowWorkoutSession] = useState(false);
  const [selectedSession, setSelectedSession] = useState<Workout>();

  return (
    <>
      {showWorkouts && (
        <div className='p-4 overflow-y-auto'>
          <div className='py-6'>
            <h1 className='text-white text-3xl font-bold italic'>
              TRAINING MODULE
            </h1>
            <p className='text-zinc-500 text-lg font-bold'>
              Trageted routine for specific physical adaptations.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 '>
            {workoutPrograms.map((program, index) => {
              return (
                <div
                  key={index}
                  className='border border-zinc-800 bg-zinc-900 min-w-[250px] rounded-xl p-6'
                >
                  <div className='flex justify-between'>
                    <div className='bg-zinc-800 p-4 rounded-xl'>
                      <Layers className='text-cyan-500 ' />
                    </div>

                    <div>
                      <p className='text-cyan-500'>LEVEL 1</p>
                      <p className='text-zinc-500'>20M MAX</p>
                    </div>
                  </div>
                  <div className='py-6'>
                    <h2 className='text-white text-2xl font-bold italic uppercase'>
                      FULL BODY FOUNDATIONS
                    </h2>
                    <p className='text-zinc-500 text-sm pt-4'>
                      A balance routine for beginners to build foundational
                      strength.
                    </p>
                  </div>
                  <div>
                    {program.exercises.map((exercise, index) => {
                      return (
                        <div key={index} className='flex justify-between'>
                          <p className='text-zinc-400  uppercase font-bold'>
                            {exercise.name}
                          </p>
                          <p className='text-zinc-500 uppercase text-xs font-bold'>
                            [{exercise.level}]
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className='py-4 text-white text-lg '>
                    <button
                      className='w-full rounded-xl bg-zinc-800 py-2 uppercase font-bold italic'
                      onClick={() => {
                        setShowWorkoutSession(true);
                        setShowWorkouts(false);
                        setSelectedSession(program);
                      }}
                    >
                      Begin Workout
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* displaying workoutSession */}
      {showWorkoutSession && selectedSession ? (
        <WorkoutSession session={selectedSession} />
      ) : (
        <div>no session selected </div>
      )}
    </>
  );
};

export default Workouts;
