import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ProductCard } from "./ProductCard";

const defaultProps = {
  name: "Everyday Tote",
  image: "/tote.jpg",
  price: "PHP 2,700",
};

describe("ProductCard", () => {
  describe("core rendering", () => {
    it("renders as an article landmark", () => {
      render(<ProductCard {...defaultProps} />);
      expect(screen.getByRole("article")).toBeInTheDocument();
    });

    it("renders the product name as a heading", () => {
      render(<ProductCard {...defaultProps} />);
      expect(
        screen.getByRole("heading", { name: "Everyday Tote" }),
      ).toBeInTheDocument();
    });

    it("renders the product image with the product name as alt text", () => {
      render(<ProductCard {...defaultProps} />);
      expect(
        screen.getByRole("img", { name: "Everyday Tote" }),
      ).toHaveAttribute("src", "/tote.jpg");
    });

    it("renders the price", () => {
      render(<ProductCard {...defaultProps} />);
      expect(screen.getByText("PHP 2,700")).toBeInTheDocument();
    });

    it("renders a category label when provided", () => {
      render(<ProductCard {...defaultProps} category="Bags" />);
      expect(screen.getByText("Bags")).toBeInTheDocument();
    });

    it("does not render a category label when omitted", () => {
      render(<ProductCard {...defaultProps} />);
      expect(screen.queryByText("Bags")).not.toBeInTheDocument();
    });
  });

  // ─── Pricing ──────────────────────────────────────────────────────────────

  describe("pricing", () => {
    it("renders the original price with a strikethrough when provided", () => {
      render(
        <ProductCard
          {...defaultProps}
          price="PHP 2,000"
          originalPrice="PHP 2,700"
        />,
      );
      expect(screen.getByText("PHP 2,000")).toBeInTheDocument();
      expect(screen.getByText("PHP 2,700")).toHaveClass("line-through");
    });

    it("does not render an original price when omitted", () => {
      render(<ProductCard {...defaultProps} price="PHP 2,700" />);
      // Only one price element should exist
      expect(screen.getAllByText("PHP 2,700")).toHaveLength(1);
    });
  });

  // ─── Badge ────────────────────────────────────────────────────────────────

  describe("badge", () => {
    it("renders a badge when provided", () => {
      render(<ProductCard {...defaultProps} badge="New arrival" />);
      expect(screen.getByText("New arrival")).toHaveClass(
        "inline-flex",
        "bg-[#17201d]",
      );
    });

    it("does not render a badge when omitted", () => {
      render(<ProductCard {...defaultProps} />);
      expect(screen.queryByText("New arrival")).not.toBeInTheDocument();
    });
  });

  // ─── Rating ───────────────────────────────────────────────────────────────

  describe("rating", () => {
    it("renders rating with an accessible label", () => {
      render(<ProductCard {...defaultProps} rating={4.5} reviewCount={18} />);
      expect(
        screen.getByLabelText("Rated 4.5 out of 5 from 18 reviews"),
      ).toBeInTheDocument();
    });

    it("renders rating without a review count", () => {
      render(<ProductCard {...defaultProps} rating={4.0} />);
      expect(screen.getByLabelText("Rated 4 out of 5")).toBeInTheDocument();
      expect(screen.getByText("4.0")).toBeInTheDocument();
    });

    it("renders the numeric rating value", () => {
      render(<ProductCard {...defaultProps} rating={4.5} reviewCount={18} />);
      expect(screen.getByText("4.5 (18)")).toBeInTheDocument();
    });

    it("does not render a rating section when rating is omitted", () => {
      render(<ProductCard {...defaultProps} />);
      expect(screen.queryByLabelText(/Rated/)).not.toBeInTheDocument();
    });

    it("clamps star count to 5 for out-of-range values", () => {
      // rating=10 should clamp to 5 — verified via the accessible label
      render(<ProductCard {...defaultProps} rating={10} />);
      expect(
        screen.getByLabelText("Rated 10 out of 5"),
      ).toBeInTheDocument();
      // Confirm only 5 SVG stars are rendered in the visual row
      const starRow = screen.getByLabelText("Rated 10 out of 5");
      expect(starRow.querySelectorAll("svg")).toHaveLength(5);
    });
  });

  // ─── Product link ─────────────────────────────────────────────────────────

  describe("product link", () => {
    it("wraps the product name in a link when href is provided", () => {
      render(<ProductCard {...defaultProps} href="/products/tote" />);
      expect(
        screen.getByRole("link", { name: "Everyday Tote" }),
      ).toHaveAttribute("href", "/products/tote");
    });

    it("renders the product name as plain text when href is omitted", () => {
      render(<ProductCard {...defaultProps} />);
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
  });

  // ─── Add to cart ──────────────────────────────────────────────────────────

  describe("add to cart", () => {
    it("renders an Add to cart button", () => {
      render(<ProductCard {...defaultProps} />);
      expect(
        screen.getByRole("button", { name: /add to cart/i }),
      ).toBeInTheDocument();
    });

    it("calls onAddToCart when the button is clicked", async () => {
      const user = userEvent.setup();
      const onAddToCart = vi.fn();
      render(<ProductCard {...defaultProps} onAddToCart={onAddToCart} />);

      await user.click(screen.getByRole("button", { name: /add to cart/i }));

      expect(onAddToCart).toHaveBeenCalledOnce();
    });

    it("shows Out of stock and disables the button when isOutOfStock is true", () => {
      render(<ProductCard {...defaultProps} isOutOfStock />);
      const btn = screen.getByRole("button", { name: /out of stock/i });
      expect(btn).toBeDisabled();
    });

    it("does not call onAddToCart when out of stock", async () => {
      const user = userEvent.setup();
      const onAddToCart = vi.fn();
      render(
        <ProductCard
          {...defaultProps}
          isOutOfStock
          onAddToCart={onAddToCart}
        />,
      );

      await user.click(screen.getByRole("button", { name: /out of stock/i }));

      expect(onAddToCart).not.toHaveBeenCalled();
    });

    it("renders a custom cartIcon when provided", () => {
      render(
        <ProductCard
          {...defaultProps}
          cartIcon={<span data-testid="custom-cart-icon" />}
        />,
      );
      expect(screen.getByTestId("custom-cart-icon")).toBeInTheDocument();
    });

    it("does not render the cart icon when out of stock", () => {
      render(
        <ProductCard
          {...defaultProps}
          isOutOfStock
          cartIcon={<span data-testid="custom-cart-icon" />}
        />,
      );
      expect(screen.queryByTestId("custom-cart-icon")).not.toBeInTheDocument();
    });
  });

  // ─── Wishlist ─────────────────────────────────────────────────────────────

  describe("wishlist", () => {
    it("does not render a wishlist button when onWishlist is omitted", () => {
      render(<ProductCard {...defaultProps} />);
      expect(
        screen.queryByRole("button", { name: /wishlist/i }),
      ).not.toBeInTheDocument();
    });

    it("renders the wishlist button with an accessible name when onWishlist is provided", () => {
      render(<ProductCard {...defaultProps} onWishlist={vi.fn()} />);
      expect(
        screen.getByRole("button", { name: "Add Everyday Tote to wishlist" }),
      ).toBeInTheDocument();
    });

    it("calls onWishlist when the wishlist button is clicked", async () => {
      const user = userEvent.setup();
      const onWishlist = vi.fn();
      render(<ProductCard {...defaultProps} onWishlist={onWishlist} />);

      await user.click(
        screen.getByRole("button", { name: "Add Everyday Tote to wishlist" }),
      );

      expect(onWishlist).toHaveBeenCalledOnce();
    });

    it("renders a custom wishlistIcon when provided", () => {
      render(
        <ProductCard
          {...defaultProps}
          onWishlist={vi.fn()}
          wishlistIcon={<span data-testid="custom-heart" />}
        />,
      );
      expect(screen.getByTestId("custom-heart")).toBeInTheDocument();
    });
  });

  // ─── className passthrough ────────────────────────────────────────────────

  describe("className", () => {
    it("merges a custom className onto the root article element", () => {
      render(<ProductCard {...defaultProps} className="my-custom-class" />);
      expect(screen.getByRole("article")).toHaveClass("my-custom-class");
    });
  });
});
