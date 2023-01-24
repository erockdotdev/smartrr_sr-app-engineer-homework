import Head from "next/head";
import { useEffect, useState } from "react";
import { ContentfulDelivery } from "src/services/contentful/content-delivery";
import styles from "@/pages/index.module.css";
import CurrencyList from "src/components/currencies/currencies-list";

export default function Home() {
  const [convertedCurrencies, setConvertedCurrencies] = useState([]);
  useEffect(() => {
    ContentfulDelivery.getEntries({ content_type: "convertedCurrency" })
      .then((entries: any) => {
        setConvertedCurrencies(entries.items);
      })
      .catch((e: any) => {
        console.error(e);
      });
  }, []);
  console.log({ convertedCurrencies });
  return (
    <div className={styles.container}>
      <Head>
        <title>Smartrr | Currency Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CurrencyList currencies={convertedCurrencies} />
      </main>
    </div>
  );
}
