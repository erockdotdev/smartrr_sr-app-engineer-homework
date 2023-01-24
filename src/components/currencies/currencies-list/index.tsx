import React from "react";
import CurrencyItem from "../currency-item";

const renderCurrencyListItems = (convertedCurrencies: any) => {
  return convertedCurrencies.map((currencyItem: any) => {
    return (
      <li>
        <CurrencyItem key={currencyItem.sys.id} currencyItem={currencyItem} />
      </li>
    );
  });
};

export default function CurrencyList(props: any) {
  const { currencies } = props;
  return <ul>{renderCurrencyListItems(currencies)}</ul>;
}
