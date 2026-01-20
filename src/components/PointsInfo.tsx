import TierTable from "./charts/TierTable";
import { exercises } from "../lib/exercises";
import { useState } from "react";

const levelOrder = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
  elite: 5,
  legendary: 6,
};
const PointsInfo = () => {
  const [sortBy, setSortBy] = useState("points"); // default sort by points

  const sortedExercises = [...exercises].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "points") {
      return b.unitPoint - a.unitPoint; // descending
    } else if (sortBy === "level") {
      return levelOrder[a.level] - levelOrder[b.level]; // ascending: Newbie → Legendary
    }
    return 0;
  });

  return (
    <div>
      <div className='text-white mx-6 '>
        <h2 className='text-white mt-5 text-xl font-semibold'>
          Everything you need to know about progressions and tiers is here
        </h2>

        <ul className='text-white mt-5 space-y-2 list-disc list-inside'>
          <li>The progression table</li>
          <li>Exercise list with assigned points</li>
        </ul>
      </div>

      <TierTable />
      <div>
        <div className='bg-zinc-950 min-h-screen p-6'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl font-bold text-zinc-100 mb-4'>
              Exercise Points System
            </h2>
            <p className='text-zinc-400 mb-4'>{exercises.length} exercises</p>
            {/* filter and sort buttons */}
            {/* Sort Buttons */}
            <div className='flex gap-2 mb-4'>
              <button
                onClick={() => setSortBy("name")}
                className={`px-3 py-1 rounded ${
                  sortBy === "name" ? "bg-blue-600 text-white" : "bg-zinc-800"
                }`}
              >
                Sort by Name
              </button>
              <button
                onClick={() => setSortBy("points")}
                className={`px-3 py-1 rounded ${
                  sortBy === "points"
                    ? "bg-blue-600 text-zinc-900"
                    : "bg-zinc-800"
                }`}
              >
                Sort by Points
              </button>
              <button
                onClick={() => setSortBy("level")}
                className={`px-3 py-1 rounded ${
                  sortBy === "level"
                    ? "bg-blue-600 text-zinc-900"
                    : "bg-zinc-800"
                }`}
              >
                Sort by Level
              </button>
            </div>

            <div className='overflow-x-auto rounded-xl border border-zinc-800'>
              <table className='min-w-full bg-zinc-900'>
                <thead className='bg-zinc-800'>
                  <tr>
                    <th className='px-4 py-3 text-left text-sm font-semibold text-zinc-200'>
                      Exercise
                    </th>
                    <th className='px-4 py-3 text-left text-sm font-semibold text-zinc-200'>
                      Region
                    </th>
                    <th className='px-4 py-3 text-left text-sm font-semibold text-zinc-200'>
                      Level
                    </th>
                    <th className='px-4 py-3 text-left text-sm font-semibold text-zinc-200'>
                      Measurement
                    </th>
                    <th className='px-4 py-3 text-left text-sm font-semibold text-zinc-200'>
                      Points
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {sortedExercises.map((ex, index) => (
                    <tr
                      key={ex.name}
                      className={`border-t border-zinc-800 transition ${
                        index % 2 === 0 ? "bg-zinc-900" : "bg-zinc-900/70"
                      } hover:bg-zinc-800`}
                    >
                      <td className='px-4 py-3 font-medium text-zinc-100'>
                        {ex.name}
                      </td>
                      <td className='px-4 py-3 text-zinc-300'>
                        {ex.bodyRegion}
                      </td>
                      <td className='px-4 py-3 text-zinc-300'>{ex.level}</td>
                      <td className='px-4 py-3 text-zinc-300'>
                        {ex.measurement}
                      </td>
                      <td className='px-4 py-3 font-semibold text-emerald-400'>
                        {ex.unitPoint}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsInfo;
