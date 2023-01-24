const contentful = require("contentful");
import { ConvertedCurrencyFields } from "src/ts/types";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API,
});

export async function getEntries(
  contentType: string
): Promise<ConvertedCurrencyFields[]> {
  try {
    const entries = await client.getEntries({ content_type: contentType });
    return entries.items;
  } catch (e: any) {
    throw Error(e);
  }
}
