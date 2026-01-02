import { Activity } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const fitnessChartData = [
  {
    date: "2025-01-01",
    intensity: 1.2,
    sessions: 2,
  },
  {
    date: "2025-01-03",
    intensity: 1.5,
    sessions: 3,
  },
  {
    date: "2025-01-05",
    intensity: 1.8,
    sessions: 4,
  },
  {
    date: "2025-01-07",
    intensity: 3.6,
    sessions: 3,
  },
  {
    date: "2025-01-09",
    intensity: 2.0,
    sessions: 2,
  },
  {
    date: "2025-01-10",
    intensity: 4.0,
    sessions: 5,
  },
  {
    date: "2025-01-12",
    intensity: 5.0,
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
const SessionVsIntensityChart = () => {
  return (
    <div className=' bg-zinc-900 border border-zinc-800 rounded-xl py-8 my-6'>
      <h3 className='text-[10px] font-black mb-8 text-zinc-500 capitalize tracking-widest flex items-center gap-2 pl-4'>
        <Activity className='w-4 h-4 text-cyan-500' /> Training Density Vs
        Sessions Over Time
      </h3>
      <div className='w-full  h-[250px] md:h-72'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={fitnessChartData}>
            <CartesianGrid
              strokeDasharray={"3 3"}
              stroke='#1f2937'
              vertical={false}
            />
            <XAxis
              fontSize={10}
              dataKey={"date"}
              axisLine={false}
              stroke='#6b7280'
              tickFormatter={(date) => new Date(date).toLocaleDateString()}
            />
            <YAxis
              fontSize={10}
              tickLine={false}
              axisLine={false}
              stroke='#22c55e'
              domain={[0, 5]} // fits data automatically
              ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]}
            />
            <YAxis
              yAxisId={"right"}
              orientation='right'
              fontSize={10}
              axisLine={false}
              tickLine={false}
              stroke='#facc15'
              domain={[1, 5]} // fits data automatically
              ticks={[1, 2, 3, 4, 5]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                border: "none",
                borderRadius: "12px",
                fontSize: "10px",
              }}
            />
            <Line dataKey='intensity' stroke='#22c55e' strokeWidth={2} />
            <Line yAxisId={"right"} dataKey={"sessions"} stroke='#facc15' />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SessionVsIntensityChart;
