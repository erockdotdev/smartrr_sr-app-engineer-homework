// reference: https://bobbyhadz.com/blog/javascript-check-if-date-is-within-24-hours
export const isWithinTwentyFourHours = (
  nowTimestamp: string,
  thenTimestamp: string
) => {
  let now = new Date(nowTimestamp);
  let then = new Date(thenTimestamp);

  const msBetweenDates = Math.abs(then.getTime() - now.getTime());
  const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
  if (hoursBetweenDates <= 24) {
    return true;
  }
  return false;
};
