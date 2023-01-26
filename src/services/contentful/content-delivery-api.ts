import { ContentfulClientApi, createClient } from "contentful";

import {
  ConvertedCurrencyFields,
  ConvertedCurrencyEntryCollection,
} from "src/ts/Contentful/content-delivery";
import { ContentTypes } from "src/ts/Contentful";

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
    try {
      const data = await this.client.getEntries<ConvertedCurrencyFields>(
        contentType
      );
      return data;
    } catch (e: any) {
      throw new Error(
        `Error: Can not query content type with Id "${contentType}"`,
        e
      );
    }
  }
}
