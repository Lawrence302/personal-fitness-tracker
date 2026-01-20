import { initDB } from "./db";
import { v4 as uuid } from "uuid";
import type { ActivitySession } from "./types";
import { DateTime } from "luxon";
// import usePointsStore from "../stores/pointsStore";
import useExerciseStore from "../stores/exerciseStore";

const tiers = [
  { rank: "NEWBIE", min: 0, max: 800 },
  { rank: "BEGINNER", min: 801, max: 2499 },
  { rank: "INTERMEDIATE", min: 2500, max: 6499 },
  { rank: "ADVANCED", min: 6500, max: 12999 },
  { rank: "EXPERT", min: 13000, max: 25999 },
  { rank: "ELITE", min: 26000, max: 51999 },
  { rank: "LEGENDARY", min: 52000, max: Infinity },
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
            100,
        ),
      };
    }
  }
}

// Calculate time passed since session started
// const dateString = "2026-01-11T18:18:22.928Z";

const activeSessionTime = async (session: ActivitySession) => {
  const start = DateTime.fromISO(session.startTime, { zone: "utc" });
  const end = DateTime.fromISO(session.endTime, { zone: "utc" });
  const now = DateTime.now().toUTC();

  const minutesElapsed = Math.floor(now.diff(start).as("minutes"));
  // minutes difference

  if (now >= end) {
    const db = await initDB();
    session.active = 0;
    await db.put("activitySessions", session);
    return false;
  }
  console.log(minutesElapsed, " passed");
  return true;
};

// getting current activity session
export const getCurrentSession = async () => {
  const db = await initDB();
  const streakStats = await db.get("streakStats", "local");
  const store = db.transaction("activitySessions").store;
  const index = store.index("active");
  const activeSession = await index.get(1); // get all active sessions

  // update streak stats last active date
  const todayDate = DateTime.now().toISODate();
  const yesterdayDate = DateTime.now().minus({ days: 1 }).toISODate();

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

      // update streak in zustand store
      useExerciseStore
        .getState()
        .updateCurrentStreak(streakStats.currentStreak);

      // save streak stats to indexedDB
      await db.put("streakStats", streakStats);
    } else {
      // reset streak
      streakStats.lastActiveDate = todayDate;
      streakStats.currentStreak = 1;

      // update streak in zustand store
      useExerciseStore
        .getState()
        .updateCurrentStreak(streakStats.currentStreak);

      // save streak stats to indexedDB
      await db.put("streakStats", streakStats);
    }
  } else {
    const newStreakStats = {
      id: "local",
      currentStreak: 1,
      longestStreak: 1,
      lastActiveDate: todayDate,
    };

    // update streak in zustand store
    if (streakStats && streakStats.currentStreak !== undefined) {
      useExerciseStore
        .getState()
        .updateCurrentStreak(streakStats.currentStreak);
    }

    // save streak stats to indexedDB
    await db.put("streakStats", newStreakStats);
  }

  // function to create a new activity session
  async function createNewActivitySession() {
    const startTime = DateTime.now().toUTC();
    const endTime = startTime.plus({ minutes: 5 });
    const db = await initDB();
    const newActivitySession = {
      id: uuid(),
      startTime: startTime.toISO(),
      endTime: endTime.toISO(),
      timeZone: DateTime.now().zoneName,
      exerciseLogIds: [],
      totalPoints: 0,
      active: 1,
    };

    const newActivitySessionId = await db.put(
      "activitySessions",
      newActivitySession,
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
  const isSessionActive = await activeSessionTime(activeSession);

  if (isSessionActive) {
    return activeSession;
  }

  return await createNewActivitySession();
};
