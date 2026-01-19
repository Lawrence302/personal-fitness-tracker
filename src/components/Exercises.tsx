import { useEffect, useState } from "react";

import ExerciseCard from "./ExerciseCard";

// importing default exercises data

import FilterExercise from "./FilterExercise";
import { Exercise } from "../lib/types";
import SearchExercise from "./Search/SearchExercise";

const Exercises = () => {
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowMoreOrLess = () => {
    setShowAll(!showAll);
  };
  const visibleExercises = showAll
    ? filteredExercises
    : filteredExercises.slice(0, 20);

  useEffect(() => {
    // console.log(filteredExercises);
  }, [filteredExercises, visibleExercises]);
  return (
    <div className='p-4 '>
      <div className='md:flex justify-between items-center'>
        <div>
          <h1 className='text-white font-bold text-2xl md:text-3xl italic tracking-tighter '>
            BODY WEIGHT EXERCISES
          </h1>
          <p className='text-zinc-500 italic font-bold text-lg py-2'>
            Study the mechanics of bodyweight mastery.
          </p>
        </div>
        <SearchExercise />
        <div className='mt'>
          <FilterExercise setFilteredExercises={setFilteredExercises} />
        </div>
        <div className='text-white'>Results: {visibleExercises.length}</div>
      </div>

      {/* displaying exercises */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6'>
        {visibleExercises.map((exercise, index) => {
          return <ExerciseCard exercise={exercise} index={index} key={index} />;
        })}
      </div>
      {filteredExercises.length > 20 && (
        <div className='mb-6 py-4 text-center'>
          <button
            className='bg-zinc-800 hover:bg-zinc-900 px-6 py-2 text-white cursor-pointer rounded-full shadow-sm shadow-zinc-500/50 hover:shadow-md transition'
            onClick={handleShowMoreOrLess}
          >
            {visibleExercises.length < 21 ? "Show More..." : "Show less"}
          </button>
        </div>
      )}

      <div>
        {/* <div className='text-white flex flex-col justify-center items-center border-2 border-dashed border-zinc-800 mt-6 h-24 rounded-xl gap-2 cursor-pointer'>
          <Plus size={32} className='text-cyan-500' />
          <p className='text-white'>Add New Exercise</p>
        </div> */}
      </div>
    </div>
  );
};

export default Exercises;
