export const formatCurrencyConversionResponse = (latestCurrency: any) => {
  const timestamp = new Date().toJSON();
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
