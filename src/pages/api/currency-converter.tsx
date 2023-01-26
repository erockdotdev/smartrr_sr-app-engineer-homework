import { NextApiRequest, NextApiResponse } from "next";
import { formatCurrencyConversionResponse } from "src/lib/contentful-currency-conversion-format";
import { createTimestamp } from "src/lib/createTimestamp";
import {
  createEntry,
  publishEntry,
} from "src/services/contentful/content-management";
import { CurrencyConverter } from "src/services/currency-converter";
import { ContentTypeIDs } from "src/ts/enums";
import { CMAConvertedCurrency, CurrencyConverterParams } from "src/ts/types";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const defaultParams: CurrencyConverterParams = {
    from: "USD",
    to: "BRL",
    amount: "1",
  };
  try {
    const latestCurrency = await CurrencyConverter(defaultParams);
    const timestamp = createTimestamp();
    const formattedResponse: CMAConvertedCurrency =
      formatCurrencyConversionResponse(latestCurrency, timestamp);

    const entry = await createEntry<CMAConvertedCurrency>(
      ContentTypeIDs.convertedCurrency,
      formattedResponse
    );
    // @todo: redo this flow to publish entries
    //create entry
    // publish entry
    // respond with info if entry was created AND published
    // respond with appropriate error
    if (entry) {
      const publishedEntry = await publishEntry(entry);
      return response.status(200).json({
        status: "success",
        message: `Entry ${publishedEntry.sys.id} published.`,
      });
    } else {
      throw Error("unable to publish entry");
    }
  } catch (e: any) {
    response.status(500).json({ error: e });
  }
}
