import { Activity } from "lucide-react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const fitnessChartData = [
  {
    date: "2025-01-01",
    density: 1.2,
    sessions: 2,
  },
  {
    date: "2025-01-03",
    density: 1.5,
    sessions: 3,
  },
  {
    date: "2025-01-05",
    density: 1.8,
    sessions: 4,
  },
  {
    date: "2025-01-07",
    density: 3.6,
    sessions: 3,
  },
  {
    date: "2025-01-09",
    density: 2.0,
    sessions: 2,
  },
  {
    date: "2025-01-10",
    density: 4.0,
    sessions: 5,
  },
  {
    date: "2025-01-12",
    density: 5.0,
    sessions: 5,
  },
];

// const exerciseFrequencyData = [
//   { name: "Push-ups", count: 15 },
//   { name: "Pull-ups", count: 25 },
//   { name: "Squats", count: 22 },
//   { name: "Plank", count: 10 },
//   { name: "Burpees", count: 8 },
//   { name: "Lunges", count: 12 },
// ];

const IntensityChart = () => {
  return (
    <div className='bg-zinc-900 border border-zinc-800 rounded-xl my-6 py-8'>
      <h3 className='text-[10px] font-black mb-8 text-zinc-500 capitalize tracking-widest flex items-center gap-2 pl-4'>
        <Activity className='w-4 h-4 text-green-500' /> Training Density Over
        Time
      </h3>
      <div className='w-full h-[250px] md:h-[350px] border-white '>
        <ResponsiveContainer>
          <AreaChart data={fitnessChartData}>
            <defs>
              <linearGradient id='densityGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#22c55e' stopOpacity={0.3} />
                <stop offset='95%' stopColor='#22c55e' stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              strokeDasharray={"3 3"}
              stroke='#1f2937'
            />

            <Area
              dataKey='density'
              strokeWidth={3}
              fillOpacity={1}
              stroke='#22c55e'
              type={"monotone"}
              fill='url(#densityGradient)'
            />
            <YAxis
              fontSize={10}
              axisLine={false}
              tickLine={false}
              stroke='#22c55e'
              domain={[0, 5]}
              ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]}
            />
            <XAxis
              dataKey={"date"}
              axisLine={false}
              tickLine={false}
              fontSize={10}
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                border: "none",
                borderRadius: "12px",
                fontSize: "10px",
              }}
            />

            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IntensityChart;
