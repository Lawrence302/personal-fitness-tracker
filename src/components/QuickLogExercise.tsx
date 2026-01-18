import { Plus } from "lucide-react";
import RecordExerciseModal from "./modals/RecordExerciseModal";
import { useEffect, useState } from "react";
import type { Exercise } from "../lib/types";
//
// Importing default exercises data

import FilterExercise from "./FilterExercise";

const QuickLogExercise = () => {
  const [showRecordExercisesModal, setShowRecordExerciseModal] =
    useState(false);
  const [currentExercise, setCurrentExercise] = useState<Exercise>();
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);

  const closeRecordExerciseModal = () => {
    setShowRecordExerciseModal(false);
  };

  useEffect(() => {
    console.log(filteredExercises);
  }, [filteredExercises]);
  return (
    <div>
      <h2 className='font-bold py-4'>QUICK LOG EXERCISE</h2>
      <FilterExercise setFilteredExercises={setFilteredExercises} />
      <div className='flex flex-wrap text-white gap-2'>
        {filteredExercises.map((exercise, index) => {
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
            mode='quickLog'
          />
        )}
      </div>
    </div>
  );
};

export default QuickLogExercise;
