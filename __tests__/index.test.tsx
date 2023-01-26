import { render, screen, within } from "@testing-library/react";
import { ConvertedCurrencyEntryCollection } from "../src/mocks/convertedCurrencyEntryCollection";
import CurrencyList from "../src/components/currencies/currencies-list";
import { ConvertedCurrencyEntry } from "../src/ts/Contentful/content-delivery";

describe("CurrencyList", () => {
  it("renders a list of currencies", () => {
    render(
      <CurrencyList
        currencies={
          ConvertedCurrencyEntryCollection.items as unknown as ConvertedCurrencyEntry[]
        }
      />
    );
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items).toHaveLength(48);
  });
});
