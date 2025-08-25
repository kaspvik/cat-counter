import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CatGallery from "./CatGallery";

const setup = (count = 0) => {
  const utils = render(<CatGallery count={count} />);
  const cats = () => utils.queryAllByAltText("cat");
  const alert = () => utils.queryByRole("alert");
  return { ...utils, cats, alert };
};

describe("CatGallery (unit)", () => {
  test.each([0, 1, 3, 5])("renders %i cats", (n) => {
    const { cats } = setup(n);
    expect(cats()).toHaveLength(n);
  });

  test("updates when prop changes (rerender)", () => {
    const { rerender, cats } = setup(1);
    expect(cats()).toHaveLength(1);
    rerender(<CatGallery count={4} />);
    expect(cats()).toHaveLength(4);
  });

  test.each([
    { count: 9, visible: false },
    { count: 10, visible: true },
    { count: 11, visible: true },
  ])("overload message visibility at count=$count", ({ count, visible }) => {
    const { alert } = setup(count);
    if (visible) {
      expect(alert()).toHaveTextContent("Cat Overload!");
    } else {
      expect(alert()).toBeNull();
    }
  });
});
