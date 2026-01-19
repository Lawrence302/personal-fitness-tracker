import { Search } from "lucide-react";

const SearchExercise = () => {
  return (
    <div className='flex border border-zinc-800 bg-zinc-900 w-full h-fit md:w-64  rounded-full gap-2 pl-2 items-center'>
      <Search className='text-white' />
      <input
        className='border border-zinc-800  text-white focus:border-cyan-500 outline-none w-full   rounded-r-full px-2 py-2'
        type='search'
        placeholder='Search exercise...'
      />
    </div>
  );
};

export default SearchExercise;
