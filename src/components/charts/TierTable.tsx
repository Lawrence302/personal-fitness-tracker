const tiers = [
  {
    tier: "Newbie",
    points: "0 – 850",
    notes:
      "First exposure; learning form, building consistency; quick wins early",
  },
  {
    tier: "Beginner",
    points: "851 – 2,699",
    notes:
      "Starting to build strength and habit; slightly more challenging exercises",
  },
  {
    tier: "Intermediate",
    points: "2,700 – 6,999",
    notes: "Consistent effort over weeks/months; noticeable gains",
  },
  {
    tier: "Advanced",
    points: "7,000 – 13,999",
    notes:
      "High consistency, multiple sets/day, able to do intermediate → advanced exercises",
  },
  {
    tier: "Expert",
    points: "14,000 – 27,999",
    notes: "Very dedicated, serious calisthenics practitioner",
  },
  {
    tier: "Elite",
    points: "28,000 – 53,999",
    notes: "Extremely strong; capable of elite holds (planche, front lever)",
  },
  {
    tier: "Legendary",
    points: "54,000+",
    notes: "Rare mastery; almost professional-level calisthenics",
  },
];

const tierStyles = {
  NEWBIE: "text-blue-400 bg-blue-900/20 font-normal",
  BEGINNER: "text-emerald-400 bg-emerald-900/20 font-normal",
  INTERMEDIATE: "text-lime-400 bg-lime-900/20 font-medium",
  ADVANCED: "text-yellow-400 bg-yellow-900/20 font-medium",
  EXPERT: "text-amber-600 bg-amber-900/25 font-semibold",
  ELITE: "text-pink-400 bg-pink-900/20 font-semibold",
  LEGENDARY:
    "text-red-400 bg-red-900/30 font-bold uppercase tracking-wide border-b-2 border-yellow-300",
};

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
                <td
                  className={`px-4 py-3 font-medium ${tierStyles[item.tier.toUpperCase() as keyof typeof tierStyles]}`}
                >
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
