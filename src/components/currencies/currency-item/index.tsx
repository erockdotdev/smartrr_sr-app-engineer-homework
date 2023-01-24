import style from "./styles.module.css";
export default function CurrencyItem({ currencyItem }: any) {
  const { date, to, currencyConversion } = currencyItem.fields;
  return (
    <li className={style["currency-item"]}>
      <h3>Rate: {currencyConversion.rates[`${to}`].rate} </h3>
      <p>Time Recorded: {date} </p>
    </li>
  );
}
