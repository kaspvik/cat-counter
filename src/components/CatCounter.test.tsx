import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import CatCounter from "./CatCounter";

const noop = () => {};

describe("CatCounter (unit)", () => {
  test("calls onAdd when 'Add cat' is clicked", () => {
    const onAdd = vi.fn();
    render(
      <CatCounter count={1} onAdd={onAdd} onRemove={noop} onReset={noop} />
    );

    const addBtn = screen.getByRole("button", { name: /add cat/i });
    fireEvent.click(addBtn);

    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  test("renders current count", () => {
    render(
      <CatCounter count={1} onAdd={noop} onRemove={noop} onReset={noop} />
    );
    expect(screen.getByText(/Cats spotted:/i)).toHaveTextContent("1");
  });

  test("calls onRemove when 'Remove cat' is clicked", () => {
    const onRemove = vi.fn();
    render(
      <CatCounter count={1} onAdd={noop} onRemove={onRemove} onReset={noop} />
    );

    const removeBtn = screen.getByRole("button", { name: /remove cat/i });
    fireEvent.click(removeBtn);

    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  test.each([
    { count: 0, disabled: true, label: "disabled when count is 0" },
    { count: 1, disabled: false, label: "enabled when count is above 0" },
  ])("remove button is $label", ({ count, disabled }) => {
    render(
      <CatCounter count={count} onAdd={noop} onRemove={noop} onReset={noop} />
    );
    const removeBtn = screen.getByRole("button", { name: /remove cat/i });
    if (disabled) expect(removeBtn).toBeDisabled();
    else expect(removeBtn).toBeEnabled();
  });
});
