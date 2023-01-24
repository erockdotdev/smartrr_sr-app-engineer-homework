import Head from "next/head";
import { useEffect, useState } from "react";
import {
  ContentfulDelivery,
  getEntries,
} from "src/services/contentful/content-delivery";
import styles from "@/pages/index.module.css";
import CurrencyList from "src/components/currencies/currencies-list";
import { ConvertedCurrencyFields } from "src/ts/types";

export default function Home() {
  const [convertedCurrencies, setConvertedCurrencies] = useState<
    ConvertedCurrencyFields[]
  >([]);

  useEffect(() => {
    getEntries("convertedCurrency")
      .then(entries => {
        console.log("@@entreies", entries.items);
        setConvertedCurrencies(entries);
      })
      .catch((e: any) => console.error("Error", e));
  }, []);
  console.log({ convertedCurrencies });
  return (
    <div className={styles.container}>
      <main>
        <h1>Hourly USD / BRL currency conversion rates</h1>
        <CurrencyList currencies={convertedCurrencies} />
      </main>
    </div>
  );
}
