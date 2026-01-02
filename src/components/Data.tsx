// import { RechartsDevtools } from "@recharts/devtools";
import { Activity, BicepsFlexed, Trophy } from "lucide-react";
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
      <div>
        <h1 className='text-3xl tracking-tighter italic uppercase font-bold text-center mt-4'>
          Fitness Data Overview
        </h1>
        <p className='text-center text-sm my-2'>
          Track your fitness progress over time with detailed analytics.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-6 py-6'>
        {/* overview left side */}
        <div className='border border-zinc-800 bg-zinc-900 sm:flex-2 lg:flex-3 rounded-3xl p-6 md:px-8  '>
          <div className='flex justify-between mb-6'>
            <div className='flex items-center gap-4'>
              <div className='bg-zinc-800 p-2 rounded-lg'>
                <Trophy />
              </div>
              <div>
                <p className='text-sm text-zinc-500 font-bold'>CURRENT RANK</p>
                <h1 className='tracking-tighter text-3xl italic font-bold text-zinc-500'>
                  NOVICE
                </h1>
                <p className='text-xs text-zinc-400 italic '>
                  starting the journey
                </p>
              </div>
            </div>
            <div>
              <p className='uppercase text-sm font-bold tracking-wider text-zinc-400'>
                TOTAL SCORE
              </p>
              <h2 className='font-bold text-cyan-500'>
                <span className='text-white text-2xl italic'>550</span> PTS
              </h2>
            </div>
          </div>
          {/* progress bar area */}
          <div>
            <div className='flex justify-between px-4 mb-1 items-center'>
              <p className='tracking-widest text-zinc-500 text-xs font-bold'>
                PROGRESS TO ADEPT
              </p>
              <p className='italic tracking-tight text-sm '>
                <span>451</span> pts remaining
              </p>
            </div>
            <div className='border border-zinc-800 rounded-full p-[1px] bg-zinc-950 '>
              <div
                className='bg-zinc-500 h-2 rounded-full'
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* point system right side */}
        <div className='flex-1 rounded-3xl border border-zinc-800 p-6 bg-zinc-900'>
          <div>
            <h3 className='text-zinc-500 font-bold pb-2'>
              EXERCISE POINT SYSTEM
            </h3>
          </div>
          <div>
            <div className='flex justify-between border-y border-zinc-400 text-sm '>
              <p className='text-zinc-400 capitalize'>beginner </p>
              <p className=' '>+5-10 PTS</p>
            </div>
            <div className='flex justify-between border-y border-zinc-400 text-sm '>
              <p className='text-zinc-400 capitalize'>Intermediate </p>
              <p className=' '>+11-15 PTS</p>
            </div>
            <div className='flex justify-between border-y border-zinc-400 text-sm '>
              <p className='text-zinc-400 capitalize'>Advanced </p>
              <p className=''>+16-25 PTS</p>
            </div>
            <div className='flex justify-between border-y border-zinc-400 text-sm '>
              <p className='text-zinc-400 capitalize'>Expert/Elite </p>
              <p className='  '>+26-50 PTS</p>
            </div>
          </div>
          <p className='text-sm italic pt-2 text-zinc-400'>
            Points are based on exercise difficulty, intensity, and required
            skill.
          </p>
        </div>
      </div>
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
