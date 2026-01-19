import { useState } from "react";
import { Search } from "lucide-react";
import { Exercise } from "../../lib/types";

import { exercises } from "../../lib/exercises";

type SearchExerciseProps = {
  setFilteredExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
};

const SearchExercise = ({ setFilteredExercises }: SearchExerciseProps) => {
  const [searchText, setSearchText] = useState("");
  const filterExercise = (text: string) => {
    const query = text.toLowerCase().replace(/[-\s]/g, ""); // remove - and spaces;
    console.log(query);
    const results = exercises.filter(
      (exercise) =>
        exercise.tags.some((text) =>
          text.toLowerCase().replace(/[-\s]/g, "").includes(query),
        ) ||
        exercise.targetMuscleGroups.some((text) =>
          text.toLowerCase().replace(/[-\s]/g, "").includes(query),
        ) ||
        exercise.name.toLowerCase().replace(/[-\s]/g, "").includes(query),
    );
    setFilteredExercises(results);
    return results;
  };

  return (
    <div className='flex border border-zinc-800 bg-zinc-900 w-full h-fit md:w-64  rounded-full gap-2 pl-2 items-center'>
      <Search className='text-white' />
      <input
        className='border border-zinc-800  text-white focus:border-cyan-500 outline-none w-full   rounded-r-full px-2 py-2'
        type='search'
        placeholder='Search exercise...'
        value={searchText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          filterExercise(e.target.value);
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchExercise;
