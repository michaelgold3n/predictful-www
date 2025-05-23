// Generate more points for smoother animation
export const versionA = Array.from({ length: 100 }, (_, i) => {
  const users = i * 10;
  // Increased growth rate for Version A to make it higher
  const engagement = users * 2.2 + 100 * Math.sin(i / 10);
  return {
    users,
    // Ensure engagement doesn't go below 0 and is capped at 2000
    engagement: Math.max(0, Math.min(2000, engagement))
  };
});

export const versionB = Array.from({ length: 100 }, (_, i) => {
  const users = i * 10;
  // Decreased growth rate for Version B to make it lower
  const engagement = users * 1.5 + 80 * Math.sin(i / 12);
  return {
    users,
    // Ensure engagement doesn't go below 0 and is capped at 2000
    engagement: Math.max(0, Math.min(2000, engagement))
  };
}); 