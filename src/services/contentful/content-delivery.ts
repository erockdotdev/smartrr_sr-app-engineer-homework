import { createClient } from "contentful";
import {
  ConvertedCurrencyEntry,
  ConvertedCurrencyResponse,
} from "src/ts/types";

export const client = createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API}`,
});

export async function getEntries(
  contentType: string
): Promise<ConvertedCurrencyEntry[]> {
  try {
    const entries = await client.getEntries<ConvertedCurrencyResponse>({
      content_type: contentType,
    });
    return entries.items;
  } catch (e: any) {
    throw Error(e);
  }
}
