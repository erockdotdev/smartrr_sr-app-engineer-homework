import { ConvertedCurrencyData } from "src/ts/CurrencyConverterAPI";

export const formatCurrencyConversionResponse = (
  latestCurrency: ConvertedCurrencyData,
  timestamp: string
) => {
  const { base_currency_code, amount } = latestCurrency;
  const toCountryCode = Object.keys(latestCurrency.rates)[0];

  return {
    title: {
      "en-US": `From [${base_currency_code}] to [${toCountryCode}] | [${timestamp}]`,
    },
    from: {
      "en-US": base_currency_code,
    },
    to: {
      "en-US": toCountryCode,
    },
    amount: {
      "en-US": parseInt(amount),
    },
    date: {
      "en-US": timestamp,
    },
    currencyConversion: {
      "en-US": latestCurrency,
    },
  };
};
