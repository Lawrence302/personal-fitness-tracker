import { useEffect, useState } from "react";
import { Play, Timer } from "lucide-react";
import type { Exercise, Workout, TrainingWorkoutLog } from "../lib/types.ts";
import RecordExerciseModal from "./modals/RecordExerciseModal.tsx";
import { initDB } from "../lib/db.ts";
import { v4 as uuid } from "uuid";
import { DateTime } from "luxon";
import { workoutPrograms } from "../lib/defaultData.ts";

///
// export type TrainingWorkoutLog = {
//   id: string;
//   routineName: string;
//   routineId: string;
//   started: 0 | 1;
//   completed: 0 | 1;
//   startTime: string;
//   endTime: string;
//   estimatedTime: number; // in minutes
//   exerciseLogs: string[]; // ids of exerciselogs
//   progress: number;
//   totalPoints: number;
// };
/////

//
const createNewTrainingWorkoutSession = (session: Workout) => {
  // const endTime = startTime.plus({minutes: 2})
  // console.log(session);

  const newTrainingSession: TrainingWorkoutLog = {
    id: uuid(),
    routineName: session.name,
    workoutId: session.id,
    started: 0,
    active: 0,
    completed: 0,
    startTime: DateTime.now().toUTC().toISO(),
    endTime: undefined,
    // estimatedTime: session.estimatedTime, // in minutes
    estimatedTime: 2, // in minutes
    exerciseLogs: [], // ids of exerciselogs
    exercisesAtempted: [], // ids of individual exercises in the session
    completedExercises: [],
    progress: 0,
    totalPoints: 0,
  };
  return newTrainingSession;
};

const getCurrentTrainingWorkoutLog = async () => {
  const db = await initDB();
  const currentWorkoutLog = await db.getFromIndex(
    "trainingWorkoutLogs",
    "active",
    1
  );

  if (currentWorkoutLog) {
    const startTime = currentWorkoutLog.startTime;

    const start = DateTime.fromISO(startTime, { zone: "utc" });
    const estimatedEnd = start.plus({
      minutes: currentWorkoutLog.estimatedTime,
    });
    const now = DateTime.now().toUTC();

    if (now > estimatedEnd) {
      currentWorkoutLog.endTime = now.toISO();
      currentWorkoutLog.active = 0;

      await db.put("trainingWorkoutLogs", currentWorkoutLog);

      // return undefined to indicate no active session
      return undefined;
    }

    return currentWorkoutLog;
  }

  return undefined;
};

// Workout Session Component
type WorkoutSessionProps = {
  session: Workout;
  closeSession: () => void;
};
const WorkoutSession = ({ session, closeSession }: WorkoutSessionProps) => {
  const [currentSession, setCurrentSession] = useState<Workout>(session);
  const [sessionActive, setSessionActive] = useState<boolean>(false);
  const [completedExercisese, setCompletedExercises] = useState<string[]>([]);
  // dummy for session presentation for now
  const [workoutTrainingSession, setWorkoutTrainingSession] =
    useState<TrainingWorkoutLog>();

  // const [exercisesTrack, setExercisesTrack] = useState<string[]>([]);
  const [showRecordExerciseModal, setShowRecordExerciseModal] =
    useState<boolean>(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise>();
  // const [selectedExerciseId, setSelectedExerciseId] = useState<string>();

  // tracking the progress of the workout session
  // const progress = Math.round(
  //   (completedExercisese.length / session.exercises.length) * 100
  // );

  const startSession = (session: Workout) => {
    const newWorkoutSession = createNewTrainingWorkoutSession(session);
    console.log(" new session ", newWorkoutSession);
    setWorkoutTrainingSession(newWorkoutSession);

    setSessionActive(true);
  };

  const handleCloseSession = () => {
    // check if all exercises are completed before closing session
    if (completedExercisese.length < session.exercises.length) {
      const confirmClose = confirm(
        "You have not completed all exercises. Are you sure you want to finish the session?"
      );
      if (confirmClose) {
        closeSession();
      }
    } else {
      closeSession();
    }
  };

  const closeRecordExerciseModal = () => {
    setShowRecordExerciseModal(false);
  };

  const handleCheckEvent = async (exerciseId: string) => {
    if (workoutTrainingSession) {
      if (workoutTrainingSession.exercisesAtempted.includes(exerciseId)) {
        const db = await initDB();
        // console.log("Checked exercise at index:", exerciseId);
        // Check if exercise is tracked. making sure user can't mark as done if not tracked

        if (!completedExercisese.includes(exerciseId)) {
          setCompletedExercises([...completedExercisese, exerciseId]);

          const log: TrainingWorkoutLog = { ...workoutTrainingSession };
          if (!log.completedExercises.includes(exerciseId)) {
            log.completedExercises.push(exerciseId);
            log.progress =
              (log.completedExercises.length /
                currentSession.exercises.length) *
              100;
          }

          const updatedLog = await db.put("trainingWorkoutLogs", log);
          if (updatedLog) {
            setWorkoutTrainingSession(log);
          }
        }
      } else {
        alert("Exercise not done yet! Complete it before marking as done.");
      }
    }
  };

  useEffect(() => {
    async function getData() {
      const trainingSession = await getCurrentTrainingWorkoutLog();

      if (!trainingSession) return;
      const workout = workoutPrograms.find(
        (s) => s.id === trainingSession.workoutId
      );

      if (workout) {
        setCurrentSession(workout);
      }

      setWorkoutTrainingSession(trainingSession);
      setCompletedExercises(trainingSession.completedExercises);
      setSessionActive(true);
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(" this is the workout session ", workoutTrainingSession);
    // console.log("Exercises tracked in session:", exercisesTrack);
  }, [workoutTrainingSession]);

  return (
    <div>
      <div className='text-white border border-zinc-900 m-4 md:m-6 rounded-lg p-6'>
        <div className='flex justify-between items-center gap-4  flex-wrap mb-6 md:mb-8'>
          <div>
            <div className='bg-blue-500 p-2 rounded'>
              <Timer size={32} />
            </div>
          </div>
          <div>
            <h1 className='font-bold italic tracking-tighter text-lg lg:text-xl uppercase'>
              In Progress: {currentSession.name}
            </h1>
            <p className='text-sm text-blue-500'>
              Status: Keep going, Focus on Form
            </p>
          </div>
          <div>
            {sessionActive ? (
              <button
                className=' bg-blue-500 px-3 md:px-6 py-2 font-bold uppercase rounded-lg cursor-pointer hover:bg-blue-400 text-sm'
                onClick={() => handleCloseSession()}
              >
                Finish Session
              </button>
            ) : (
              <button
                className=' bg-blue-500 px-3 md:px-6 py-2 font-bold uppercase rounded-lg cursor-pointer hover:bg-blue-400 text-sm'
                onClick={() => startSession(currentSession)}
              >
                Start Session
              </button>
            )}
          </div>
        </div>
        {/* showing the progress made in the session */}
        <div className='my-4'>
          <h2 className='flex text-sm gap-4 italic tracking-tighter font-bold text-zinc-500 pl-4 mb-1'>
            progress made so far{" "}
            <span>{workoutTrainingSession?.progress}%</span>{" "}
          </h2>
          <div className='border border-zinc-800 h-3 py-1 rounded-full flex items-center bg-black'>
            <div
              className=' h-2 rounded-full'
              style={{
                backgroundColor: "cyan",
                width: `${workoutTrainingSession?.progress}%`,
              }}
            ></div>
          </div>
        </div>
        <div className=' grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {currentSession.exercises.map((exercise) => {
            return (
              <div
                key={exercise.id}
                className={`border border-zinc-800 py-3 px-4 rounded-lg flex justify-between items-center hover:border-zinc-700 cursor-pointer gap-3 ${
                  completedExercisese.includes(exercise.id)
                    ? "disabled:opacity-50 bg-zinc-900 pointer-events-none cursor-not-allowed"
                    : ""
                }`}
              >
                <div className=''>
                  <h3 className='font-bold italic capitalize mb-2 '>
                    {completedExercisese.includes(exercise.id) ? (
                      <span className='line-through text-gray-400'>
                        {exercise.name}
                      </span>
                    ) : (
                      exercise.name
                    )}
                  </h3>

                  <div className='flex gap-1 flex-wrap'>
                    {exercise.targetMuscleGroups.map((muscle, index) => {
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
                {/* play button to record exercise progress and Tooltip  */}
                <div
                  className='relative inline-block group border border-zinc-800 rounded-lg bg-green-950 p-1'
                  onClick={() => {
                    setSelectedExercise(exercise);
                    setShowRecordExerciseModal(true);
                  }}
                >
                  <Play className='text-green-500 ' size={24} />

                  {/* Tooltip */}
                  <div
                    className='
                  absolute bottom-full left-1/2 mb-1
                  -translate-x-1/2
                  hidden group-hover:block
                  rounded bg-black px-2 py-1
                  text-xs text-white whitespace-nowrap
                '
                  >
                    click play button to log excercise progress{" "}
                  </div>
                </div>
                <div className='flxe-1 flex gap-1 italic font-bold text-sm '>
                  <span className='text-gray-400 text-sm'>Done</span>
                  <input
                    type='checkbox'
                    checked={completedExercisese.includes(exercise.id)}
                    disabled={completedExercisese.includes(exercise.id)}
                    className='scale-150'
                    onChange={() => handleCheckEvent(exercise.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Modal for recording exercise progress */}
      </div>
      {showRecordExerciseModal && selectedExercise && (
        <RecordExerciseModal
          closeModal={closeRecordExerciseModal}
          exercise={selectedExercise}
          mode='sessionExerciseLog'
          workoutId={session.id}
          trainingSession={workoutTrainingSession}
          updateTrainingSession={setWorkoutTrainingSession}
        />
      )}
    </div>
  );
};

export default WorkoutSession;
