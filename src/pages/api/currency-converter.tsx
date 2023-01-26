import "../../lib/fetch-polyfill";
import { NextApiRequest, NextApiResponse } from "next";
import { formatCurrencyConversionResponse } from "src/lib/contentful-currency-conversion-format";
import { createTimestamp } from "src/lib/createTimestamp";
import {
  ContentfulManagementClient,
  ManageContentClient,
} from "src/services/contentful/content-management-api";
import { defaultRoute } from "src/services/currency-converter";
import { ContentTypeIDs } from "src/ts/enums";

import { CurrencyConvertClient } from "src/services/currency-converter";
import { ConvertCurrencyParams } from "src/ts/CurrencyConverterAPI";
import { ConvertedCurrencyFields } from "src/ts/Contentful/content-management";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { query } = request;
  const params = {
    from: query.from,
    to: query.to,
    amount: query.amount,
  } as ConvertCurrencyParams;

  const manageContentClient = new ManageContentClient(
    ContentfulManagementClient
  );

  try {
    const latestCurrency = await CurrencyConvertClient.get({
      route: defaultRoute,
      searchParams: { format: "json", ...params },
    });
    console.log(latestCurrency);
    if (latestCurrency.status === "failed") {
      console.error("LatestCurrency Error", latestCurrency.error);
      throw new Error(latestCurrency.error);
    }
    //contentful management api below
    const timestamp = createTimestamp();
    const formattedResponse: ConvertedCurrencyFields =
      formatCurrencyConversionResponse(latestCurrency, timestamp);
    const entry = await manageContentClient.createContent(
      ContentTypeIDs.convertedCurrency,
      formattedResponse
    );

    await manageContentClient.publishContent(entry);

    response.status(200).json({
      status: "success",
      message: `Successfully created entry for ${entry.sys.id}`,
    });
  } catch (error) {
    response.status(500).json({ Error: error });
  }
}
