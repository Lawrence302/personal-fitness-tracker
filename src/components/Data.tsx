// import { RechartsDevtools } from "@recharts/devtools";
import { Activity, BicepsFlexed } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  AreaChart,
  Area,
  Bar,
  BarChart,
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

const exerciseFrequencyData = [
  { name: "Push-ups", count: 15 },
  { name: "Pull-ups", count: 25 },
  { name: "Squats", count: 22 },
  { name: "Plank", count: 10 },
  { name: "Burpees", count: 8 },
  { name: "Lunges", count: 12 },
];

const Data = () => {
  return (
    <div className='text-white m-2 md:m-6'>
      {/* Graph showing training sessions and density over time */}
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
              <Line dataKey='density' stroke='#22c55e' strokeWidth={2} />
              <Line yAxisId={"right"} dataKey={"sessions"} stroke='#facc15' />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Graph showing training sessions over time */}
      <div className='bg-zinc-900 border border-zinc-800 rounded-xl my-6 py-8'>
        <h3 className='text-[10px] font-black mb-8 text-zinc-500 capitalize tracking-widest flex items-center gap-2 pl-4'>
          <Activity className='w-4 h-4 text-yellow-500' /> Training Sessions
          Over Time
        </h3>
        <div className='w-full h-[250px] md:h-[350px] border-white '>
          <ResponsiveContainer>
            <AreaChart data={fitnessChartData}>
              <defs>
                <linearGradient
                  id='sessionGradient'
                  x1='0'
                  y1='0'
                  x2='0'
                  y2='1'
                >
                  <stop offset='5%' stopColor='#facc15' stopOpacity={0.3} />
                  <stop offset='95%' stopColor='#facc15' stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                strokeDasharray={"3 3"}
                stroke='#1f2937'
              />

              <Area
                dataKey='sessions'
                strokeWidth={3}
                fillOpacity={1}
                stroke='#facc15'
                type={"monotone"}
                fill='url(#sessionGradient)'
              />
              <YAxis
                fontSize={10}
                axisLine={false}
                tickLine={false}
                stroke='#facc15'
                domain={[1, 5]}
                ticks={[1, 2, 3, 4, 5]}
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

      {/* Graph showing training Density over time */}
      <div className='bg-zinc-900 border border-zinc-800 rounded-xl my-6 py-8'>
        <h3 className='text-[10px] font-black mb-8 text-zinc-500 capitalize tracking-widest flex items-center gap-2 pl-4'>
          <Activity className='w-4 h-4 text-green-500' /> Training Density Over
          Time
        </h3>
        <div className='w-full h-[250px] md:h-[350px] border-white '>
          <ResponsiveContainer>
            <AreaChart data={fitnessChartData}>
              <defs>
                <linearGradient
                  id='densityGradient'
                  x1='0'
                  y1='0'
                  x2='0'
                  y2='1'
                >
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

      {/* Graph showing workout frequency. Most Frequent Exercises */}
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
    </div>
  );
};

export default Data;
