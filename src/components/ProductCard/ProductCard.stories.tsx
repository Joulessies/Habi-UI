import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconPercent, IconZap, IconTrophy } from "../Icons";
import { ProductCard } from "./ProductCard";

const meta = {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const productImage =
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800";

const baseArgs = {
  name: "Everyday Tote",
  category: "Bags",
  price: "PHP 2,700",
  image: productImage,
  onAddToCart: () => {},
};

export const Default: Story = { args: baseArgs };

export const SalePrice: Story = {
  args: { ...baseArgs, price: "PHP 2,000", originalPrice: "PHP 2,700" },
};

export const WithBadge: Story = {
  args: { ...baseArgs, badge: "New arrival" },
};

export const FlashSaleBadge: Story = {
  args: {
    ...baseArgs,
    price: "PHP 2,000",
    originalPrice: "PHP 2,700",
    badge: "Flash sale",
    badgeIcon: <IconZap />,
  },
};

export const PercentBadge: Story = {
  args: {
    ...baseArgs,
    price: "PHP 2,000",
    originalPrice: "PHP 2,700",
    badge: "26% off",
    badgeIcon: <IconPercent />,
  },
};

export const BestsellerBadge: Story = {
  args: {
    ...baseArgs,
    badge: "Bestseller",
    badgeIcon: <IconTrophy />,
    rating: 4.9,
    reviewCount: 312,
  },
};

export const WithRating: Story = {
  args: { ...baseArgs, rating: 4.8, reviewCount: 124 },
};

export const OutOfStock: Story = {
  args: { ...baseArgs, isOutOfStock: true },
};

export const LongName: Story = {
  args: {
    ...baseArgs,
    name: "Handwoven Everyday Carryall with Adjustable Shoulder Strap",
  },
};

export const WishlistEnabled: Story = {
  args: { ...baseArgs, onWishlist: () => {} },
};

export const FullFeatured: Story = {
  args: {
    ...baseArgs,
    badge: "Sale",
    badgeIcon: <IconPercent />,
    price: "PHP 2,000",
    originalPrice: "PHP 2,700",
    rating: 4.6,
    reviewCount: 89,
    onWishlist: () => {},
  },
};
