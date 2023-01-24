import { KeyValueMap } from "contentful-management/types";
import { createClient } from "contentful-management";

const client = createClient({
  accessToken: `${process.env.CONTENTFUL_CONTENT_MANAGEMENT_API}`,
});

async function createEntry<T extends KeyValueMap>(
  contentTypeId: string,
  fields: T
) {
  try {
    const space = await client.getSpace(
      `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`
    );
    const environment = await space.getEnvironment(
      // @todo: the serverless function is not picking up this env var, will have to follow up
      "master"
      // `${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`
    );
    const entry = await environment.createEntry(contentTypeId, { fields });
    // @todo publish should be callable on entry - will have to come back to this work around
    const getEntry = await environment.getEntry(entry.sys.id);
    getEntry.publish();

    return entry;
  } catch (e) {
    console.error("Error", e);
  }
}

export { createEntry };
