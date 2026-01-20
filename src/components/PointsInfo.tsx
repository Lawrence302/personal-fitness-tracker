import TierTable from "./charts/TierTable";
import { exercises } from "../lib/exercises";

const PointsInfo = () => {
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
                  {exercises.map((ex, index) => (
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
