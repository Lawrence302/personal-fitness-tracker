import { ColumnsSettings, Trash, Plus, Save } from "lucide-react";

type RecordExerciseModalProps = {
  closeModal: () => void;
};
const RecordExerciseModal = ({ closeModal }: RecordExerciseModalProps) => {
  return (
    <div
      className='absolute inset-0 z-10 bg-zinc-950 border border-white flex justify-center items-center'
      onClick={() => closeModal()}
    >
      <div className='p-6 w-[90%] md:w-[50%] lg:w-[40%] bg-zinc-900 rounded-lg'>
        <div className=' flex justify-between items-center'>
          <div className='mb-4'>
            <h1 className='text-lg text-white font-bold'>
              Log Standart Push-ups
            </h1>
            <p className='text-xs'>Tracking: Repititions</p>
          </div>
          <div>
            <ColumnsSettings />
          </div>
        </div>
        <div className='flex gap-6 items-center border border-zinc-800 bg-zinc-900 p-4 rounded-lg'>
          <h3>#1</h3>
          <div className='flex-1'>
            <p className='text-sm mb-1'>REPS</p>
            <div className='flex items-center  gap-4 '>
              <input
                className='border border-zinc-800 w-full bg-zinc-950 p-2 text-white'
                type='number'
                placeholder='0'
              />
              <Trash className='text-red-500 cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='my-4'>
          <button className='flex border-2 border-dashed  border-zinc-800 w-full p-2 rounded-lg justify-center gap-4 cursor-pointer hover:border-zinc-700 '>
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
          <button className='flex justify-center w-full bg-cyan-700 hover:bg-cyan-600 text-white font-bold p-2 cursor-pointer rounded-lg'>
            <Save />
            Save Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordExerciseModal;
