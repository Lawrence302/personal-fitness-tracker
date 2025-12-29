import { House, Calendar, Search, History, BrainCircuit } from "lucide-react";

const sidebar = () => {
  return (
    <div className='w-24 h-full border border-2 border-r-zinc-900 '>
      <div className=' h-full'>
        <ul className='border h-full text-zinc-600 p-6 flex flex-col  justify-around items-center text-xs'>
          <li className='flex  flex-col items-center hover:text-white cursor-pointer'>
            <House size={24} strokeWidth={2.25} />
            <p>Home</p>
          </li>
          <li className='flex  flex-col items-center hover:text-white cursor-pointer'>
            <Calendar size={24} strokeWidth={2.25} />
            <p>TRAIN</p>
          </li>
          <li className='flex  flex-col items-center hover:text-white cursor-pointer'>
            <Search size={24} strokeWidth={2.25} />
            <p>WORKOUT</p>
          </li>
          <li className='flex  flex-col items-center hover:text-white cursor-pointer'>
            <History size={24} strokeWidth={2.25} />
            <p>DATA</p>
          </li>
          <li className='flex  flex-col items-center hover:text-white cursor-pointer'>
            <BrainCircuit size={24} strokeWidth={2.25} />
            <p>COACH</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
