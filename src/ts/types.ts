import { Entry } from "contentful";
import { Entry as CMAEntry, KeyValueMap } from "contentful-management";

/**
 * Creating Entries requires localization
 * ContentfulEntryApi
 * EntryProps
 */

// Content Management API (CMA) types
type CMAItem<T> = {
  "en-US": T;
};

export type CMAConvertedCurrency = {
  title: CMAItem<string>;
  from: CMAItem<string>;
  to: CMAItem<string>;
  amount: CMAItem<number>;
  date: CMAItem<string>;
  currencyConversion: CMAItem<CurrencyConverterResponse>;
};

//
export type ConvertedCurrencyResponse = {
  title: string;
  from: string;
  to: string;
  amount: number;
  date: string;
  currencyConversion: {
    "en-US": CurrencyConverterResponse;
  };
};

export type ConvertedCurrencyEntry = Entry<ConvertedCurrencyResponse>;

export type CurrencyConverterParams = {
  from: string;
  to: string;
  amount: string;
};

export type CurrencyConverterResponse = {
  base_currency_code: string;
  base_currency_name: string;
  amount: string;
  updated_date: string;
  rates: {
    BRL: {
      currency_name: string;
      rate: string;
      rate_for_amount: string;
    };
  };
  status: string;
};
