import Head from "next/head";
import { useEffect, useState } from "react";
import { getEntries } from "src/services/contentful/content-delivery";
import styles from "@/pages/index.module.css";
import CurrencyList from "src/components/currencies/currencies-list";
import { ConvertedCurrencyEntry, ConvertedCurrencyFields } from "src/ts/types";
import { ContentTypeIDs } from "src/ts/enums";
import { isWithinTwentyFourHours } from "src/lib/isWithinTwentyFourHours";

export default function Home() {
  const [convertedCurrencies, setConvertedCurrencies] = useState<
    ConvertedCurrencyEntry[]
  >([]);

  useEffect(() => {
    getEntries(ContentTypeIDs.convertedCurrency)
      .then((entries: ConvertedCurrencyEntry[]) => {
        entries.filter(entry => {
          return isWithinTwentyFourHours(entry.fields.date);
        });
        setConvertedCurrencies(entries);
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
