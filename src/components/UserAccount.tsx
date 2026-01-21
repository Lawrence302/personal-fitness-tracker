import { SignedIn, SignOutButton } from "@clerk/clerk-react";
import usePointsStore from "../stores/pointsStore";
import { useEffect, useState } from "react";
import { openDB } from "idb";
import { calculateTier } from "../lib/globalFunctions";
import useExerciseStore from "../stores/exerciseStore";

// import { Info, ChevronRight, Target } from "lucide-react";

const UserAccount = () => {
  const totalPoints = usePointsStore((state) => state.totalPoints);

  const currentStreak = useExerciseStore((state) => state.currentStreak);
  const longestStreak = useExerciseStore((state) => state.longhestStreak);
  const updateCurrentStreak = useExerciseStore(
    (state) => state.updateCurrentStreak,
  );
  const updateLongestStreak = useExerciseStore(
    (state) => state.updateLongestStreak,
  );
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);

  const tierInfo = calculateTier(totalPoints);

  // Load DB info on mount
  useEffect(() => {
    const fetchStats = async () => {
      const db = await openDB("calitrackDB", 1);

      // Fetch streaks
      const streaks = await db.getAll("streakStats");
      updateCurrentStreak(streaks[0]?.currentStreak || 0);
      updateLongestStreak(streaks[0]?.longestStreak || 0);

      // Fetch workout logs
      const logs = await db.getAll("trainingWorkoutLogs");
      setWorkoutsCompleted(logs.length);

      // Fetch tier info (mocked here)
    };

    fetchStats();
  }, [updateCurrentStreak, updateLongestStreak]);

  return (
    <div className='flex-1 overflow-auto p-6 text-zinc-300'>
      <h1 className='text-3xl font-bold mb-6 text-white'>Your Profile</h1>

      {/* Profile Section */}
      <div className='flex flex-col md:flex-row gap-6 mb-8'>
        <div className='profile-card bg-zinc-900 rounded-xl p-6 flex-1 border'>
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center text-3xl font-bold text-white'>
              U
            </div>
            <div>
              <h2 className='text-xl font-bold'>User Name</h2>
              <p className='text-sm text-zinc-400'>user@email.com</p>
            </div>
          </div>

          <div className='mb-4'>
            <p className='text-sm'>Membership Rank:</p>
            <h3 className='text-lg font-bold'>{tierInfo?.userRank}</h3>
          </div>

          <div className='mb-4'>
            <p className='text-sm'>Total Points:</p>
            <h3 className='text-lg font-bold'>{totalPoints.toFixed(2)}</h3>
          </div>

          <div className='mb-4'>
            <p className='text-sm'>Streaks:</p>
            <p>
              Current: {currentStreak} 🔥 | Longest: {longestStreak} 🏆
            </p>
          </div>

          <SignedIn>
            <SignOutButton>
              <button className='bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 mt-2'>
                Sign Out
              </button>
            </SignOutButton>
          </SignedIn>
        </div>

        {/* Activity Summary */}
        <div className='activity-card bg-zinc-900 rounded-xl p-6 flex-1 border'>
          <h2 className='text-xl font-bold mb-4'>Activity Summary</h2>

          <div className='mb-4'>
            <p className='text-sm'>Workouts Completed:</p>
            <h3 className='text-lg font-bold'>{workoutsCompleted}</h3>
          </div>

          <div className='mb-4'>
            <p className='text-sm'>Progress to Next Tier:</p>
            <div className='w-full bg-black rounded-full h-3'>
              <div
                className='bg-cyan-500 h-3 rounded-full'
                style={{ width: `${tierInfo?.progressToNextTier}%` }}
              ></div>
            </div>
            <span className='text-xs italic'>
              {tierInfo?.progressToNextTier}% to {tierInfo?.nextTier}
            </span>
          </div>

          <div className='mb-4'>
            <p className='text-sm'>Quick Actions:</p>
            <div className='flex gap-2 mt-2 flex-wrap'>
              <button className='bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded'>
                Edit Profile
              </button>
              <button className='bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-4 rounded'>
                View Workout Logs
              </button>
              <button className='bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded'>
                View Streak History
              </button>
              <button className='bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded'>
                Open AI Coach
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
