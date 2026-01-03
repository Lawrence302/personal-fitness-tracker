// import { RechartsDevtools } from "@recharts/devtools";
import ExerciseFrequencyChart from "./charts/ExerciseFrequencyChart";
import IntensityChart from "./charts/IntensityChart";
import SessionChart from "./charts/SessionChart";
import SessionVsIntensityChart from "./charts/SessionVsIntensityChart";
import { Trophy } from "lucide-react";

const Data = () => {
  return (
    <div className='text-white m-2 md:m-6'>
      <div>
        <h1 className='text-2xl md:text-3xl tracking-tighter italic uppercase font-bold text-center mt-4'>
          Fitness Data Overview
        </h1>
        <p className='text-center text-sm my-2'>
          Track your fitness progress over time with detailed analytics.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-6 py-6'>
        {/* overview left side */}
        <div className='border border-zinc-800 bg-zinc-900 sm:flex-2 lg:flex-3 rounded-3xl p-6 md:px-8  '>
          <div className='flex justify-between mb-6'>
            <div className='flex items-center gap-4'>
              <div className='bg-zinc-800 p-2 rounded-lg'>
                <Trophy />
              </div>
              <div>
                <p className='text-sm text-zinc-500 font-bold'>CURRENT RANK</p>
                <h1 className='tracking-tighter text-3xl italic font-bold text-zinc-500'>
                  NOVICE
                </h1>
                <p className='text-xs text-zinc-400 italic '>
                  starting the journey
                </p>
              </div>
            </div>
            <div>
              <p className='uppercase text-sm font-bold tracking-wider text-zinc-400'>
                TOTAL SCORE
              </p>
              <h2 className='font-bold text-cyan-500'>
                <span className='text-white text-2xl italic'>550</span> PTS
              </h2>
            </div>
          </div>
          {/* progress bar area */}
          <div>
            <div className='flex justify-between px-4 mb-1 items-center'>
              <p className='tracking-widest text-zinc-500 text-xs font-bold'>
                PROGRESS TO ADEPT
              </p>
              <p className='italic tracking-tight text-sm '>
                <span>451</span> pts remaining
              </p>
            </div>
            <div className='border border-zinc-800 rounded-full p-[1px] bg-zinc-950 '>
              <div
                className='bg-zinc-500 h-2 rounded-full'
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* point system right side */}
        <div className='flex-1 rounded-3xl border border-zinc-800 p-6 bg-zinc-900'>
          <div>
            <h3 className='text-zinc-500 font-bold pb-2'>
              EXERCISE POINT SYSTEM
            </h3>
          </div>
          <div>
            <div className='flex justify-between border-y border-zinc-400 text-sm '>
              <p className='text-zinc-400 capitalize'>beginner </p>
              <p className=' '>+5-10 PTS</p>
            </div>
            <div className='flex justify-between border-y border-zinc-400 text-sm '>
              <p className='text-zinc-400 capitalize'>Intermediate </p>
              <p className=' '>+11-15 PTS</p>
            </div>
            <div className='flex justify-between border-y border-zinc-400 text-sm '>
              <p className='text-zinc-400 capitalize'>Advanced </p>
              <p className=''>+16-25 PTS</p>
            </div>
            <div className='flex justify-between border-y border-zinc-400 text-sm '>
              <p className='text-zinc-400 capitalize'>Expert/Elite </p>
              <p className='  '>+26-50 PTS</p>
            </div>
          </div>
          <p className='text-sm italic pt-2 text-zinc-400'>
            Points are based on exercise difficulty, intensity, and required
            skill.
          </p>
        </div>
      </div>
      {/* Graph showing training sessions and Intensity over time */}
      <SessionVsIntensityChart />
      {/* Graph showing training sessions over time */}
      <SessionChart />
      {/* Graph showing training Intensity over time */}
      <IntensityChart />
      {/* Graph showing workout frequency. Most Frequent Exercises */}
      <ExerciseFrequencyChart />
    </div>
  );
};

export default Data;
