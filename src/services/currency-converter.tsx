export const CurrencyConverter = async (
  from: string = "USD",
  to: string = "BRL",
  amount: string = "1"
) => {
  const params = { format: "json", from, to, amount };
  try {
    const response = await fetch(
      "https://currency-converter5.p.rapidapi.com/currency/convert?" +
        new URLSearchParams(params),
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
  } catch (e) {
    //handle error
    console.error({ error: e });
  }
};
