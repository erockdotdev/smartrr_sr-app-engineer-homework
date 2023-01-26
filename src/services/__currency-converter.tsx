import {
  ConvertCurrencyParams,
  ConvertedCurrencyData,
} from "src/ts/CurrencyConverterAPI";

export const CurrencyConverter = async (
  params: ConvertCurrencyParams
): Promise<ConvertedCurrencyData> => {
  const searchParams = { ...{ format: "json" }, ...params };
  try {
    const response = await fetch(
      "https://currency-converter5.p.rapidapi.com/currency/convert?" +
        new URLSearchParams(searchParams),
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_CURRENCY_CONVERTER_API_KEY}`,
          "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
        },
      }
    );
    const body = await response.json();
    return body;
  } catch (e: any) {
    throw Error(e);
  }
};
