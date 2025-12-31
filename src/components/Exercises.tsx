import { Search } from "lucide-react";
import ExerciseCard from "./ExerciseCard";

const exercises = [
  {
    name: "Push-up",
    level: "Beginner",
    musclesAffected: ["Chest", "Shoulders", "Triceps", "Core"],
    basicInstruction:
      "Keep your core tight, body in a straight line, and elbows at about a 45-degree angle as you lower and push up.",
  },
  {
    name: "Pull-up",
    level: "Intermediate",
    musclesAffected: ["Back", "Biceps", "Shoulders"],
    basicInstruction:
      "Start from a dead hang and pull until your chin goes over the bar, using a full range of motion.",
  },
  {
    name: "Squat",
    level: "Beginner",
    musclesAffected: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
    basicInstruction:
      "Keep your chest up and back neutral as you lower your hips until your thighs are parallel to the ground.",
  },
  {
    name: "Dead Hang",
    level: "Beginner",
    musclesAffected: ["Forearms", "Grip", "Shoulders"],
    basicInstruction:
      "Hang from the bar with straight arms, relaxed shoulders, and controlled breathing.",
  },
  {
    name: "Plank",
    level: "Beginner",
    musclesAffected: ["Core", "Shoulders", "Glutes"],
    basicInstruction:
      "Maintain a straight line from head to heels while keeping your core tight and hips level.",
  },
];

const Exercises = () => {
  return (
    <div className='p-4 '>
      <div className='md:flex justify-between items-center'>
        <div>
          <h1 className='text-white font-bold text-2xl md:text-3xl italic tracking-tighter '>
            BODY WEIGHT EXERCISES
          </h1>
          <p className='text-zinc-500 italic font-bold text-lg py-2'>
            Study the mechanics of bodyweight mastery.
          </p>
        </div>
        <div className='flex border border-zinc-800 bg-zinc-900 w-full h-fit md:w-64  rounded-full gap-2 pl-2 items-center'>
          <Search className='text-white' />
          <input
            className='border border-zinc-800  text-white focus:border-cyan-500 outline-none w-full   rounded-r-full px-2 py-2'
            type='search'
            placeholder='Search exercise...'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6'>
        {exercises.map((exercise, index) => {
          return <ExerciseCard exercise={exercise} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Exercises;
