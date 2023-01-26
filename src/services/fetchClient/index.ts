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
      const response = await fetch(url + "/" + params, {
        headers: { ...this.headers },
      });
      const body = await response.json();
      return body;
    } catch (e: any) {
      throw new Error(`Error: Can not fetch data from "${this.baseUrl}"`, e);
    }
  }
}
