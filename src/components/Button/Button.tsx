import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  loading = false,
  disabled,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles = [
    "inline-flex",
    "min-h-11",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-xl",
    "px-6",
    "py-2.5",
    "text-[0.9375rem]",
    "font-semibold",
    "tracking-[-0.01em]",
    "select-none",
    "cursor-pointer",
    "whitespace-nowrap",
    // Normalise any icon library SVG to 1em so callers don't need explicit sizing
    "[&_svg]:size-[1em]",
    "[&_svg]:shrink-0",
    "transition-[background-color,box-shadow,transform,opacity]",
    "duration-150",
    "ease-out",
    "active:scale-[0.97]",
    "active:duration-75",
    "focus:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-40",
  ].join(" ");

  const variantStyles =
    variant === "primary"
      ? [
          "bg-[#176b5b]",
          "text-white",
          "hover:bg-[#13604f]",
          "hover:-translate-y-px",
          "focus-visible:ring-[#176b5b]",
        ].join(" ")
      : [
          "bg-transparent",
          "border",
          "border-[#d0d5dd]",
          "text-[#17201d]",
          "hover:bg-[#f5f5f5]",
          "hover:border-[#b0b9c0]",
          "focus-visible:ring-[#176b5b]",
        ].join(" ");

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="h-[1.05em] w-[1.05em] shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent opacity-70"
        />
      )}
      {children}
    </button>
  );
}
