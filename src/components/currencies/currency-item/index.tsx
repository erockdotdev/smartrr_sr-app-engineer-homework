import style from "./styles.module.css";
export default function CurrencyItem({ currencyItem }: any) {
  const { date, to, currencyConversion } = currencyItem.fields;
  const formatDate = new Date(date).toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  return (
    <li className={style["currency-item"]}>
      <h3>Rate: {currencyConversion.rates[`${to}`].rate} </h3>
      {/* @todo: either use users local and/or  handle for daylight savings*/}
      <p>Time Recorded: {formatDate} EST </p>
    </li>
  );
}
