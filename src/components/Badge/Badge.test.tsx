import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders its label", () => {
    render(<Badge>New arrival</Badge>);

    expect(screen.getByText("New arrival")).toBeInTheDocument();
  });

  it.each([
    ["primary", "bg-blue-500"],
    ["secondary", "bg-gray-500"],
    ["success", "bg-green-500"],
    ["warning", "bg-yellow-500"],
    ["error", "bg-red-500"],
  ] as const)("uses the %s variant styles", (variant, backgroundClass) => {
    render(<Badge variant={variant}>Status</Badge>);

    expect(screen.getByText("Status")).toHaveClass(backgroundClass);
  });

  it("uses the primary variant by default", () => {
    render(<Badge>Status</Badge>);

    expect(screen.getByText("Status")).toHaveClass("bg-blue-500");
  });

  it("forwards native span props and custom classes", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Badge
        aria-label="Product status"
        className="custom-class"
        data-testid="status-badge"
        onClick={onClick}
      >
        In stock
      </Badge>,
    );

    const badge = screen.getByTestId("status-badge");

    expect(badge).toHaveAttribute("aria-label", "Product status");
    expect(badge).toHaveClass("custom-class");

    await user.click(badge);

    expect(onClick).toHaveBeenCalledOnce();
  });
});
