import { useState } from "react";
import { BicepsFlexed } from "lucide-react";
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from "recharts";
import { initDB } from "../../lib/db";
import { useEffect } from "react";

type frequencyDataProps = {
  name: string;
  count: number;
};

const ExerciseFrequencyChart = () => {
  const [exerciseFrequencyData, setExerciseFrequencyData] = useState<
    frequencyDataProps[]
  >([]);
  useEffect(() => {
    const getExerciseFrequencies = async () => {
      const db = await initDB();
      const logs = await db.getAll("exerciseLogs");
      // console.log(logs);

      // using Map to count frequencies
      const frequencyMap: Record<string, number> = {};

      logs.forEach((log) => {
        const name = log.exerciseName;
        if (!frequencyMap[name]) {
          frequencyMap[name] = 1;
        } else {
          frequencyMap[name] += 1;
        }
      });
      // converting it into an array
      const frequenciesArray = Object.entries(frequencyMap).map(
        ([name, count]) => ({
          name,
          count,
        }),
      );

      setExerciseFrequencyData(frequenciesArray);
      // console.log(frequenciesArray);
    };

    getExerciseFrequencies();
  }, []);
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
