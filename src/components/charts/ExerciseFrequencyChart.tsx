import { BicepsFlexed } from "lucide-react";
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from "recharts";

// const fitnessChartData = [
//   {
//     date: "2025-01-01",
//     density: 1.2,
//     sessions: 2,
//   },
//   {
//     date: "2025-01-03",
//     density: 1.5,
//     sessions: 3,
//   },
//   {
//     date: "2025-01-05",
//     density: 1.8,
//     sessions: 4,
//   },
//   {
//     date: "2025-01-07",
//     density: 3.6,
//     sessions: 3,
//   },
//   {
//     date: "2025-01-09",
//     density: 2.0,
//     sessions: 2,
//   },
//   {
//     date: "2025-01-10",
//     density: 4.0,
//     sessions: 5,
//   },
//   {
//     date: "2025-01-12",
//     density: 5.0,
//     sessions: 5,
//   },
// ];

const exerciseFrequencyData = [
  { name: "Push-ups", count: 15 },
  { name: "Pull-ups", count: 25 },
  { name: "Squats", count: 22 },
  { name: "Plank", count: 10 },
  { name: "Burpees", count: 8 },
  { name: "Lunges", count: 12 },
];

const ExerciseFrequencyChart = () => {
  return (
    <div className='bg-zinc-900 border border-zinc-800 rounded-xl my-6 py-8'>
      <h3 className='text-[10px] font-black mb-8 text-zinc-500 capitalize tracking-widest flex items-center gap-2 pl-4'>
        <BicepsFlexed className='w-4 h-4 text-cyan-500' /> FAVORITE EXERCISES
      </h3>
      <div className='w-full h-[250px] md:h-[350px] border-white '>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={exerciseFrequencyData} layout='vertical'>
            <Bar
              dataKey='count'
              barSize={15}
              radius={[0, 4, 4, 0]}
              fill='#06b6d4'
            />

            <XAxis type='number' hide />
            <YAxis
              dataKey='name'
              type='category'
              stroke='#6b7280'
              fontSize={9}
              width={80}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "#27272a" }}
              contentStyle={{
                backgroundColor: "#18181b",
                border: "none",
                borderRadius: "12px",
                fontSize: "10px",
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExerciseFrequencyChart;
