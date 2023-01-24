import React from "react";
import { ConvertedCurrencyEntry } from "src/ts/types";
import CurrencyItem from "../currency-item";

const renderCurrencyListItems = (
  convertedCurrencies: ConvertedCurrencyEntry[]
) => {
  return convertedCurrencies.map((currencyItem: ConvertedCurrencyEntry) => {
    return (
      <CurrencyItem key={currencyItem.sys.id} currencyItem={currencyItem} />
    );
  });
};

export default function CurrencyList(props: any) {
  const { currencies } = props;
  return <ul>{renderCurrencyListItems(currencies)}</ul>;
}
