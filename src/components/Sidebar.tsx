import {
  House,
  BicepsFlexed,
  History,
  BrainCircuit,
  Dumbbell,
} from "lucide-react";

type SidebarProps = {
  setDisplay: (name: string) => void;
};

const sidebar = ({ setDisplay }: SidebarProps) => {
  return (
    <div className='fixed bottom-0 left-0 z-50 md:static w-full h-20 md:w-24 md:h-full border-r  border-zinc-900 bg-zinc-950 '>
      <div className=' md:h-full'>
        <ul className='border h-full text-zinc-600 p-6 flex flex-row md:flex-col  justify-around items-center text-xs'>
          <li
            className='flex  flex-col items-center hover:text-white cursor-pointer'
            onClick={() => setDisplay("Home")}
          >
            <House size={24} strokeWidth={2.25} />
            <p>Home</p>
          </li>
          <li
            className='flex  flex-col items-center hover:text-white cursor-pointer'
            onClick={() => setDisplay("Workouts")}
          >
            <Dumbbell size={24} strokeWidth={2.25} />
            <p>WORKOUTS</p>
          </li>
          <li
            className='flex  flex-col items-center hover:text-white cursor-pointer'
            onClick={() => setDisplay("Exercises")}
          >
            <BicepsFlexed size={24} strokeWidth={2.25} />
            <p>EXERCISES</p>
          </li>
          <li
            className='flex  flex-col items-center hover:text-white cursor-pointer'
            onClick={() => setDisplay("Data")}
          >
            <History size={24} strokeWidth={2.25} />
            <p>DATA</p>
          </li>
          <li
            className='flex  flex-col items-center hover:text-white cursor-pointer'
            onClick={() => setDisplay("Coach")}
          >
            <BrainCircuit size={24} strokeWidth={2.25} />
            <p>COACH</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
