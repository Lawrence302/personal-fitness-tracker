import { initDB } from "./db";
import { v4 as uuid } from "uuid";
import type { ActivitySession } from "./types";

const tiers = [
  { rank: "BEGINNER", min: 0, max: 10 },
  { rank: "INTERMEDIATE", min: 10, max: 50 },
  { rank: "ADVANCED", min: 50, max: 150 },
  { rank: "EXPERT", min: 150, max: 370 },
  { rank: "ELITE", min: 370, max: Infinity },
];

// Calculate user tier based on total points
export function calculateTier(totalPoints: number) {
  let currentTier = tiers[0];
  for (let i = 0; i < tiers.length; i++) {
    const nextTier = tiers[i + 1];
    if (nextTier === undefined) {
      return {
        userRank: currentTier.rank,
        pointsToNextTier: 0,
        nextTier: null,
        progressToNextTier: 100,
      };
    }
    // console.log(tiers[i]);
    if (totalPoints > tiers[i].max) {
      currentTier = tiers[i + 1];
    } else {
      return {
        userRank: currentTier.rank,
        pointsToNextTier: currentTier.max - totalPoints,
        nextTier: nextTier.rank,
        progressToNextTier: Math.floor(
          ((totalPoints - currentTier.min) /
            (currentTier.max - currentTier.min)) *
            100
        ),
      };
    }
  }
}

// Calculate time passed since session started
// const dateString = "2026-01-11T18:18:22.928Z";

const activeSessionTime = async (
  dateString: string,
  session: ActivitySession
) => {
  const past = new Date(dateString).getTime();
  const now = Date.now();
  const minutes = Math.floor((now - past) / 60000); // minutes difference

  if (minutes >= 5) {
    const db = await initDB();
    session.active = 0;
    await db.put("activitySessions", session);
    return false;
  }
  console.log(minutes, " passed");
  return true;
};

// getting current activity session
export const getCurrentSession = async () => {
  const db = await initDB();
  const store = db.transaction("activitySessions").store;
  const index = store.index("active");
  const activeSession = await index.get(1); // get all active sessions
  const streakStats = await db.get("streakStats", "local");
  // update streak stats last active date
  const todayDate = new Date().toISOString().split("T")[0];
  const yesterdayDate = new Date(Date.now() - 86400000)
    .toISOString()
    .split("T")[0];

  if (streakStats) {
    const lastActive = streakStats.lastActiveDate;
    if (lastActive === todayDate) {
      // do nothing
    } else if (lastActive === yesterdayDate) {
      streakStats.lastActiveDate = todayDate;
      streakStats.currentStreak += 1;
      if (streakStats.currentStreak > streakStats.longestStreak) {
        streakStats.longestStreak = streakStats.currentStreak;
      }
      await db.put("streakStats", streakStats);
    } else {
      // reset streak
      streakStats.lastActiveDate = todayDate;
      streakStats.currentStreak = 1;
      await db.put("streakStats", streakStats);
    }
  } else {
    const newStreakStats = {
      id: "local",
      currentStreak: 1,
      longestStreak: 1,
      lastActiveDate: todayDate,
    };
    await db.put("streakStats", newStreakStats);
  }

  // function to create a new activity session
  async function createNewActivitySession() {
    const startTime = new Date().toISOString();
    const endTime = new Date(startTime).getTime() + 5 * 60 * 1000;
    const db = await initDB();
    const newActivitySession = {
      id: uuid(),
      startTime: startTime,
      endTime: endTime,
      exerciseLogIds: [],
      totalPoints: 0,
      active: 1,
    };

    const newActivitySessionId = await db.put(
      "activitySessions",
      newActivitySession
    );

    const savedSession = await db.get("activitySessions", newActivitySessionId);

    return savedSession;
  }

  // if there isn't an active session, create a new activity session
  if (!activeSession) {
    const newActivitySession = await createNewActivitySession();
    return newActivitySession;
  }

  // check if the session is still active
  const isSessionActive = await activeSessionTime(
    activeSession.startTime,
    activeSession
  );

  if (isSessionActive) {
    return activeSession;
  }

  return await createNewActivitySession();
};
