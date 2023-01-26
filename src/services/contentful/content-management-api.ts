import { KeyValueMap } from "contentful-management/types";
import { createClient, Entry, ClientAPI } from "contentful-management";
import { ContentTypes } from "src/ts/Contentful";
import { ConvertedCurrencyFields } from "src/ts/Contentful/content-management";

export const ContentfulManagementClient: ClientAPI = createClient({
  accessToken: `${process.env.CONTENTFUL_CONTENT_MANAGEMENT_API}`,
});

export interface IManageContentClient {
  client: ClientAPI;
  publishContent: (entry: Entry) => {};
  createContent: (
    contentType: ContentTypes,
    fields: ConvertedCurrencyFields
  ) => Promise<Entry>;
}

export class ManageContentClient implements IManageContentClient {
  readonly client: IManageContentClient["client"];
  constructor(client: IManageContentClient["client"]) {
    this.client = client;
  }
  async publishContent(entry: Entry) {
    entry.publish();
  }
  async createContent(
    contentType: ContentTypes,
    fields: ConvertedCurrencyFields
  ) {
    try {
      const space = await this.client.getSpace(
        `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`
      );
      // @todo: the serverless function is not picking up this env var, will have to follow up // // `${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`
      const environment = await space.getEnvironment("master");
      const entry = await environment.createEntry(contentType, { fields });
      return entry;
    } catch (e: any) {
      throw new Error(
        `Error: Can not create content type with Id "${contentType}"`,
        e
      );
    }
  }
}
