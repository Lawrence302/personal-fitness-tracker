import { Exercise } from "../../lib/types";

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: Exercise;
  onQuickLog: (exercise: Exercise) => void;
}

const ExerciseDetailModal = ({
  isOpen,
  onClose,
  exercise,
  onQuickLog,
}: ExerciseModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed w-full border border-white inset-0 bg-black py-8 px-4  pb-24 md:pb-8 flex justify-center'>
      <div className='relative bg-zinc-950 z-15 p-4 text-white h-full md:w-[80%] overflow-y-scroll rounded-lg max-w-3xl mx-auto '>
        {/* Close Button */}
        <button
          className='absolute top-4 right-4 text-zinc-400 hover:text-white'
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className='text-xl md:text-2xl font-bold my-4 text-center'>
          {exercise.name}
        </h2>
        <div className='my-4'>
          {/* Media Section (for future images/videos) */}
          {Array.isArray(exercise.media) && exercise.media.length > 0 ? (
            <div className='mb-6'>
              <div className='flex gap-2 overflow-x-auto'>
                {exercise.media.map((item: any, idx: number) => (
                  <img
                    key={idx}
                    src={item.url}
                    alt={item.alt || "Exercise media"}
                    className='w-40 h-28 object-cover rounded-md'
                  />
                ))}
              </div>
            </div>
          ) : (
            <p className='text-zinc-400 italic'>No media available yet</p>
          )}
        </div>

        {/* Story-like Exercise Info */}
        <div className='space-y-6 text-sm'>
          <p>
            <span className='font-bold'>Exercise Overview:</span> This is a{" "}
            <span className='italic'>{exercise.level}</span> level exercise,
            which focuses primarily on your{" "}
            <span className='italic'>{exercise.bodyRegion}</span>. When done
            properly, it activates the following muscles:{" "}
            <span className='italic'>
              {exercise.targetMuscleGroups.join(", ")}
            </span>
            .
          </p>
          <p>
            <span className='font-bold'>How to Do This Exercise:</span> To do
            this exercise correctly, you need to follow this pattern:{" "}
            <i>"{exercise.description}"</i>
          </p>
          <p>
            <span className='font-bold'>Equipment:</span> This exercise is
            bodyweight-based, meaning no additional equipment is required.
          </p>

          <div>
            <span className='font-bold'>Mistakes to Avoid:</span> Make sure to
            avoid the following mistakes:
            <ul className='list-disc ml-5'>
              {exercise.mistakes.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>

          <p>
            <span className='font-bold'>Progression: </span>
            {exercise.progression.length > 0 ? (
              <>
                {exercise.level === "beginner" ? (
                  <span className='italic'>
                    This is a beginner exercise, so no progression is specified
                    yet.
                  </span>
                ) : (
                  <>
                    <span className='italic'>
                      As you improve, you can progress to the following
                      exercises: {exercise.progression.join(" → ")}.
                    </span>
                    <span className='text-sm text-zinc-400'>
                      Try starting with a progression that feels comfortable to
                      you, then move up as you get stronger.
                    </span>
                  </>
                )}
              </>
            ) : (
              <span className='italic'>
                No specific progression available for this exercise.
              </span>
            )}
          </p>

          <p>
            <span className='font-bold'>Tags:</span> This exercise falls under
            the following categories:{" "}
            <span className='italic'>{exercise.tags.join(", ")}</span>.
          </p>

          <p>
            <span className='font-bold'>Type:</span> This is a{" "}
            <span className='italic'>{exercise.type}</span> exercise.
          </p>

          {exercise.extraWeight && (
            <p>
              <span className='font-bold'>Extra Weight: </span>
              {exercise.extraWeight.value} {exercise.extraWeight.unit} (optional
              for progression)
            </p>
          )}

          <p className='text-xs italic text-zinc-400'>
            <span className='font-bold'>Added on:</span>{" "}
            {new Date(exercise.dateCreated).toLocaleDateString()}{" "}
            {exercise.lastPerformed && (
              <span>
                {" "}
                | <span className='font-bold'>Last performed:</span>{" "}
                {new Date(exercise.lastPerformed).toLocaleDateString()}
              </span>
            )}
          </p>
        </div>

        <p>
          If you just completed this exercise, click the button below to log it
          quickly.
        </p>
        {/* Quick Log Button */}
        <div className='mt-6 text-center'>
          <button
            onClick={() => onQuickLog(exercise)}
            className='bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded'
          >
            Quick Log This Exercise
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailModal;
