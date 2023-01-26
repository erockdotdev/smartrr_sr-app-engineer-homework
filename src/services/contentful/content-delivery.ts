import { ContentfulClientApi, createClient } from "contentful";

import {
  ContentTypes,
  ConvertedCurrencyFields,
  ConvertedCurrencyEntryCollection,
} from "src/ts/Contentful/content-delivery-api";

export const ContentfulDeliveryClient = createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API}`,
});

export interface IQueryContentClient {
  client: ContentfulClientApi;
  getContentByType: (
    contentType: ContentTypes
  ) => Promise<ConvertedCurrencyEntryCollection>;
}

//@todo: make this a singleton
export class QueryContentClient implements IQueryContentClient {
  client: IQueryContentClient["client"];
  constructor(client: IQueryContentClient["client"]) {
    this.client = client;
  }
  async getContentByType(
    contentType: ContentTypes
  ): Promise<ConvertedCurrencyEntryCollection> {
    const data = await this.client.getEntries<ConvertedCurrencyFields>(
      contentType
    );
    return data;
  }
}
