import { Dumbbell, CircleCheck, Flame } from "lucide-react";
import { initDB } from "../lib/db";
import usePointsStore from "../stores/pointsStore";
import { useEffect, useState } from "react";

const getStreakStats = async () => {
  const db = await initDB();
  const streakStats = await db.get("streakStats", "local");
  return streakStats;
};
const Navbar = () => {
  const currentStreak = usePointsStore((state) => state.currentStreak);
  const setHighestStreak = usePointsStore(
    (state) => state.updatelonghestStreak
  );
  const setCurrrentStreak = usePointsStore(
    (state) => state.updateCurrentStreak
  );

  const [activitySessions, setActivitySessions] = useState<number>(0);

  useEffect(() => {
    console.log("Home component mounted");
    const fetchData = async () => {
      const streakinfo = await getStreakStats();
      if (streakinfo) {
        setCurrrentStreak(streakinfo.currentStreak);
        setHighestStreak(streakinfo.longestStreak);
      }
      // const currentSession = await getCurrentSession();
      // console.log("Current Active Session:", currentSession);
      const db = await initDB();
      const exercises = await db.getAll("activitySessions");
      console.log(exercises);
      setActivitySessions(exercises.length);
    };
    fetchData();
  }, [setCurrrentStreak, setHighestStreak]);
  return (
    <div className='border border-b-zinc-900  border-2 flex justify-between px-4 md:px-6 py-4 '>
      <div className='flex gap-3 items-center'>
        <div className='bg-blue-500 rounded p-2'>
          <Dumbbell className='w-8 h-8 ' size={32} color='white' />
        </div>
        <div>
          <h3 className='text-sm md:text-xl lg:text-2xl text-white font-bold tracking-tighter italic'>
            MY CALI TRACK
          </h3>
          <p className='text-xs md:text-sm lg:text-base text-zinc-500 font-bold'>
            STRENGTH CODEX
          </p>
        </div>
      </div>
      <div className='border-b border-zinc-900 divide-x-4 divide-zinc-900 flex text-zinc-500 p-2 font-bold text-xs justify-end'>
        <div className='pr-2 text-right'>
          <p>SESSIONS</p>
          <div className='flex text-sm text-cyan-400 items-center justify-end gap-1'>
            <CircleCheck className='h-3 w-3 align-middle' strokeWidth={2.25} />
            <span className='text-xs md:text-sm'>{activitySessions}</span>
          </div>
        </div>
        <div className='pl-2 text-right'>
          <p>STREAK</p>
          <div className='flex items-center gap-1 text-orange-400'>
            <Flame className='h-3 w-3 align-middle' />
            <span className='text-xs md:text-sm'>{currentStreak} DAYS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
