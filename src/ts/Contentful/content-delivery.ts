import { Entry, EntryCollection } from "contentful";
import { ConvertedCurrencyData } from "../CurrencyConverterAPI";

export type ConvertedCurrencyFields = {
  title: string;
  from: string;
  to: string;
  amount: number;
  date: string;
  currencyConversion: ConvertedCurrencyData;
};

export type ConvertedCurrencyEntryCollection =
  EntryCollection<ConvertedCurrencyFields>;

export type ConvertedCurrencyEntry = Entry<ConvertedCurrencyFields>;
