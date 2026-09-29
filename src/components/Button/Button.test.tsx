import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders the button label", () => {
    render(<Button>Add to cart</Button>);

    expect(
      screen.getByRole("button", {
        name: "Add to cart",
      }),
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Add to cart</Button>);

    await user.click(
      screen.getByRole("button", {
        name: "Add to cart",
      }),
    );

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("is disabled when disabled is true", () => {
    render(<Button disabled>Add to cart</Button>);

    expect(
      screen.getByRole("button", {
        name: "Add to cart",
      }),
    ).toBeDisabled();
  });

  it("is disabled while loading", () => {
    render(<Button loading>Adding to cart…</Button>);

    const button = screen.getByRole("button", {
      name: "Adding to cart…",
    });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Add to cart
      </Button>,
    );

    const button = screen.getByRole("button", {
      name: "Add to cart",
    });

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("uses type button by default", () => {
    render(<Button>Add to cart</Button>);

    expect(
      screen.getByRole("button", {
        name: "Add to cart",
      }),
    ).toHaveAttribute("type", "button");
  });

  it("supports the secondary variant", () => {
    render(<Button variant="secondary">View details</Button>);

    expect(
      screen.getByRole("button", {
        name: "View details",
      }),
    ).toBeInTheDocument();
  });
});
