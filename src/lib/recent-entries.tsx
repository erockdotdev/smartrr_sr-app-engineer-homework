import {
  ConvertedCurrencyEntry,
  ConvertedCurrencyEntryCollection,
} from "src/ts/Contentful/content-delivery";
import { isWithinTwentyFourHours } from "./isWithinTwentyFourHours";

// entries from the last 24 hours
export const recentEntries = (
  entries: ConvertedCurrencyEntryCollection,
  timestamp: string
) => {
  return entries.items.filter((entry: ConvertedCurrencyEntry) => {
    return isWithinTwentyFourHours(timestamp, entry.fields.date);
  });
};
