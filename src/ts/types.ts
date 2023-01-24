export type ConvertedCurrencyFields = {
  title: {
    "en-US": string;
  };
  from: {
    "en-US": string;
  };
  to: {
    "en-US": string;
  };
  amount: {
    "en-US": number;
  };
  date: {
    "en-US": string;
  };
  currencyConversion: {
    "en-US": CurrencyConverterResponse;
  };
};

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
