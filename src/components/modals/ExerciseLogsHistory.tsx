import { useEffect, useState } from "react";
import { initDB } from "../../lib/db";
import { X } from "lucide-react";
import { ExerciseLog } from "../../lib/types";
import { DateTime } from "luxon";

interface WorkoutLogsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PAGE_SIZE = 10;

const ExerciseLogsHistory = ({ isOpen, onClose }: WorkoutLogsModalProps) => {
  const [logs, setLogs] = useState<ExerciseLog[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Fetch logs from IndexedDB
  useEffect(() => {
    if (!isOpen) return;

    const fetchLogs = async () => {
      const db = await initDB();
      const allLogs = await db.getAll("exerciseLogs");
      console.log(allLogs);

      // Sort by most recent first
      const sortedLogs = allLogs.sort(
        (a: ExerciseLog, b: ExerciseLog) =>
          new Date(b.globalDateTime).getTime() -
          new Date(a.globalDateTime).getTime(),
      );

      setLogs(sortedLogs);
      setVisibleCount(PAGE_SIZE); // Reset pagination each time modal opens
    };

    fetchLogs();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'>
      <div className='bg-zinc-950 w-full max-w-2xl rounded-xl shadow-lg p-6 relative max-h-[80vh] overflow-auto'>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-zinc-400 hover:text-white'
        >
          <X size={24} />
        </button>

        <h2 className='text-2xl font-bold text-white mb-4'>Workout Logs</h2>

        {logs.length === 0 ? (
          <p className='text-zinc-400'>No workout logs yet.</p>
        ) : (
          <ul className='space-y-4'>
            {logs.slice(0, visibleCount).map((log) => (
              <li
                key={log.id}
                className='bg-zinc-900 p-4 rounded flex flex-col md:flex-row justify-between'
              >
                <div>
                  <p className='font-bold text-white'>{log.exerciseName}</p>
                  <p className='text-sm text-zinc-400'>
                    {DateTime.fromISO(log.globalDateTime, {
                      zone: log.timeZone,
                    }).toLocaleString(DateTime.DATETIME_SHORT)}
                  </p>
                </div>
                {log.totalRepsOrDuration && (
                  <p className='text-sm text-cyan-500 mt-2 md:mt-0'>
                    {log.measurement === "reps"
                      ? `Count: ${log.totalRepsOrDuration} reps`
                      : `Time: ${log.totalRepsOrDuration} sec`}
                  </p>
                )}
                {/* {log.notes && (
                  <p className="text-xs text-zinc-400 mt-1 md:mt-0">{log.notes}</p>
                )} */}
              </li>
            ))}
          </ul>
        )}

        {/* Load More button */}
        {visibleCount < logs.length && (
          <div className='flex justify-center mt-4'>
            <button
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
              className='bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-4 rounded'
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseLogsHistory;
