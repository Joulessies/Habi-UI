import type { Meta, StoryObj } from "@storybook/react";
import { Price } from "./Price";

const meta = {
  title: "Components/Price",
  component: Price,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    amount: 2700,
  },
} satisfies Meta<typeof Price>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SalePrice: Story = {
  args: {
    amount: 2000,
    originalAmount: 2700,
  },
};

export const WithoutCurrencySymbol: Story = {
  args: {
    showCurrencySymbol: false,
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
