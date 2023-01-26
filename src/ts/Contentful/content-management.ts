import { ConvertedCurrencyData } from "../CurrencyConverterAPI";

// localization is required for posting data, defaulting to en-US
type LocalizedField<T> = {
  "en-US": T;
};

export type ConvertedCurrencyFields = {
  title: LocalizedField<string>;
  from: LocalizedField<string>;
  to: LocalizedField<string>;
  amount: LocalizedField<number>;
  date: LocalizedField<string>;
  currencyConversion: LocalizedField<ConvertedCurrencyData>;
};
