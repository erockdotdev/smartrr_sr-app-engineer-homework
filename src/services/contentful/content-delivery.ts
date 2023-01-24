const contentful = require("contentful");

export const ContentfulDelivery = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API,
});
