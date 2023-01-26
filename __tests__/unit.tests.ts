import { ContentfulClientApi } from "contentful";
import { formatCurrencyConversionResponse } from "src/lib/contentful-currency-conversion-format";
import { isWithinTwentyFourHours } from "src/lib/isWithinTwentyFourHours";
import { FetchClient } from "../src/services/fetchClient";
import {
  ContentfulDeliveryClient,
  QueryContentClient,
} from "../src/services/contentful/content-delivery-api";
import { CurrencyConverter } from "../src/services/currency-converter";

describe("Lorem ipsum", () => {
  let queryContentClient: QueryContentClient;
  beforeAll(() => {
    // create mock client
    queryContentClient = new QueryContentClient(ContentfulDeliveryClient);
  });
  it("runs getContentByType", async () => {
    // spy that client.getEntries is called when calling queryContentClient.getContentByType is called
    const entries = await queryContentClient.getContentByType(
      "convertedCurrency"
    );
    console.log("entries", entries);
    // expect(true).toBe(true);
  });
});

describe("FetchClient", () => {
  const url = "https://currency-converter5.p.rapidapi.com";
  const headers = {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_CURRENCY_CONVERTER_API_KEY}`,
    "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
  };
  const CurrencyConvertClient = new FetchClient(url, headers);
  const defaultParams: CurrencyConverterParams = {
    from: "USD",
    to: "BRL",
    amount: "1",
  };
  // try {
  //   const data = await CurrencyConvertClient.get(defaultParams);
  //   console.log("data", data);
  // } catch (e) {
  //   console.log("error", e);
  // }
  it("should use currency converter", async () => {
    console.log(
      "process.env.NEXT_PUBLIC_CURRENCY_CONVERTER_API_KEY",
      process.env.NEXT_PUBLIC_CURRENCY_CONVERTER_API_KEY
    );
    const c = await CurrencyConvertClient.get({
      path: "currency/convert",
      searchParams: defaultParams,
    });

    console.log("@@c==>", c);
    expect(true).toBe(true);
  });

  // let queryContentClient: QueryContentClient;
  // beforeAll(() => {
  //   // create mock client
  //   queryContentClient = new QueryContentClient(ContentfulDeliveryClient);
  // });
  // it("runs getContentByType", async () => {
  //   // spy that client.getEntries is called when calling queryContentClient.getContentByType is called
  //   const entries = await queryContentClient.getContentByType(
  //     "convertedCurrency"
  //   );
  //   console.log("entries", entries);
  //   // expect(true).toBe(true);
  // });
});

describe("lib functions", () => {
  it("should filter out items that are over 24 hours old", () => {
    //isWithinTwentyFourHours;
  });
  it("should format contentful response", () => {
    //formatCurrencyConversionResponse()
  });
});
// required to run jest with current next configuration
export {};
