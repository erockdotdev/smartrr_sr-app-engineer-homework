// Response from Converted Currency API
export type ConvertedCurrencyData = {
  amount: string;
  base_currency_code: string;
  base_currency_name: string;
  rates: {
    [k: string]: {
      currency_name: string;
      rate: string;
      rate_for_amount: string;
    };
  };
  status: string;
  updated_date: string;
};

export type ConvertCurrencyParams = {
  from: string;
  to: string;
  amount: string;
};
