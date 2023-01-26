// @todo make singleton

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
      const params = searchParams
        ? `?${new URLSearchParams(searchParams)}`
        : "";
      const url = new URL(route, this.baseUrl);
      // const response = await fetch(url + "/" + params, {
      //   headers: this.headers,
      // });

      console.log(process.env.NEXT_PUBLIC_CURRENCY_CONVERTER_API_KEY);
      // @todo, this is failing on the next functions when programmatically added - hardcoding for now
      const response = await fetch(url + "/" + params, {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "d568196157msh99c319e6d6a940ep1fd2aejsn3ff0b1201aa1",
          "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
        },
      });
      const body = await response.json();
      return body;
    } catch (e: any) {
      throw new Error(`Error: Can not fetch data from "${this.baseUrl}"`, e);
    }
  }
}
