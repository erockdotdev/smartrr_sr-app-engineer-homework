import style from "./styles.module.css";
export default function CurrencyItem({ currencyItem }: any) {
  const { date, to, currencyConversion } = currencyItem.fields;
  const formatDate = new Date(date).toLocaleString("en-US");
  return (
    <li className={style["currency-item"]}>
      <h3>Rate: {currencyConversion.rates[`${to}`].rate} </h3>
      <p>Time Recorded: {formatDate} </p>
    </li>
  );
}
