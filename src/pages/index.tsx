import Head from "next/head";
import { useEffect, useState } from "react";
import { ContentfulDelivery } from "src/services/contentful/content-delivery";
import styles from "@/pages/index.module.css";

export default function Home() {
  const [convertedCurrencies, setConvertedCurrencies] = useState([]);
  useEffect(() => {
    ContentfulDelivery.getEntries({ content_type: "convertedCurrency" })
      .then((entries: any) => {
        setConvertedCurrencies(entries.items);
      })
      //@todo: properly handle errors
      .catch((e: any) => {
        console.error(e);
      });
  }, []);

  // useEffect(() => {
  //   // Create entry
  //   DataManagementClient.getSpace("k9ah7n9n57cn")
  //     .then((space: any) => space.getEnvironment("master"))
  //     .then((environment: any) =>
  //       // environment.createEntry("convertedCurrency", "<entry_id>", {
  //       environment.createEntry("convertedCurrency", {
  //         fields: testEntry,
  //       })
  //     )
  //     .then((entry: any) => console.log("entry", entry))
  //     .catch((e: any) => console.error("e==><", e));
  // }, []);

  const renderConvertedCurrencies = (convertedCurrencies: any) => {
    if (convertedCurrencies.length >= 1) {
      return convertedCurrencies.map(
        (convertedCurrency: any, index: number) => {
          const { title, from, to, amount } = convertedCurrency.fields;
          // console.log("convertedCurrency", convertedCurrency);
          return <p key={convertedCurrency.sys.id}>{title}</p>;
        }
      );
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Smartrr | Currency Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* wrap in ConvertedCurrencies List */}
      <main>{renderConvertedCurrencies(convertedCurrencies)}</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: { test: "test" },
  };
}
