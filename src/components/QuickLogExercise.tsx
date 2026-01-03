import { Plus } from "lucide-react";
import RecordExerciseModal from "./modals/RecordExerciseModal";
import { useState } from "react";
//
const exercises = [
  "Pull-ups",
  "air-squads",
  "dead-hang",
  "horse-stance",
  "forward-lunges",
];

const QuickLogExercise = () => {
  const [showRecordExercisesModal, setShowRecordExerciseModal] =
    useState(false);

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
              onClick={() => setShowRecordExerciseModal(true)}
              key={index}
              className='bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl font-bold hover:border-cyan-500/50 flex gap-2 items-center text-sm '
            >
              <Plus className='text-cyan-500' />
              {exercise}
            </button>
          );
        })}
      </div>
      {/* Exercise Log modal */}
      <div>
        {showRecordExercisesModal && (
          <RecordExerciseModal closeModal={closeRecordExerciseModal} />
        )}
      </div>
    </div>
  );
};

export default QuickLogExercise;
