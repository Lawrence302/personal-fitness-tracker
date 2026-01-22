interface GoalReminderModalProps {
  isOpen: boolean;
  goal: string | null;
  onClose: () => void;
}

const GoalReminderModal = ({
  isOpen,
  goal,
  onClose,
}: GoalReminderModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
      <div className='bg-zinc-950 rounded-xl p-6 w-80 shadow-lg text-center text-white'>
        <h2 className='text-xl font-bold mb-4'>Your Goal</h2>
        <p className='text-sm mb-6'>
          {goal?.trim()
            ? goal
            : "You haven't set a goal yet. Time to define your target!"}
        </p>
        <p className='text-xs italic text-zinc-400 mb-4'>
          Remember why you started. Stay consistent!
        </p>
        <button
          className='bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-4 rounded'
          onClick={onClose}
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default GoalReminderModal;
