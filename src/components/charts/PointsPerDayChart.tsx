import { initDB } from "../../lib/db";
import { useEffect, useState } from "react";

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

// const dummySessions: ActivitySession[] = [
//   {
//     id: "session-001",
//     startTime: "2026-01-10T08:15:00.000Z",
//     endTime: "2026-01-10T08:45:00.000Z",
//     exerciseLogIds: ["log-001", "log-002"],
//     totalPoints: 120,
//     active: 0,
//   },
//   {
//     id: "session-009",
//     startTime: "2026-01-13T08:15:00.000Z",
//     endTime: "2026-01-13T08:45:00.000Z",
//     exerciseLogIds: ["log-001", "log-002"],
//     totalPoints: 100,
//     active: 0,
//   },
//   {
//     id: "session-002",
//     startTime: "2026-01-10T18:30:00.000Z",
//     endTime: "2026-01-10T19:00:00.000Z",
//     exerciseLogIds: ["log-003", "log-004"],
//     totalPoints: 90,
//     active: 0,
//   },
//   {
//     id: "session-003",
//     startTime: "2026-01-11T07:50:00.000Z",
//     endTime: "2026-01-11T08:20:00.000Z",
//     exerciseLogIds: ["log-005", "log-006", "log-007"],
//     totalPoints: 150,
//     active: 0,
//   },
//   {
//     id: "session-004",
//     startTime: "2026-01-12T12:00:00.000Z",
//     endTime: "2026-01-12T12:30:00.000Z",
//     exerciseLogIds: ["log-008", "log-009"],
//     totalPoints: 100,
//     active: 0,
//   },
//   {
//     id: "session-005",
//     startTime: "2026-01-12T20:15:00.000Z",
//     endTime: "2026-01-12T20:50:00.000Z",
//     exerciseLogIds: ["log-010", "log-011", "log-012"],
//     totalPoints: 130,
//     active: 0,
//   },
// ];

// get all sessions from db
async function getAllSessions() {
  const db = await initDB();
  const sessions = await db.getAll("activitySessions");
  // const sessions = dummySessions;

  // getting the point per day data into record
  const result: Record<string, number> = {};

  sessions.forEach((session) => {
    const day = session.startTime.split("T")[0];
    if (!result[day]) result[day] = 0;
    result[day] += Number(session.totalPoints.toFixed(2));
  });

  // making the data into array of objects
  const pointsByDay = Object.entries(result).map(([date, points]) => ({
    date,
    points,
  }));

  // sort by data in ascending order
  pointsByDay.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return pointsByDay;
}

type dataProps = {
  date: string;
  points: number;
};

const PointsPerDayChart = () => {
  const [pointsByDayData, setPointByDayData] = useState<dataProps[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getAllSessions();
      // console.log("points per chart sessions ", data);
      setPointByDayData(data);
    }

    fetchData();
  }, []);
  return (
    <div className='bg-zinc-900 border border-zinc-800 rounded-xl my-6 py-8'>
      <h3 className='text-[10px] font-black mb-8 text-zinc-500 capitalize tracking-widest flex items-center gap-2 pl-4'>
        <Activity className='w-4 h-4 text-green-500' /> Daily Points obtained
      </h3>
      <div className='w-full h-[250px] md:h-[350px] border-white '>
        <ResponsiveContainer>
          <AreaChart data={pointsByDayData}>
            <defs>
              <linearGradient id='pointGradient' x1='0' y1='0' x2='0' y2='1'>
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
              dataKey='points'
              strokeWidth={3}
              fillOpacity={1}
              stroke='#22c55e'
              type={"monotone"}
              fill='url(#pointGradient)'
              dot={{ r: 4, stroke: "#22c55e", strokeWidth: 2, fill: "#fff" }}
            />
            <YAxis
              fontSize={10}
              axisLine={false}
              tickLine={false}
              stroke='#22c55e'
              label={{
                value: "Points Obtained",
                angle: -90,
                position: "insideLeft",
                fill: "#22c55e",
                fontSize: 10,
              }}
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

export default PointsPerDayChart;
