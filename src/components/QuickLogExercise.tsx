import { Plus } from "lucide-react";
import RecordExerciseModal from "./modals/RecordExerciseModal";
import { useState } from "react";
import type { Exercise } from "../lib/types";
//

const exercises: Exercise[] = [
  {
    name: "Pull-ups",
    measurement: "reps",
    level: "intermediate",
    targetMuscles: ["back", "biceps"],
  },
  {
    name: "Air-squats",
    measurement: "reps",
    level: "beginner",
    targetMuscles: ["quads", "glutes"],
  },
  {
    name: "Dead-hang",
    measurement: "seconds",
    level: "beginner",
    targetMuscles: ["forearms", "grip"],
  },
  {
    name: "Horse-stance",
    measurement: "seconds",
    level: "beginner",
    targetMuscles: ["quads", "inner thighs"],
  },
  {
    name: "Forward-lunges",
    measurement: "reps",
    level: "beginner",
    targetMuscles: ["quads", "glutes", "hamstrings"],
  },
];

const QuickLogExercise = () => {
  const [showRecordExercisesModal, setShowRecordExerciseModal] =
    useState(false);
  const [currentExercise, setCurrentExercise] = useState<Exercise>();

  const closeRecordExerciseModal = () => {
    setShowRecordExerciseModal(false);
  };
  return (
    <div>
      <h2 className='font-bold py-4'>QUICK LOG EXERCISE</h2>{" "}
      <div className='flex flex-wrap text-white gap-2'>
        {exercises.map((exercise, index) => {
          return (
            <button
              onClick={() => {
                setShowRecordExerciseModal(true);
                setCurrentExercise(exercise);
              }}
              key={index}
              className='bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl font-bold hover:border-cyan-500/50 flex gap-2 items-center text-sm '
            >
              <Plus className='text-cyan-500' />
              {exercise.name}
            </button>
          );
        })}
      </div>
      {/* Exercise Log modal */}
      <div>
        {showRecordExercisesModal && currentExercise && (
          <RecordExerciseModal
            closeModal={closeRecordExerciseModal}
            exercise={currentExercise}
          />
        )}
      </div>
    </div>
  );
};

export default QuickLogExercise;
