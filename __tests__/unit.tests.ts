import { ContentfulClientApi } from "contentful";
import { formatCurrencyConversionResponse } from "src/lib/contentful-currency-conversion-format";
import { isWithinTwentyFourHours } from "src/lib/isWithinTwentyFourHours";
import {
  ContentfulDeliveryClient,
  QueryContentClient,
} from "../src/services/contentful/content-delivery";

describe("Lorem ipsum", () => {
  let queryContentClient: QueryContentClient;
  beforeAll(() => {
    queryContentClient = new QueryContentClient(ContentfulDeliveryClient);
  });
  it("runs getContentByType", async () => {
    const entries = await queryContentClient.getContentByType(
      "convertedCurrency"
    );
    console.log("entries", entries);
    // expect(true).toBe(true);
  });
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
