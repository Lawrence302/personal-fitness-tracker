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
