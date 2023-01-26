import { ConvertedCurrencyEntry } from "src/ts/Contentful/content-delivery";

export const sortEntries = (entries: ConvertedCurrencyEntry[]) => {
  return entries.sort(
    (a: ConvertedCurrencyEntry, b: ConvertedCurrencyEntry) => {
      const aDate = new Date(a.fields.date);
      const bDate = new Date(b.fields.date);
      return bDate.getTime() - aDate.getTime();
    }
  );
};
