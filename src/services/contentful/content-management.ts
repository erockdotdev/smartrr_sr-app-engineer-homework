// // Authorization: Bearer <cma_token>
// // Content-Type: application/vnd.contentful.management.v1+json
// // X-Contentful-Content-Type: hfM9RCJIk0wIm06WkEOQY
// // {
// //   "fields": {
// //     "title": {
// //       "en-US": "Hello, World!"
// //     },
// //     "body": {
// //       "en-US": "Bacon is healthy!"
// //     }
// //   },
// //   "metadata": {
// //     "tags": [
// //       {
// //         "sys": {
// //           "type": "Link",
// //           "linkType": "Tag",
// //           "id": "nyCampaign"
// //         }
// //       }
// //     ]
// //   }
// // }

// import contentful from "contentful-management";
// const client = contentful.createClient({
//   // This is the access token for this space. Normally you get the token in the Contentful web app
//   accessToken: "qNZR6k7BxKye_3KamuQ6vHrJnXh-ztpLfq0wpITK6IQ",
// });

// // const apiBase = "https://cdn.contentful.com" // Read only
// const apiBase = "api.contentful.com";
// //
// //POST/spaces/{space_id}/environments/{environment_id}/entries

// https: const contentfulContentManager = fetch();

const contentful = require("contentful-management");

export const DataManagementClient = contentful.createClient({
  accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_API,
});
