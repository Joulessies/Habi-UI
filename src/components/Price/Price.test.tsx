import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Price } from "./Price";

describe("Price", () => {
  it("formats an amount with the currency symbol by default", () => {
    render(<Price amount={2700} />);

    expect(screen.getByText("₱2,700.00")).toBeInTheDocument();
  });

  it("can hide the currency symbol", () => {
    render(<Price amount={2700} showCurrencySymbol={false} />);

    expect(screen.getByText("2,700.00")).toBeInTheDocument();
    expect(screen.queryByText("₱2,700.00")).not.toBeInTheDocument();
  });

  it("renders the original amount with a strikethrough", () => {
    render(<Price amount={2000} originalAmount={2700} />);

    expect(screen.getByText("₱2,700.00")).toHaveClass("line-through");
  });

  it("renders zero as an original amount", () => {
    render(<Price amount={100} originalAmount={0} />);

    expect(screen.getByText("₱0.00")).toHaveClass("line-through");
  });

  it("supports sizes and native span props", () => {
    render(
      <Price
        amount={100}
        size="large"
        data-testid="price"
        aria-label="Price"
      />,
    );

    const price = screen.getByTestId("price");
    expect(price).toHaveClass("text-lg");
    expect(price).toHaveAttribute("aria-label", "Price");
  });
});
