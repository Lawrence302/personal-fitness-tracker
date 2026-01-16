import { useEffect, useState } from "react";
import { ChevronRight, Target, Info } from "lucide-react";
import QuickLogExercise from "./QuickLogExercise";
import { initDB } from "../lib/db";
import usePointsStore from "../stores/pointsStore";
import { calculateTier } from "../lib/globalFunctions";
import { quotes } from "../lib/quotes";
import { get } from "http";

const getTotalPoints = async () => {
  // fetch all exercise logs from IndexedD
  // return total points from all logs
  const db = await initDB();
  const exercises = await db.getAll("exerciseLogs");
  // console.log("Fetched exercise logs:", exercises);

  const totalPoints = exercises.reduce(
    (sum, log) => sum + (log.pointsEarned || 0),
    0
  );
  return totalPoints;
};

type HomeProps = {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
};

const getRandomIndex = (length: number) => {
  console.log("length is ", length);
  return Math.floor(Math.random() * length);
};

const Home = ({ setDisplay }: HomeProps) => {
  const totalPoints = usePointsStore((state) => state.totalPoints);
  const setTotalPoints = usePointsStore((state) => state.setTotalPoints);
  const [randomQuote, setRandomQuote] = useState<string>(
    () => quotes[getRandomIndex(quotes.length)]
  );

  const tierInfo = calculateTier(totalPoints);

  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);

    return index;
  };

  // const clearExerciseLogs = async () => {
  //   const db = await initDB();
  //   await db.clear("exerciseLogs");
  // };

  // clearExerciseLogs(); // for testing purposes only

  useEffect(() => {
    // console.log("Home component mounted");
    const fetchData = async () => {
      const points = await getTotalPoints();

      // const db = await initDB();

      // const currentSession = await db.getAll("trainingWorkoutLogs");
      // console.log("Current Active Session:", currentSession);

      // const exercises = await db.getAll("activitySessions");
      // console.log(exercises);
      setTotalPoints(points);
    };

    fetchData();
  }, [setTotalPoints]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = getRandomQuote();
      console.log(randomIndex);
      setRandomQuote(quotes[randomIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='  flex-1 overflow-auto text-zinc-500 pt-4 mx-4 '>
      <div className='   mb-4 w-full flex justify-center '>
        <p className='bg-zinc-800 px-4 py-1 w-fit text-sm md:text-base rounded italic text-white font-semibold'>
          {randomQuote}
        </p>
      </div>
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
            <button className='text-white bg-zinc-800 rounded-full hover:bg-zinc-700  py-3 px-8 flex gap-2 items-center justify-center'>
              LOG OBJECTIVE <Target size={16} />
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
            <p className='text-sm'>{totalPoints} TOTAL PTS</p>
          </div>

          <div className='progress-bar mt-4'>
            <div className='flex justify-between text-xs italic mb-1'>
              <span>
                {tierInfo?.nextTier != null
                  ? `PROGRESS TO ${tierInfo?.nextTier}`
                  : "🏆ELITE"}
              </span>{" "}
              <span>{tierInfo?.progressToNextTier}%</span>
            </div>
            <div className='w-full bg-grey-200 rounded-full h-1'>
              <div
                className='bg-blue-500 h-2 rounded-full '
                style={{ width: `${tierInfo?.progressToNextTier}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Quick Log Exercise Section */}
        <QuickLogExercise />
      </div>
    </div>
  );
};

export default Home;
