import { NextApiRequest, NextApiResponse } from "next";
import { DataManagementClient } from "src/services/contentful/content-management";
import { CurrencyConverter } from "src/services/currency-converter";

const formatCurrencyConversionResponse = (latestCurrency: any) => {
  const timestamp = new Date().toJSON();
  const { base_currency_code, amount } = latestCurrency;
  const toCountryCode = Object.keys(latestCurrency.rates)[0];

  return {
    title: {
      "en-US": `From [${base_currency_code} to [${toCountryCode}] | [${timestamp}]`,
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

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const latestCurrency = await CurrencyConverter();
  const formattedResponse = formatCurrencyConversionResponse(latestCurrency);

  DataManagementClient.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    .then((space: any) => space.getEnvironment("master"))
    .then((environment: any) =>
      environment.createEntry("convertedCurrency", {
        fields: formattedResponse,
      })
    )
    .then((entry: any) => entry.publish())
    .then((entry: any) => {
      response.status(200).json({
        status: "success",
        message: `Entry ${entry.sys.id} published.`,
      });
    })
    .catch((e: any) => {
      response.status(500).json({ error: e });
    });
}
