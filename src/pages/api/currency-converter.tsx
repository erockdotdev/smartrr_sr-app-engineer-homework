import { NextApiRequest, NextApiResponse } from "next";
import { DataManagementClient } from "src/services/contentful/content-management";

// accept same params as currency converter

// const options = {
//   method: "GET",
//   url: "https://currency-converter5.p.rapidapi.com/currency/convert",
//   params: { format: "json", from: "AUDs", to: "CADs", amount: "11.22" },
//   headers: {
//     "X-RapidAPI-Key": "d568196157msh99c319e6d6a940ep1fd2aejsn3ff0b1201aa1",
//     "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
//   },
// };

// const params = { format: "json", from: "AUD", to: "CAD", amount: "11.22" };
//   const response = await fetch(
//     "https://currency-converter5.p.rapidapi.com/currency/convert?" +
//       new URLSearchParams(params),
//     {
//       headers: {
//         "Content-Type": "application/json",
//         "X-RapidAPI-Key": "d568196157msh99c319e6d6a940ep1fd2aejsn3ff0b1201aa1",
//         "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
//       },
//     }
//   );
//   const body = await response.json();
//   console.log("body", body);

const testEntry = {
  title: {
    "en-US": "Test test test test from the API callCHRON",
  },
  from: {
    "en-US": "USD",
  },
  to: {
    "en-US": "BRL",
  },
  amount: {
    "en-US": 1,
  },
  date: {
    "en-US": "2023-01-23T22:09-05:00",
  },
  currencyConversion: {
    "en-US": {
      rates: {
        BRL: {
          rate: "5.2076",
          currency_name: "Brazilian real",
          rate_for_amount: "5.2076",
        },
      },
      amount: "1.0000",
      status: "success",
      updated_date: "2023-01-24",
      base_currency_code: "USD",
      base_currency_name: "United States dollar",
    },
  },
};

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  DataManagementClient.getSpace("k9ah7n9n57cn")
    .then((space: any) => space.getEnvironment("master"))
    .then((environment: any) =>
      environment.createEntry("convertedCurrency", {
        fields: testEntry,
      })
    )
    .then((entry: any) => entry.publish())
    .then((entry: any) => {
      response.status(200).json({
        status: "success",
        message: `Entry ${entry.sys.id} published.`,
      });
    })
    .catch((e: any) => {
      response.status(500).json({ error: e });
    });
}
