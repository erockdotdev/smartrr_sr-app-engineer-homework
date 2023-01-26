import React from "react";
import { ConvertedCurrencyEntry } from "src/ts/Contentful/content-delivery";
import CurrencyEntry from "../currency-entry";

const renderCurrencyListItems = (
  convertedCurrencyEntries: ConvertedCurrencyEntry[]
) => {
  return convertedCurrencyEntries.map(convertedCurrencyEntry => {
    return (
      <CurrencyEntry
        key={convertedCurrencyEntry.sys.id}
        convertedCurrencyEntry={convertedCurrencyEntry}
      />
    );
  });
};

export default function CurrencyList({
  currencies,
}: {
  currencies: ConvertedCurrencyEntry[];
}) {
  // const { currencies } = props;
  return <ul>{renderCurrencyListItems(currencies)}</ul>;
}
