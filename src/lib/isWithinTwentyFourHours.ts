// reference: https://bobbyhadz.com/blog/javascript-check-if-date-is-within-24-hours
export const isWithinTwentyFourHours = (timestamp: string) => {
  let now = new Date();
  let then = new Date(`${timestamp}`);
  const msBetweenDates = Math.abs(then.getTime() - now.getTime());
  const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
  if (hoursBetweenDates < 24) {
    return true;
  }
  return false;
};
