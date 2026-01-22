import { Plus } from "lucide-react";
import RecordExerciseModal from "./modals/RecordExerciseModal";
import { useEffect, useState } from "react";
import type { Exercise } from "../lib/types";
//
// Importing default exercises data

const PAGE_SIZE = 10;

import FilterExercise from "./FilterExercise";

const QuickLogExercise = () => {
  const [showRecordExercisesModal, setShowRecordExerciseModal] =
    useState(false);
  const [currentExercise, setCurrentExercise] = useState<Exercise>();
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const closeRecordExerciseModal = () => {
    setShowRecordExerciseModal(false);
  };

  useEffect(() => {
    // console.log(filteredExercises);
  }, [filteredExercises]);

  return (
    <div>
      <h2 className='font-bold pt-4'>QUICK LOG EXERCISE</h2>

      <FilterExercise setFilteredExercises={setFilteredExercises} />
      <div className='text-white'>Results: {filteredExercises.length}</div>
      <div
        className={`${filteredExercises.length > 20 ? "bg-gradient-to-t from-zinc-700 from-0% to-zinc-950 to-30% border-none" : ""} pt-4 px-2 md:px-6 rounded`}
      >
        <div className='flex flex-wrap text-white gap-2 '>
          {filteredExercises.slice(0, visibleCount).map((exercise, index) => {
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
        {/* button to control list of exercises display, more or less */}
        {filteredExercises.length > PAGE_SIZE && (
          <div className='mb-6 py-4 flex justify-around'>
            <button
              className='bg-zinc-800 hover:bg-zinc-900 px-6 py-2 text-white cursor-pointer rounded-full shadow-sm shadow-zinc-500/50 hover:shadow-md transition'
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            >
              Show More
            </button>
            {visibleCount > PAGE_SIZE * 2 && (
              <button
                className='bg-zinc-800 hover:bg-zinc-900 px-6 py-2 text-white cursor-pointer rounded-full shadow-sm shadow-zinc-500/50 hover:shadow-md transition'
                onClick={() => setVisibleCount((prev) => prev - PAGE_SIZE)}
              >
                Show Less
              </button>
            )}
          </div>
        )}
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
