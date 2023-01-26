import { useEffect, useState } from "react";

import {
  ContentfulDeliveryClient,
  QueryContentClient,
} from "src/services/contentful/content-delivery-api";
import CurrencyList from "src/components/currencies/currencies-list";
import { ConvertedCurrencyEntry } from "src/ts/Contentful/content-delivery";
import { ContentTypeIDs } from "src/ts/enums";
import { isWithinTwentyFourHours } from "src/lib/isWithinTwentyFourHours";

import styles from "@/pages/index.module.css";
import { ConvertedCurrencyEntryCollection } from "src/ts/Contentful/content-delivery";

export default function Home() {
  const [convertedCurrencies, setConvertedCurrencies] = useState<
    ConvertedCurrencyEntry[]
  >([]);

  useEffect(() => {
    const queryContentClient = new QueryContentClient(ContentfulDeliveryClient);
    queryContentClient
      .getContentByType(ContentTypeIDs.convertedCurrency)
      .then((entries: ConvertedCurrencyEntryCollection) => {
        const filteredEntries = entries.items.filter(
          (entry: ConvertedCurrencyEntry) => {
            // @todo: this seems like it is filtering out too many entries
            return isWithinTwentyFourHours(entry.fields.date);
          }
        );
        setConvertedCurrencies(filteredEntries);
      })
      .catch((e: any) => console.error("Error", e));
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
