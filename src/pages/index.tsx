import { useEffect, useState } from "react";

import { queryContentClient } from "src/services/contentful/content-delivery-api";
import CurrencyList from "src/components/currencies/currencies-list";
import { ConvertedCurrencyEntry } from "src/ts/Contentful/content-delivery";
import { ContentTypeIDs } from "src/ts/enums";
import { isWithinTwentyFourHours } from "src/lib/isWithinTwentyFourHours";

import styles from "@/pages/index.module.css";
import { ConvertedCurrencyEntryCollection } from "src/ts/Contentful/content-delivery";
import { createTimestamp } from "../lib/createTimestamp";

export default function Home() {
  const [convertedCurrencies, setConvertedCurrencies] = useState<
    ConvertedCurrencyEntry[]
  >([]);

  useEffect(() => {
    // @todo: move to getServerSide props or add loading state
    // also break filters and sorts into utility functions
    queryContentClient
      .getContentByType(ContentTypeIDs.convertedCurrency)
      .then((entries: ConvertedCurrencyEntryCollection) => {
        const filteredEntries = entries.items
          .filter((entry: ConvertedCurrencyEntry) => {
            const timestamp = createTimestamp();
            const timeTest = isWithinTwentyFourHours(
              timestamp,
              entry.fields.date
            );
            return isWithinTwentyFourHours(timestamp, entry.fields.date);
          })
          .sort((a: ConvertedCurrencyEntry, b: ConvertedCurrencyEntry) => {
            const aDate = new Date(a.fields.date);
            const bDate = new Date(b.fields.date);
            return bDate.getTime() - aDate.getTime();
          });
        setConvertedCurrencies(filteredEntries);
      })
      .catch((e: any) => console.error(e));
  }, []);
  return (
    <div className={styles.container}>
      <main>
        <h1 style={{ textAlign: "center" }}>
          Hourly USD / BRL currency conversion rates over the last 24 hours
        </h1>
        <CurrencyList currencies={convertedCurrencies} />
      </main>
    </div>
  );
}
