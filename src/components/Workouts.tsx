import { Layers } from "lucide-react";
import { useState } from "react";
import WorkoutSession from "./WorkoutSession";
import type { Exercise, Workout } from "../lib/types";
// importing default workouts programs data
import { workoutPrograms } from "../lib/defaultData";

// interface WorkoutsProps {
//   setDisplay: React.Dispatch<React.SetStateAction<string>>;
// }

type programExercisesType = {
  description: string;
  exercise: Exercise;
  sets: number;
  reps: string;
}[];

const PAGE_SIZE = 6;

const Workouts = () => {
  const [showWorkouts, setShowWorkouts] = useState(true);
  const [showWorkoutSession, setShowWorkoutSession] = useState(false);
  const [selectedSession, setSelectedSession] = useState<Workout>();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const closeWorkoutSession = () => {
    setShowWorkoutSession(false);
    setShowWorkouts(true);
  };

  const maxPoints = (program: programExercisesType) => {
    const totalPoints = program.reduce((accumulator, exercise) => {
      const maxRep = exercise.reps.split("-")[1];
      const sets = exercise.sets;
      const unitPoint = exercise.exercise?.unitPoint;
      const total = Number(maxRep) * Number(sets) * unitPoint;

      return accumulator + total;
    }, 0);
    return totalPoints.toFixed(2);
  };

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
            {workoutPrograms.slice(0, visibleCount).map((program, index) => {
              const totalPoints = maxPoints(program.exercises);
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
                      <p className='text-cyan-500'>LEVEL {program.level}</p>
                      <p className='text-zinc-500'>
                        {program.estimatedTime} MINUTES
                      </p>
                    </div>
                  </div>
                  <div className='py-6'>
                    <h2 className='text-white text-2xl font-bold italic uppercase'>
                      {program.name}
                    </h2>
                    <p className='text-zinc-500 text-sm pt-4'>
                      {program.description}
                    </p>
                  </div>
                  <div>
                    {program.exercises.map((exercise, index) => {
                      return (
                        <div key={index} className='flex justify-between'>
                          <p className='text-zinc-400  uppercase font-bold'>
                            {exercise.exercise?.name}
                          </p>
                          <p className='text-zinc-500 uppercase text-xs font-bold'>
                            {exercise.exercise?.level}
                          </p>
                        </div>
                      );
                    })}
                    <p className='text-xs text-right italic text-zinc-500'>
                      Total: <span> {totalPoints} </span> pts
                    </p>
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
          <div className='flex justify-around text-center my-6'>
            {workoutPrograms.length >= PAGE_SIZE && (
              <button
                className={`bg-zinc-800 hover:bg-zinc-900 px-6 py-2 text-white cursor-pointer rounded-full shadow-sm shadow-zinc-500/50 hover:shadow-md transition ${
                  visibleCount >= workoutPrograms.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              >
                Show More
              </button>
            )}
            {visibleCount >= PAGE_SIZE * 2 && (
              <button
                className='bg-zinc-800 hover:bg-zinc-900 px-6 py-2 text-white cursor-pointer rounded-full shadow-sm shadow-zinc-500/50 hover:shadow-md transition'
                onClick={() => setVisibleCount((prev) => prev - PAGE_SIZE)}
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      )}
      {/* displaying workoutSession */}
      {showWorkoutSession && selectedSession ? (
        <WorkoutSession
          session={selectedSession}
          closeSession={closeWorkoutSession}
        />
      ) : (
        <div>no session selected </div>
      )}
    </>
  );
};

export default Workouts;
