import { ContentfulClientApi, EntryCollection } from "contentful";
import { formatCurrencyConversionResponse } from "../src/lib/contentful-currency-conversion-format";
import { isWithinTwentyFourHours } from "../src/lib/isWithinTwentyFourHours";
import {
  IQueryContentClient,
  QueryContentClient,
} from "../src/services/contentful/content-delivery-api";
// import { CurrencyConverter } from "../src/services/currency-converter";
import { ContentTypeIDs } from "../src/ts/enums";
import { convertedCurrencyDataMock } from "../src/mocks/convertedCurrencyData";

const mockGetEntries = jest.fn();

function getEntries<T>(query?: any) {
  return new Promise<EntryCollection<T>>((resolve, reject) => {
    if (Object.values(ContentTypeIDs).includes(query)) {
      resolve(mockGetEntries());
    }
    reject("reject");
  });
}

const MockQueryContentClient = {
  getEntries,
};

describe("Query Content", () => {
  let queryContentClient: IQueryContentClient;
  beforeAll(() => {
    queryContentClient = new QueryContentClient(MockQueryContentClient);
  });
  it("should call client getEntries", async () => {
    // spy that client.getEntries is called when calling queryContentClient.getContentByType is called
    await queryContentClient.getContentByType("convertedCurrency");
    expect(mockGetEntries).toBeCalled();
  });
  //@todo - the error is not being caught within jest, not sure whats up
  // it("throw and error when the promise rejects", () => {
  //   expect(
  //     async () => await queryContentClient.getContentByType("invalidContentId")
  //   ).toThrow(Error);
  // });
});

describe("library functions", () => {
  it("should format contentful response", () => {
    convertedCurrencyDataMock;
    const timestamp = "2023-01-24T15:45:03.065Z";
    const formattedData = formatCurrencyConversionResponse(
      convertedCurrencyDataMock,
      timestamp
    );
    expect(formattedData).toEqual({
      amount: { "en-US": 1 },
      currencyConversion: {
        "en-US": {
          amount: "1.0000",
          base_currency_code: "USD",
          base_currency_name: "United States dollar",
          rates: {
            BRL: {
              currency_name: "Brazilian real",
              rate: "5.0737",
              rate_for_amount: "5.0737",
            },
          },
          status: "success",
          updated_date: "2023-01-26",
        },
      },
      date: { "en-US": "2023-01-24T15:45:03.065Z" },
      from: { "en-US": "USD" },
      title: { "en-US": "From [USD] to [BRL] | [2023-01-24T15:45:03.065Z]" },
      to: { "en-US": "BRL" },
    });
  });
  it("should indicate a timestamp is over 24 hours", () => {
    const nowTimestamp = "2023-01-24T15:00:00.000Z";
    const thenTimestamp = "2023-01-23T14:00:00.000Z"; // 25 hours before "now"
    const timestampTest = isWithinTwentyFourHours(nowTimestamp, thenTimestamp);
    expect(timestampTest).toBe(false);
  });
  it("should indicate a timestamp is less than 24 hours", () => {
    const nowTimestamp = "2023-01-24T15:00:00.000Z";
    const thenTimestamp = "2023-01-23T16:00:00.000Z"; // 23 hours before "now"
    const timestampTest = isWithinTwentyFourHours(nowTimestamp, thenTimestamp);
    expect(timestampTest).toBe(true);
  });
});

describe("Manage Content", () => {
  // let queryContentClient: IQueryContentClient;
  // beforeAll(() => {
  //   queryContentClient = new QueryContentClient(MockQueryContentClient);
  // });
  // it("should call client getEntries", async () => {
  //   // spy that client.getEntries is called when calling queryContentClient.getContentByType is called
  //   await queryContentClient.getContentByType("convertedCurrency");
  //   expect(mockGetEntries).toBeCalled();
  // });
  //@todo - the error is not being caught within jest, not sure whats up
  // it("throw and error when the promise rejects", () => {
  //   expect(
  //     async () => await queryContentClient.getContentByType("invalidContentId")
  //   ).toThrow(Error);
  // });
});

// required to run jest with current next configuration
export {};
