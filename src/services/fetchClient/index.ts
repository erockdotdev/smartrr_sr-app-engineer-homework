import axios from "axios";

export class FetchClient {
  readonly baseUrl: string;
  readonly headers?: Record<string, string>;
  constructor(baseUrl: string, headers?: Record<string, string>) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  async get({
    route = "",
    searchParams,
  }: {
    route?: string;
    searchParams?: Record<string, string>;
  }) {
    try {
      const url = new URL(route, this.baseUrl);
      // @todo - switched to axios and hardcoding values to temp resolve fetch and env var issues i'm hitting on the next serverless function
      // need to properly resolve
      const res = await axios({
        baseURL: `${url}`,
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "d568196157msh99c319e6d6a940ep1fd2aejsn3ff0b1201aa1",
          "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
        },
        params: searchParams,
      });
      return res.data;
    } catch (e: any) {
      throw new Error(`Error: Can not fetch data from "${this.baseUrl}"`, e);
    }
  }
}
