import type { Meta, StoryObj } from "@storybook/react";
import {
  Icon360,
  IconAddress,
  IconBag,
  IconBanknote,
  IconBell,
  IconBookmark,
  IconCalendar,
  IconCart,
  IconCartAdd,
  IconCartCheck,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconClipboard,
  IconClock,
  IconClose,
  IconCompare,
  IconCoupon,
  IconCreditCard,
  IconEye,
  IconFilter,
  IconGift,
  IconGlobe,
  IconGrid,
  IconHome,
  IconImage,
  IconList,
  IconLock,
  IconLogOut,
  IconMapPin,
  IconMenu,
  IconMessageSquare,
  IconMinus,
  IconPackage,
  IconPercent,
  IconPlus,
  IconReceipt,
  IconReturn,
  IconRuler,
  IconSearch,
  IconSettings,
  IconShare,
  IconShield,
  IconSort,
  IconStar,
  IconStarFilled,
  IconStore,
  IconSwatch,
  IconTag,
  IconThumbDown,
  IconThumbUp,
  IconTrash,
  IconTrophy,
  IconTruck,
  IconUser,
  IconWallet,
  IconWishlist,
  IconZap,
  IconZoomIn,
  IconZoomOut,
} from "./index";
import type { IconProps } from "./types";
import type { ComponentType } from "react";

type ShowcaseEntry = { name: string; Icon: ComponentType<IconProps> };

const GROUPS: { label: string; icons: ShowcaseEntry[] }[] = [
  {
    label: "Navigation & UI",
    icons: [
      { name: "IconSearch", Icon: IconSearch },
      { name: "IconFilter", Icon: IconFilter },
      { name: "IconSort", Icon: IconSort },
      { name: "IconGrid", Icon: IconGrid },
      { name: "IconList", Icon: IconList },
      { name: "IconMenu", Icon: IconMenu },
      { name: "IconHome", Icon: IconHome },
      { name: "IconChevronLeft", Icon: IconChevronLeft },
      { name: "IconChevronRight", Icon: IconChevronRight },
      { name: "IconChevronDown", Icon: IconChevronDown },
      { name: "IconChevronUp", Icon: IconChevronUp },
      { name: "IconClose", Icon: IconClose },
      { name: "IconPlus", Icon: IconPlus },
      { name: "IconMinus", Icon: IconMinus },
    ],
  },
  {
    label: "Shopping",
    icons: [
      { name: "IconCart", Icon: IconCart },
      { name: "IconCartAdd", Icon: IconCartAdd },
      { name: "IconCartCheck", Icon: IconCartCheck },
      { name: "IconBag", Icon: IconBag },
      { name: "IconWishlist", Icon: IconWishlist },
      { name: "IconBookmark", Icon: IconBookmark },
      { name: "IconCompare", Icon: IconCompare },
      { name: "IconTrash", Icon: IconTrash },
    ],
  },
  {
    label: "Product",
    icons: [
      { name: "IconStar", Icon: IconStar },
      { name: "IconStarFilled", Icon: IconStarFilled },
      { name: "IconTag", Icon: IconTag },
      { name: "IconPercent", Icon: IconPercent },
      { name: "IconImage", Icon: IconImage },
      { name: "IconZoomIn", Icon: IconZoomIn },
      { name: "IconZoomOut", Icon: IconZoomOut },
      { name: "Icon360", Icon: Icon360 },
      { name: "IconEye", Icon: IconEye },
      { name: "IconSwatch", Icon: IconSwatch },
      { name: "IconRuler", Icon: IconRuler },
      { name: "IconShare", Icon: IconShare },
      { name: "IconBell", Icon: IconBell },
    ],
  },
  {
    label: "Reviews & Q&A",
    icons: [
      { name: "IconThumbUp", Icon: IconThumbUp },
      { name: "IconThumbDown", Icon: IconThumbDown },
      { name: "IconMessageSquare", Icon: IconMessageSquare },
    ],
  },
  {
    label: "Checkout & Payments",
    icons: [
      { name: "IconCreditCard", Icon: IconCreditCard },
      { name: "IconWallet", Icon: IconWallet },
      { name: "IconBanknote", Icon: IconBanknote },
      { name: "IconCoupon", Icon: IconCoupon },
      { name: "IconGift", Icon: IconGift },
      { name: "IconLock", Icon: IconLock },
      { name: "IconReceipt", Icon: IconReceipt },
      { name: "IconCheck", Icon: IconCheck },
    ],
  },
  {
    label: "Fulfillment",
    icons: [
      { name: "IconTruck", Icon: IconTruck },
      { name: "IconPackage", Icon: IconPackage },
      { name: "IconStore", Icon: IconStore },
      { name: "IconReturn", Icon: IconReturn },
      { name: "IconMapPin", Icon: IconMapPin },
      { name: "IconCalendar", Icon: IconCalendar },
      { name: "IconClock", Icon: IconClock },
      { name: "IconGlobe", Icon: IconGlobe },
    ],
  },
  {
    label: "Promotions",
    icons: [
      { name: "IconZap", Icon: IconZap },
      { name: "IconTrophy", Icon: IconTrophy },
    ],
  },
  {
    label: "Account",
    icons: [
      { name: "IconUser", Icon: IconUser },
      { name: "IconShield", Icon: IconShield },
      { name: "IconLogOut", Icon: IconLogOut },
      { name: "IconSettings", Icon: IconSettings },
      { name: "IconClipboard", Icon: IconClipboard },
      { name: "IconAddress", Icon: IconAddress },
    ],
  },
];

type ShowcaseProps = {
  size: number;
  strokeWidth: number;
  color: string;
};

function IconShowcase({ size, strokeWidth, color }: ShowcaseProps) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "24px", maxWidth: 900 }}>
      {GROUPS.map((group) => (
        <section key={group.label} style={{ marginBottom: "32px" }}>
          <h3
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6b7280",
              marginBottom: "16px",
            }}
          >
            {group.label}
            <span
              style={{
                marginLeft: "8px",
                fontSize: "10px",
                fontWeight: 400,
                opacity: 0.6,
              }}
            >
              ({group.icons.length})
            </span>
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(112px, 1fr))",
              gap: "8px",
            }}
          >
            {group.icons.map(({ name, Icon }) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 8px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  background: "#fafafa",
                }}
              >
                <Icon
                  size={size}
                  strokeWidth={strokeWidth}
                  style={{ color }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    color: "#6b7280",
                    textAlign: "center",
                    wordBreak: "break-all",
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const meta = {
  title: "Icons/Ecommerce Icons",
  component: IconShowcase,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    size: {
      control: { type: "range", min: 16, max: 64, step: 4 },
      description: "Icon size in px",
    },
    strokeWidth: {
      control: { type: "range", min: 0.5, max: 3, step: 0.25 },
      description: "Stroke width",
    },
    color: {
      control: "color",
      description: "Icon colour (currentColor)",
    },
  },
  args: {
    size: 24,
    strokeWidth: 1.5,
    color: "#176b5b",
  },
} satisfies Meta<typeof IconShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {};

export const Large: Story = {
  args: { size: 48, strokeWidth: 1 },
};

export const Thick: Story = {
  args: { size: 24, strokeWidth: 2.5 },
};

export const Small: Story = {
  args: { size: 16, strokeWidth: 1.5 },
};
