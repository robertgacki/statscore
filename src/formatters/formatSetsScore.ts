export const formatSetsScore = (score: string): string => {
  const [, match, set1, set2, set3] =
    /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(score) || [];

  return `Main score: ${match} (set1 ${set1}, set2 ${set2}, set3 ${set3})`;
};
