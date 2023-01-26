import { ConvertedCurrencyEntry } from "src/ts/Contentful/content-delivery";
import style from "./styles.module.css";

interface ICurrencyEntry {
  convertedCurrencyEntry: ConvertedCurrencyEntry;
}

export default function CurrencyEntry({
  convertedCurrencyEntry,
}: ICurrencyEntry) {
  const { date, to, currencyConversion, amount } =
    convertedCurrencyEntry.fields;
  const formatDate = new Date(date).toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  return (
    <li className={style["currency-entry"]}>
      <h3>Rate: {currencyConversion.rates[`${to}`].rate} </h3>
      {/* @todo: either use users local and/or  handle for daylight savings*/}
      <p>Time Recorded: {formatDate} EST </p>
    </li>
  );
}
