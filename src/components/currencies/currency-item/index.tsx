export default function CurrencyItem({ currencyItem }: any) {
  const { date, from, to, currencyConversion } = currencyItem.fields;
  return (
    <div style={{ borderBottom: "solid black 5px" }}>
      <h3>
        Base Currency: {from} | Compare Currency: {to}{" "}
      </h3>
      <p>Rate: {currencyConversion.rates[`${to}`].rate} </p>
      <p>Time Recorded: {date} </p>
    </div>
  );
}
