import { useEffect, useState } from "react";

import { queryContentClient } from "src/services/contentful/content-delivery-api";
import CurrencyList from "src/components/currencies/currencies-list";
import { ConvertedCurrencyEntry } from "src/ts/Contentful/content-delivery";
import { ContentTypeIDs } from "src/ts/enums";
import { isWithinTwentyFourHours } from "src/lib/isWithinTwentyFourHours";

import styles from "@/pages/index.module.css";
import { ConvertedCurrencyEntryCollection } from "src/ts/Contentful/content-delivery";
import { createTimestamp } from "../lib/createTimestamp";
import { recentEntries } from "src/lib/recent-entries";
import { sortEntries } from "src/lib/sort-entries";

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
        const timestamp = createTimestamp();
        const filteredEntries = recentEntries(entries, timestamp);
        const sortedEntries = sortEntries(filteredEntries);
        setConvertedCurrencies(sortedEntries);
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
