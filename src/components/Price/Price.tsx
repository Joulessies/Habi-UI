import type { HTMLAttributes } from "react";

type PriceSize = "small" | "medium" | "large";

type PriceProps = {
  amount: number;
  originalAmount?: number;
  currency?: string;
  locale?: string;
  size?: PriceSize;
  showCurrencySymbol?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

const sizeStyles: Record<PriceSize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

function formatPrice(
  amount: number,
  currency: string,
  locale: string,
  showCurrencySymbol: boolean,
): string {
  const options: Intl.NumberFormatOptions = {
    style: showCurrencySymbol ? "currency" : "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...(showCurrencySymbol ? { currency } : {}),
  };

  return new Intl.NumberFormat(locale, options).format(amount);
}

export function Price({
  amount,
  originalAmount,
  currency = "PHP",
  locale = "en-PH",
  size = "medium",
  showCurrencySymbol = true,
  className = "",
  ...props
}: PriceProps) {
  const formattedPrice = formatPrice(
    amount,
    currency,
    locale,
    showCurrencySymbol,
  );
  const formattedOriginalPrice =
    originalAmount !== undefined
      ? formatPrice(originalAmount, currency, locale, showCurrencySymbol)
      : null;

  return (
    <span
      className={`inline-flex items-baseline gap-2 font-semibold text-[#17201d] ${sizeStyles[size]} ${className}`}
      {...props}
    >
      <span>{formattedPrice}</span>
      {formattedOriginalPrice && (
        <span className="text-sm font-normal text-[#9ca3af] line-through">
          {formattedOriginalPrice}
        </span>
      )}
    </span>
  );
}
