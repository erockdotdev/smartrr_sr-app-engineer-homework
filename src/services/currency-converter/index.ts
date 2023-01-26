import { FetchClient } from "../fetchClient";

const url = "https://currency-converter5.p.rapidapi.com";
const headers = {
  "Content-Type": "application/json",
  "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_CURRENCY_CONVERTER_API_KEY}`,
  "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
};

export const defaultRoute = "currency/convert";

export const CurrencyConvertClient = new FetchClient(url, headers);
