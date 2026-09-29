import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Rating } from "./Rating";

describe("Rating", () => {
  describe("accessible label", () => {
    it("includes the value and max in the aria-label", () => {
      render(<Rating value={4.5} />);
      expect(
        screen.getByLabelText("Rated 4.5 out of 5"),
      ).toBeInTheDocument();
    });

    it("includes review count in the aria-label when provided", () => {
      render(<Rating value={3.8} reviewCount={42} />);
      expect(
        screen.getByLabelText("Rated 3.8 out of 5 from 42 reviews"),
      ).toBeInTheDocument();
    });

    it("respects a custom max in the aria-label", () => {
      render(<Rating value={8} max={10} />);
      expect(
        screen.getByLabelText("Rated 8 out of 10"),
      ).toBeInTheDocument();
    });
  });

  describe("star count", () => {
    it("renders exactly max stars", () => {
      render(<Rating value={3} />);
      const row = screen.getByLabelText("Rated 3 out of 5");
      // The visual star row (aria-hidden span) contains 5 SVGs
      expect(row.querySelectorAll("svg")).toHaveLength(5);
    });

    it("renders the correct number of stars for a custom max", () => {
      render(<Rating value={6} max={10} />);
      const row = screen.getByLabelText("Rated 6 out of 10");
      expect(row.querySelectorAll("svg")).toHaveLength(10);
    });

    it("clamps a value above max to max stars", () => {
      render(<Rating value={99} max={5} />);
      const row = screen.getByLabelText("Rated 99 out of 5");
      expect(row.querySelectorAll("svg")).toHaveLength(5);
    });

    it("renders all empty stars for value 0", () => {
      render(<Rating value={0} />);
      expect(
        screen.getByLabelText("Rated 0 out of 5"),
      ).toBeInTheDocument();
    });
  });

  describe("numeric display", () => {
    it("shows the value formatted to one decimal place", () => {
      render(<Rating value={4.3} />);
      expect(screen.getByText(/^4\.3/)).toBeInTheDocument();
    });

    it("shows review count in parentheses when provided", () => {
      render(<Rating value={4.3} reviewCount={128} />);
      expect(screen.getByText("4.3 (128)")).toBeInTheDocument();
    });

    it("does not show parentheses when reviewCount is omitted", () => {
      render(<Rating value={4.3} />);
      expect(screen.queryByText(/\(/)).not.toBeInTheDocument();
    });
  });
});