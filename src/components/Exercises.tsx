import { useEffect, useState } from "react";

import ExerciseCard from "./ExerciseCard";

// importing default exercises data

import FilterExercise from "./FilterExercise";
import { Exercise } from "../lib/types";
import SearchExercise from "./Search/SearchExercise";

const PAGE_SIZE = 10;

const Exercises = () => {
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    // console.log(filteredExercises);
  }, [filteredExercises]);
  return (
    <div className='p-4 relative'>
      <div className='md:flex justify-between items-center'>
        <div>
          <h1 className='text-white font-bold text-2xl md:text-3xl italic tracking-tighter '>
            BODY WEIGHT EXERCISES
          </h1>
          <p className='text-zinc-500 italic font-bold text-lg py-2'>
            Study the mechanics of bodyweight mastery.
          </p>
        </div>
        <SearchExercise setFilteredExercises={setFilteredExercises} />
      </div>

      <div className='mt'>
        <FilterExercise setFilteredExercises={setFilteredExercises} />
      </div>
      <div className='text-white'>Results: {filteredExercises.length}</div>

      {/* displaying exercises */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6'>
        {filteredExercises.slice(0, visibleCount).map((exercise, index) => {
          return <ExerciseCard exercise={exercise} index={index} key={index} />;
        })}
      </div>
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
