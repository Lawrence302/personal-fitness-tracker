import { useEffect, useState } from "react";
import { ChevronRight, Target, Info } from "lucide-react";
import QuickLogExercise from "./QuickLogExercise";
import { initDB } from "../lib/db";
import usePointsStore from "../stores/pointsStore";
import { calculateTier } from "../lib/globalFunctions";
import QuotesDisplay from "./QuotesDisplay";
import GoalReminderModal from "./modals/GoalReminderModal";

const getTotalPoints = async () => {
  // fetch all exercise logs from IndexedD
  // return total points from all logs
  const db = await initDB();
  const exercises = await db.getAll("exerciseLogs");
  // console.log("Fetched exercise logs:", exercises);

  const totalPoints = exercises.reduce(
    (sum, log) => sum + (log.pointsEarned || 0),
    0,
  );
  return totalPoints;
};

type HomeProps = {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
};

const Home = ({ setDisplay }: HomeProps) => {
  const totalPoints = usePointsStore((state) => state.totalPoints);
  const setTotalPoints = usePointsStore((state) => state.setTotalPoints);

  const [showGoalModal, setShowGoalModal] = useState(false);
  const [goal, setGoal] = useState<string | null>(null);

  const tierInfo = calculateTier(totalPoints);

  const remindUserAboutGoal = () => {
    if (!goal?.trim()) {
      setDisplay("UserAccount");
      return;
    }
    setShowGoalModal(true);
  };

  // const clearExerciseLogs = async () => {
  //   const db = await initDB();
  //   await db.clear("userInfo");
  // };

  // clearExerciseLogs(); // for testing purposes only

  useEffect(() => {
    // console.log("Home component mounted");
    const fetchData = async () => {
      const points = await getTotalPoints();

      const db = await initDB();
      const user = await db.get("userInfo", "user");
      if (user) {
        setGoal(user.goals);
      }

      // console.log("User Info:", user);
      // const currentSession = await db.getAll("trainingWorkoutLogs");
      // console.log("Current Active Session:", currentSession);

      // const exercises = await db.getAll("activitySessions");
      // console.log(exercises);
      setTotalPoints(points);
    };

    fetchData();
  }, [setTotalPoints]);

  return (
    <div className='  flex-1 overflow-auto text-zinc-500 pt-4 mx-4 '>
      <QuotesDisplay />
      <div className='flex justify-center flex-col  md:flex-row gap-8 mb-8 '>
        <div className='left-banner border flex-3 rounded-xl p-4 bg-zinc-900'>
          <div className='text-3xl font-bold italic tracking-tighter text-white relative'>
            GRAVITY IS A <br />
            <span className='text-cyan-500'>CHOICE</span>
            <div
              className='absolute top-0 right-0 items-center mb-2 ml-2 text-white cursor-pointer hover:text-blue-500 '
              onClick={() => setDisplay("Info")}
            >
              <Info size={24} />
            </div>
          </div>
          <div className='py-4'>
            <p className='text-sm'>
              Accumulate points by mastering movements. Level up your physical
              rank through consistency and intensity
            </p>
          </div>
          <div className=' flex flex-col md:flex-row font-bold gap-10'>
            <button
              className='btn bg-white text-zinc-800 rounded-full hover:bg-cyan-400 py-3 px-8 flex  gap-2 items-center justify-center uppercase'
              onClick={() => setDisplay("Workouts")}
            >
              Begin Training <ChevronRight size={24} />
            </button>
            <button
              className='text-white bg-zinc-800 rounded-full hover:bg-zinc-700  py-3 px-8 flex gap-2 items-center justify-center uppercase'
              onClick={() => remindUserAboutGoal()}
            >
              {goal?.trim() ? "Don't forget your goal!" : "SET Your Goal"}
              <Target size={16} />
            </button>
          </div>
        </div>
        {/* right banner */}
        <div className='right-banner flex-1 flex flex-col gap-2 border rounded-xl p-4 font-bold bg-zinc-900'>
          <p className='text-xs '>PHYSICAL RANK</p>
          <div>
            <h1 className='text-4xl  italic font-bold '>
              {tierInfo?.userRank}
            </h1>
            <p className='text-sm'>{totalPoints.toFixed(2)} TOTAL PTS</p>
          </div>

          <div className='progress-bar mt-4'>
            {tierInfo?.nextTier != null ? (
              <div>
                <div className='flex justify-between text-xs italic mb-1'>
                  <span>
                    {tierInfo?.nextTier != null &&
                      `PROGRESS TO ${tierInfo?.nextTier}`}
                  </span>{" "}
                  <span>{tierInfo?.progressToNextTier}%</span>
                </div>
                <div className='w-full bg-black rounded-full h-2'>
                  <div
                    className='bg-blue-500 h-2 rounded-full '
                    style={{ width: `${tierInfo?.progressToNextTier}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <span className='text-cyan-500 text-xs italic'>
                Legend Status Achieved 🏆
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        {/* Quick Log Exercise Section */}
        <QuickLogExercise />
      </div>

      <div className='text-center my-8'>
        <button
          className='bg-zinc-900 p-2 rounded cursor-pointer hover:shadow-blue-500 '
          onClick={() => setDisplay("pointsInfo")}
        >
          See More info about Points
        </button>
      </div>
      <div className='text-center my-8'>
        <button
          className='bg-zinc-900 p-2 rounded cursor-pointer hover:shadow-blue-500 '
          onClick={() => setDisplay("Info")}
        >
          Learn About this App and Calithenics
        </button>
      </div>
      <div>
        {showGoalModal && (
          <GoalReminderModal
            isOpen={showGoalModal}
            goal={goal}
            onClose={() => setShowGoalModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
