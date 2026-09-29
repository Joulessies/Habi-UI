import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "./Rating";

const meta = {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: { control: { type: "number", min: 0, max: 5, step: 0.1 } },
    max: { control: { type: "number", min: 1, max: 10, step: 1 } },
    reviewCount: { control: "number" },
  },
  args: {
    value: 4.3,
    max: 5,
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithReviewCount: Story = {
  args: { value: 4.3, reviewCount: 128 },
};

export const Full: Story = {
  args: { value: 5, reviewCount: 99 },
};

export const Half: Story = {
  args: { value: 2.5 },
};

export const Low: Story = {
  args: { value: 1.2, reviewCount: 4 },
};

export const AllStars: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {[5, 4.7, 4.3, 3.5, 2.5, 1.2, 0].map((v) => (
        <Rating key={v} value={v} reviewCount={Math.round(v * 30)} />
      ))}
    </div>
  ),
};
