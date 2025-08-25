import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CatGallery from "./CatGallery";

describe("CatGallery (unit)", () => {
  test("renders no cats when count is zero", () => {
    render(<CatGallery count={0} />);
    expect(screen.queryAllByLabelText("cat")).toHaveLength(0);
  });

  test("renders cats when count is above zero", () => {
    render(<CatGallery count={1} />);
    expect(screen.getAllByLabelText("cat")).toHaveLength(1);
  });

  test("updates when prop changes (rerender)", () => {
    const { rerender } = render(<CatGallery count={1} />);
    expect(screen.getAllByLabelText("cat")).toHaveLength(1);
    rerender(<CatGallery count={4} />);
    expect(screen.getAllByLabelText("cat")).toHaveLength(4);
  });

  test("shows overload message at count is above 10", () => {
    render(<CatGallery count={10} />);
    expect(screen.getByRole("alert")).toHaveTextContent("Cat Overload!");
  });

  test("no overload message below 10", () => {
    render(<CatGallery count={9} />);
    expect(screen.queryByRole("alert")).toBeNull();
  });
});
