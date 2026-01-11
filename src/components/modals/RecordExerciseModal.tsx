import React, { useState } from "react";
import { X, Trash, Plus, Save } from "lucide-react";
import type { Exercise } from "../../lib/types";
import { initDB } from "../../lib/db";
import { getCurrentSession } from "../../lib/globalFunctions";
import { v4 as uuid } from "uuid";
import usePointsStore from "../../stores/pointsStore";

type RecordExerciseModalProps = {
  closeModal: () => void;
  exercise: Exercise;
  mode: "quickLog" | "sessionExerciseLog";
  recordInTrack?: React.Dispatch<React.SetStateAction<string[]>>;
  exerciseId?: string;
  workoutId?: string;
};
const RecordExerciseModal = ({
  closeModal,
  exercise,
  mode,
  recordInTrack,
  exerciseId,
  workoutId,
}: RecordExerciseModalProps) => {
  const [logInputs, setLogInputs] = useState<number[]>([0]);
  const addPoints = usePointsStore((state) => state.incrementPoints);

  // disable save button if all inputs are zero
  const saveButtonDisabled = logInputs.reduce((sum, val) => sum + val, 0) === 0;

  // sum of log inputs
  const total = logInputs.reduce((sum, val) => sum + val, 0);

  // adde Exercises log function
  const addExerciseLog = async () => {
    // get the current active session
    const currentSession = await getCurrentSession();

    const db = await initDB();
    const newLog = {
      id: uuid(),
      activitySessionId: currentSession.id, // to be linked later
      exerciseId: exercise.id,
      exerciseName: exercise.name,
      workoutRoutineId: workoutId, // can be extended later
      setsCompleted: logInputs.length,
      totalRepsOrDuration: total,
      setDetails: logInputs.map((val, index) => ({
        setNumber: index + 1,
        repsOrDuration: val,
        // extraWeightUsed: undefined, // can be extended later
      })),
      pointsEarned: total * exercise.unitPoint,
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD
      dateTime: new Date().toISOString(),
    };

    await db.put("exerciseLogs", newLog);
    return newLog;
  };

  const updateLogInput = (number: number, index: number) => {
    setLogInputs((prev) => {
      const newLogInputs = [...prev]; // create a copy
      newLogInputs[index] = number; // update the value at the index

      return newLogInputs; // set new array
    });
    // console.log(logInputs);
  };

  const handleAddSet = () => {
    setLogInputs((prev) => [...prev, 0]);
  };

  const saveWorkout = async () => {
    if (mode === "sessionExerciseLog") {
      // additional logic for session exercise log
      if (total === 0) {
        alert("Please log at least one set before saving.");
        return;
      }
      console.log("Logged for session exercise");

      // add the new exercise log
      const savedLog = await addExerciseLog();
      console.log("Saved Exercise Log:", savedLog);
      // add points to global store
      if (savedLog?.pointsEarned) {
        addPoints(savedLog.pointsEarned);
      }

      // mark exercise as tracked in session
      if (recordInTrack && savedLog && exerciseId !== undefined) {
        recordInTrack((prev) => {
          if (prev.includes(exerciseId)) {
            return prev; // already tracked
          }
          return [...prev, exerciseId];
        }); // mark as tracked
      }
    }

    if (mode === "quickLog") {
      console.log("Logged for quick log");
      // adding new exercise log
      const savedLog = await addExerciseLog();

      // console.log("Saved Exercise Log:", savedLog);

      // add points to global store
      if (savedLog?.pointsEarned) {
        addPoints(savedLog.pointsEarned);
      }
    }

    closeModal();
  };

  return (
    <div
      className='fixed absolute inset-0 z-10 bg-zinc-950/70 border border-white text-zinc-500 flex justify-center items-center overflow-auto pb-10 md:pb-0'
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        closeModal();
      }}
    >
      <div className='p-6 w-[90%] md:w-[50%] lg:w-[40%] bg-zinc-900 rounded-lg pb-6'>
        <div className=' flex justify-between items-center'>
          <div className='mb-4'>
            <h1 className='text-lg text-white font-bold'>
              Log {exercise.name}
            </h1>
            <p className='text-xs'>Tracking: Repititions</p>
          </div>
          <div>
            <X
              className='hover:text-zinc-300 cursor-pointer'
              onClick={() => closeModal()}
            />
          </div>
        </div>
        <div className=' flex flex-col gap-3 overflow-auto max-h-54'>
          {/* in case of nultiple inputs */}
          {logInputs.map((val, index) => {
            return (
              <div
                key={index}
                className='flex gap-6 items-center border border-zinc-800 bg-zinc-900 p-4 rounded-lg'
              >
                <h3>#{index + 1}</h3>
                <div className='flex-1'>
                  <p className='text-sm mb-1'>{exercise.measurement}</p>
                  <div className='flex items-center  gap-4 '>
                    <input
                      className='border border-zinc-800 w-full bg-zinc-950 p-2 text-white'
                      type='number'
                      placeholder='0'
                      value={val || ""}
                      onChange={(e) =>
                        updateLogInput(Number(e.target.value), index)
                      }
                    />
                    <Trash className='text-red-500 cursor-pointer' />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='my-4'>
          <button
            className='flex border-2 border-dashed  border-zinc-800 w-full p-2 rounded-lg justify-center gap-4 cursor-pointer hover:border-cyan-500  hover:text-cyan-500'
            onClick={handleAddSet}
          >
            <Plus /> Add Set
          </button>
        </div>
        <div>
          <p>Notes / Feelings</p>
          <div>
            <textarea rows={4} className='bg-zinc-950 w-full rounded' />
          </div>
        </div>
        <div className='my-4'>
          <button
            className={`flex justify-center w-full bg-cyan-700 hover:bg-cyan-600 text-white font-bold p-2 cursor-pointer rounded-lg ${
              saveButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={saveButtonDisabled}
            onClick={saveWorkout}
          >
            <Save />
            Save Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordExerciseModal;
