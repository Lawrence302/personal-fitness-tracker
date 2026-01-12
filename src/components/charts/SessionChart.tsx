import { Activity } from "lucide-react";
import { initDB } from "../../lib/db";
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
import { useEffect, useState } from "react";
// import type { ActivitySession } from "../../lib/types";
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

async function getAllSessions() {
  const db = await initDB();
  const sessions = await db.getAll("activitySessions");
  // const sessions = dummySessions;

  // getting the point per day data into record
  const result: Record<string, number> = {};

  sessions.forEach((session) => {
    const day = session.startTime.split("T")[0];
    if (!result[day]) result[day] = 0;
    result[day] += 1;
  });

  // making the data into array of objects
  const sessionsPerDa = Object.entries(result).map(([date, sessions]) => ({
    date,
    sessions,
  }));

  // sort by data in ascending order
  sessionsPerDa.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return sessionsPerDa;
}

type dataProps = {
  date: string;
  sessions: number;
};

const SessionChart = () => {
  const [sessionsPerDay, setSessionsPerDayData] = useState<dataProps[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getAllSessions();
      console.log("sessions per chart sessions ", data);
      setSessionsPerDayData(data);
    }

    fetchData();
  }, []);
  return (
    <div className='bg-zinc-900 border border-zinc-800 rounded-xl my-6 py-8'>
      <h3 className='text-[10px] font-black mb-8 text-zinc-500 capitalize tracking-widest flex items-center gap-2 pl-4'>
        <Activity className='w-4 h-4 text-yellow-500' /> Training Sessions Over
        Time
      </h3>
      <div className='w-full h-[250px] md:h-[350px] border-white '>
        <ResponsiveContainer>
          <AreaChart data={sessionsPerDay}>
            <defs>
              <linearGradient id='sessionGradient' x1='0' y1='0' x2='0' y2='1'>
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
              // domain={[1, 5]}
              // ticks={[1, 2, 3, 4, 5]}
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

export default SessionChart;
