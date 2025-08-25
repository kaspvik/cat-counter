import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CatCounter from "./CatCounter";

const noop = () => {};

describe("CatCounter (unit)", () => {
  test("renders current count", () => {
    render(
      <CatCounter count={1} onAdd={noop} onRemove={noop} onReset={noop} />
    );
    expect(screen.getByText(/Cats spotted:/i)).toHaveTextContent("1");
  });
});
