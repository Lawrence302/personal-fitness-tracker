import { useEffect, useState } from "react";
import { Play, Timer } from "lucide-react";
import type { Exercise, Workout } from "../lib/types.ts";
import RecordExerciseModal from "./modals/RecordExerciseModal.tsx";

// Workout Session Component
type WorkoutSessionProps = {
  session: Workout;
  closeSession: () => void;
};
const WorkoutSession = ({ session, closeSession }: WorkoutSessionProps) => {
  const [completedExercisese, setCompletedExercises] = useState<number[]>([]);

  const [exercisesTrack, setExercisesTrack] = useState<number[]>([]);
  const [showRecordExerciseModal, setShowRecordExerciseModal] =
    useState<boolean>(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise>();
  const [selectedExerciseIndex, setSelectedExerciseIndex] = useState<number>();

  const closeRecordExerciseModal = () => {
    setShowRecordExerciseModal(false);
  };

  const handleCheckEvent = (index: number) => {
    console.log("Checked exercise at index:", index);
    // Check if exercise is tracked. making sure user can't mark as done if not tracked
    if (exercisesTrack.includes(index)) {
      if (!completedExercisese.includes(index)) {
        setCompletedExercises([...completedExercisese, index]);
      }
      console.log(completedExercisese);
    } else {
      alert("Exercise not done yet! Complete it before marking as done.");
    }
  };

  useEffect(() => {
    console.log("Exercises tracked in session:", exercisesTrack);
  }, [exercisesTrack]);

  return (
    <div>
      <div className='text-white border border-zinc-900 m-4 md:m-6 rounded-lg p-6'>
        <div className='flex justify-between items-center gap-4  flex-wrap mb-6 md:mb-8'>
          <div>
            <div className='bg-blue-500 p-2 rounded'>
              <Timer size={32} />
            </div>
          </div>
          <div>
            <h1 className='font-bold italic tracking-tighter text-lg lg:text-xl uppercase'>
              In Progress: {session.name}
            </h1>
            <p className='text-sm text-blue-500'>
              Status: Keep going, Focus on Form
            </p>
          </div>
          <div>
            <button
              className=' bg-blue-500 px-3 md:px-6 py-2 font-bold uppercase rounded-lg cursor-pointer hover:bg-blue-400 text-sm'
              onClick={() => closeSession()}
            >
              Finish Session
            </button>
          </div>
        </div>
        <div className=' grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {session.exercises.map((exercise, index) => {
            return (
              <div
                key={index}
                className={`border border-zinc-800 py-3 px-4 rounded-lg flex justify-between items-center hover:border-zinc-700 cursor-pointer ${
                  completedExercisese.includes(index)
                    ? "disabled:opacity-50 bg-zinc-900 pointer-events-none cursor-not-allowed"
                    : ""
                }`}
              >
                <div>
                  <h3 className='font-bold italic capitalize mb-2'>
                    {completedExercisese.includes(index) ? (
                      <span className='line-through text-gray-400'>
                        {exercise.name}
                      </span>
                    ) : (
                      exercise.name
                    )}
                  </h3>

                  <div className='flex gap-1'>
                    {exercise.targetMuscles.map((muscle, index) => {
                      return (
                        <span
                          key={index}
                          className='text-[10px] text-zinc-500 font-bold bg-zinc-900 rounded-sm uppercase px-1'
                        >
                          {muscle}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div
                  className='relative inline-block group border border-zinc-800 rounded-lg bg-green-950 p-1'
                  onClick={() => {
                    setSelectedExercise(exercise);
                    setShowRecordExerciseModal(true);
                    // setSelectedExerciseIndex(index);
                    if (!exercisesTrack.includes(index)) {
                      setSelectedExerciseIndex(index);
                    }
                  }}
                >
                  <Play className='text-green-500 ' size={24} />

                  {/* Tooltip */}
                  <div
                    className='
                  absolute bottom-full left-1/2 mb-1
                  -translate-x-1/2
                  hidden group-hover:block
                  rounded bg-black px-2 py-1
                  text-xs text-white whitespace-nowrap
                '
                  >
                    click play button to log excercise progress{" "}
                  </div>
                </div>
                <div className='flxe-1 flex gap-1 italic font-bold text-sm '>
                  <span className='text-gray-400 text-sm'>Done</span>
                  <input
                    type='checkbox'
                    checked={completedExercisese.includes(index)}
                    disabled={completedExercisese.includes(index)}
                    className='scale-150'
                    onChange={() => handleCheckEvent(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Modal for recording exercise progress */}
      </div>
      {showRecordExerciseModal && selectedExercise && (
        <RecordExerciseModal
          closeModal={closeRecordExerciseModal}
          exercise={selectedExercise}
          mode='sessionExerciseLog'
          recordInTrack={setExercisesTrack}
          exerciseIndex={selectedExerciseIndex}
        />
      )}
    </div>
  );
};

export default WorkoutSession;
