const tiers = [
  {
    tier: "Newbie",
    points: "0 – 800",
    notes:
      "First exposure; learning form, building consistency; quick wins early",
  },
  {
    tier: "Beginner",
    points: "801 – 2,499",
    notes:
      "Starting to build strength and habit; slightly more challenging exercises",
  },
  {
    tier: "Intermediate",
    points: "2,500 – 6,499",
    notes: "Consistent effort over weeks/months; noticeable gains",
  },
  {
    tier: "Advanced",
    points: "6,500 – 12,999",
    notes:
      "High consistency, multiple sets/day, able to do intermediate → advanced exercises",
  },
  {
    tier: "Expert",
    points: "13,000 – 25,999",
    notes: "Very dedicated, serious calisthenics practitioner",
  },
  {
    tier: "Elite",
    points: "26,000 – 51,999",
    notes: "Extremely strong; capable of elite holds (planche, front lever)",
  },
  {
    tier: "Legendary",
    points: "52,000+",
    notes: "Rare mastery; almost professional-level calisthenics",
  },
];

export default function TierTable() {
  return (
    <div className='w-full max-w-5xl mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4 text-zinc-500'>
        User Progression Tiers
      </h2>

      <div className='overflow-x-auto rounded-lg shadow'>
        <table className='min-w-full  border border-zinc-800 rounded'>
          <thead className='bg-zinc-900'>
            <tr>
              <th className='px-4 py-3 text-left text-sm font-semibold text-zinc-300'>
                Tier
              </th>
              <th className='px-4 py-3 text-left text-sm font-semibold text-zinc-300'>
                Points (Cumulative)
              </th>
              <th className='px-4 py-3 text-left text-sm font-semibold text-zinc-300'>
                Notes / Rationale
              </th>
            </tr>
          </thead>

          <tbody>
            {tiers.map((item, index) => (
              <tr
                key={item.tier}
                className={`border-t ${
                  index % 2 === 0 ? "bg-zinc-800" : "bg-zinc-900"
                }`}
              >
                <td className='px-4 py-3 font-medium text-zinc-400'>
                  {item.tier}
                </td>
                <td className='px-4 py-3 text-zinc-400'>{item.points}</td>
                <td className='px-4 py-3 text-zinc-400'>{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
