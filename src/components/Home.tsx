import { ChevronRight, Target, Plus } from "lucide-react";
const Home = () => {
  return (
    <div className='  flex-1 overflow-auto text-zinc-500 pt-4 mx-4 '>
      <div className='flex justify-center flex-col  md:flex-row gap-8 mb-8 '>
        <div className='left-banner border flex-3 rounded-xl p-4 bg-zinc-900'>
          <div className='text-3xl font-bold italic tracking-tighter text-white'>
            GRAVITY IS A <br />
            <span className='text-cyan-500'>CHOICE</span>
          </div>
          <div className='py-4'>
            <p className='text-sm'>
              Accumulate points by mastering movements. Level up your physical
              rank through consistency and intensity
            </p>
          </div>
          <div className=' flex flex-col md:flex-row font-bold gap-10'>
            <button className='btn bg-white text-zinc-800 rounded-full hover:bg-cyan-400 py-3 px-8 flex  gap-2 items-center justify-center'>
              ENTER GYM <ChevronRight size={24} />
            </button>
            <button className='text-white bg-zinc-800 rounded-full hover:bg-zinc-700  py-3 px-8 flex gap-2 items-center justify-center'>
              LOG OBJECTIVE <Target size={16} />
            </button>
          </div>
        </div>
        {/* right banner */}
        <div className='right-banner flex-1 flex flex-col gap-2 border rounded-xl p-4 font-bold bg-zinc-900'>
          <p className='text-xs '>PHYSICAL RANK</p>
          <div>
            <h1 className='text-4xl  italic font-bold'>NOVICE</h1>
            <p className='text-sm'>570 TOTAL PTS</p>
          </div>

          <div className='progress-bar '>
            <div className='flex justify-between text-sm'>
              <span>PROGRESS TO ADEPT</span> <span>60%</span>
            </div>
            <div className='w-full bg-grey-200 rounded-full h-1'>
              <div
                className='bg-blue-500 h-2 rounded-full '
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='font-bold py-4'>QUICK LOG EXERCISE</h2>
        <div className='flex flex-wrap text-white gap-2'>
          <button className='bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl font-bold hover:border-cyan-500/50 flex gap-2 items-center text-sm '>
            <Plus className='text-cyan-500' />
            Standard Push-ups
          </button>
          <button className='bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl font-bold hover:border-cyan-500/50 flex gap-2 items-center text-sm '>
            <Plus className='text-cyan-500' />
            Pull-ups
          </button>
          <button className='bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl font-bold hover:border-cyan-500/50 flex gap-2 items-center text-sm '>
            <Plus className='text-cyan-500' />
            Air Squats
          </button>
          <button className='bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl font-bold hover:border-cyan-500/50 flex gap-2 items-center text-sm '>
            <Plus className='text-cyan-500' />
            Dead Hang
          </button>
          <button className='bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl font-bold hover:border-cyan-500/50 flex gap-2 items-center text-sm '>
            <Plus className='text-cyan-500' />
            Horse Stance
          </button>
          <button className='bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl font-bold hover:border-cyan-500/50 flex gap-2 items-center text-sm '>
            <Plus className='text-cyan-500' />
            Forward Lunges
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
