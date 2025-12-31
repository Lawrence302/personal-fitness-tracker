import { Layers } from "lucide-react";

const workoutPrograms = [
  {
    name: "Full body foundations",
    exercises: [
      { name: "AIR squats", level: "beginner" },
      { name: "dead hang", level: "beginner" },
      { name: "forward lunges", level: "beginner" },
      { name: "push-ups", level: "begginer" },
    ],
  },
  {
    name: "Full body foundations",
    exercises: [
      { name: "AIR squats", level: "beginner" },
      { name: "dead hang", level: "beginner" },
      { name: "forward lunges", level: "beginner" },
      { name: "push-ups", level: "begginer" },
    ],
  },
  {
    name: "Full body foundations",
    exercises: [
      { name: "AIR squats", level: "beginner" },
      { name: "dead hang", level: "beginner" },
      { name: "forward lunges", level: "beginner" },
      { name: "push-ups", level: "begginer" },
    ],
  },
];

const Workouts = () => {
  return (
    <div className='p-4 overflow-y-auto'>
      <div className='py-6'>
        <h1 className='text-white text-3xl font-bold italic'>
          TRAINING MODULE
        </h1>
        <p className='text-zinc-500 text-lg font-bold'>
          Trageted routine for specific physical adaptations.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 '>
        {workoutPrograms.map((program, index) => {
          return (
            <div
              key={index}
              className='border border-zinc-800 bg-zinc-900 min-w-[250px] rounded-xl p-6'
            >
              <div className='flex justify-between'>
                <div className='bg-zinc-800 p-4 rounded-xl'>
                  <Layers className='text-cyan-500 ' />
                </div>

                <div>
                  <p className='text-cyan-500'>LEVEL 1</p>
                  <p className='text-zinc-500'>20M MAX</p>
                </div>
              </div>
              <div className='py-6'>
                <h2 className='text-white text-2xl font-bold italic uppercase'>
                  FULL BODY FOUNDATIONS
                </h2>
                <p className='text-zinc-500 text-sm pt-4'>
                  A balance routine for beginners to build foundational
                  strength.
                </p>
              </div>
              <div>
                {program.exercises.map((exercise, index) => {
                  return (
                    <div key={index} className='flex justify-between'>
                      <p className='text-zinc-400  uppercase font-bold'>
                        {exercise.name}
                      </p>
                      <p className='text-zinc-500 uppercase text-xs font-bold'>
                        [{exercise.level}]
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className='py-4 text-white text-lg '>
                <button className='w-full rounded-xl bg-zinc-800 py-2 uppercase font-bold italic'>
                  Begin Workout
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Workouts;
