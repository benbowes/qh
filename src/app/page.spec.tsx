import * as React from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  getNodeText,
} from "@testing-library/react";
import Page from "./page";

test("Can sort low to high", async () => {
  render(<Page />);

  const sortSelect = await screen.findByTestId("price-sort");

  fireEvent.change(sortSelect, {
    target: { value: "price-low-high" },
  });

  const prices = await screen.findAllByTestId("price");

  await waitFor(() => expect(getNodeText(prices[0])).toEqual(" 227"));

  await waitFor(() =>
    expect(getNodeText(prices[prices.length - 1])).toEqual(" 535")
  );
});

test("Can sort high to low", async () => {
  render(<Page />);

  const sortSelect = await screen.findByTestId("price-sort");

  fireEvent.change(sortSelect, {
    target: { value: "price-high-low" },
  });

  const prices = await screen.findAllByTestId("price");

  await waitFor(() => expect(getNodeText(prices[0])).toEqual(" 535"));

  await waitFor(() =>
    expect(getNodeText(prices[prices.length - 1])).toEqual(" 227")
  );
});
