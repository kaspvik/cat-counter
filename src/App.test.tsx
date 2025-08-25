import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";

const get = () => {
  const add = screen.getByRole("button", { name: /add cat/i });
  const remove = screen.getByRole("button", { name: /remove cat/i });
  const reset = screen.getByRole("button", { name: /reset/i });
  const countText = () => screen.getByText(/Cats spotted:/i);
  const cats = () => screen.queryAllByAltText("cat");
  return { add, remove, reset, countText, cats };
};

describe("App (integration)", () => {
  test("initially 0 cats in counter and gallery", () => {
    render(<App />);
    const { countText, cats } = get();
    expect(countText()).toHaveTextContent("0");
    expect(cats()).toHaveLength(0);
  });

  test("Add updates both counter and gallery", () => {
    render(<App />);
    const { add, countText, cats } = get();
    fireEvent.click(add);
    fireEvent.click(add);
    expect(countText()).toHaveTextContent("2");
    expect(cats()).toHaveLength(2);
  });

  test("Remove does not go below 0 and Reset clears", () => {
    render(<App />);
    const { add, remove, reset, countText, cats } = get();
    fireEvent.click(add);
    fireEvent.click(remove);
    fireEvent.click(remove);
    expect(countText()).toHaveTextContent("0");
    expect(cats()).toHaveLength(0);

    fireEvent.click(add);
    fireEvent.click(add);
    fireEvent.click(reset);
    expect(countText()).toHaveTextContent("0");
    expect(cats()).toHaveLength(0);
  });
});
