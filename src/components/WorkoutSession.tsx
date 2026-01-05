import { Timer } from "lucide-react";
import type { Workout } from "../lib/types";
type WorkoutSessionProps = {
  session: Workout;
  closeSession: () => void;
};
const WorkoutSession = ({ session, closeSession }: WorkoutSessionProps) => {
  return (
    <div className='text-white border border-zinc-900 m-4 md:m-6 rounded-lg p-6'>
      <div className='flex justify-between items-center gap-4  flex-wrap mb-6 md:mb-8'>
        <div>
          <div className='bg-blue-500 p-2 rounded'>
            <Timer size={32} />
          </div>
        </div>
        <div>
          <h1 className='font-bold italic tracking-tighter text-lg lg:text-xl uppercase'>
            In Progress: {session.name}
          </h1>
          <p className='text-sm text-blue-500'>
            Status: Keep going, Focus on Form
          </p>
        </div>
        <div>
          <button
            className=' bg-blue-500 px-3 md:px-6 py-2 font-bold uppercase rounded-lg cursor-pointer hover:bg-blue-400 text-sm'
            onClick={() => closeSession()}
          >
            Finish Session
          </button>
        </div>
      </div>
      <div className=' grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {session.exercises.map((exercise, index) => {
          return (
            <div
              key={index}
              className='border border-zinc-800 py-3 px-4 rounded-lg flex justify-between items-center hover:border-zinc-700 cursor-pointer'
            >
              <div>
                <h3 className='font-bold italic capitalize mb-2'>
                  {exercise.name}
                </h3>
                <div className='flex gap-1'>
                  {exercise.targetMuscles.map((muscle, index) => {
                    return (
                      <span
                        key={index}
                        className='text-[10px] text-zinc-500 font-bold bg-zinc-900 rounded-sm uppercase px-1'
                      >
                        {muscle}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className='flxe-1 flex gap-1 italic font-bold text-sm '>
                <span className='text-gray-400 text-sm'>Done</span>
                <input type='checkbox' className='scale-150' />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutSession;
