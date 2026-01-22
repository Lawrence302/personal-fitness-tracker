import { useState } from "react";
import { Target } from "lucide-react";
import type { Exercise } from "../lib/types";
import ExerciseDetailModal from "./modals/ExrciseDetailModal";

type ExerciseCardProps = {
  exercise: Exercise;
  index: number;
};

const ExerciseCard = ({ exercise, index }: ExerciseCardProps) => {
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const onQuickLog = (exercise: Exercise) => {
    // Placeholder for quick log functionality
    console.log(`Quick logging exercise: ${exercise.name}`);
  };

  return (
    <div
      className='card border border-zinc-800 bg-zinc-900 rounded-xl'
      key={index}
    >
      <div className='h-40 lg:h-48 bg-zinc-800 rounded-btl-xl rounded-t-xl '>
        <p className='border border-cyan-800 text-cyan-500 text-xs font-semibold w-fit p-1 m-2 float-right'>
          {exercise.level}
        </p>
      </div>
      <div className='p-4' onClick={() => setShowExerciseModal(true)}>
        <h2 className='text-white text-lg font-bold '>{exercise.name}</h2>
        <div className='flex gap-2 flex-wrap py-2'>
          {exercise.targetMuscleGroups.map((muscle, index) => {
            return (
              <span
                className='border border-zinc-800 bg-zinc-900 rounded-sm px-2 text-zinc-500 font-bold text-sm  md:text-[12px]  uppercase flex w-fit items-center gap-1'
                key={index}
              >
                <Target size={10} />
                {muscle}
              </span>
            );
          })}
        </div>
        <p className='text-zinc-400  line-clamp-2  italic'>
          {exercise.description}
        </p>
      </div>
      <div>
        <ExerciseDetailModal
          isOpen={showExerciseModal}
          exercise={exercise}
          onClose={() => setShowExerciseModal(false)}
          onQuickLog={() => onQuickLog(exercise)}
        />
      </div>
    </div>
  );
};

export default ExerciseCard;
