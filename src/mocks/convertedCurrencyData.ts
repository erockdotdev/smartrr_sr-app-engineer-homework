import { ConvertedCurrencyData } from "src/ts/CurrencyConverterAPI";

export const convertedCurrencyDataMock: ConvertedCurrencyData = {
  base_currency_code: "USD",
  base_currency_name: "United States dollar",
  amount: "1.0000",
  updated_date: "2023-01-26",
  rates: {
    BRL: {
      currency_name: "Brazilian real",
      rate: "5.0737",
      rate_for_amount: "5.0737",
    },
  },
  status: "success",
};
