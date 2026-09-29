import type { IconProps } from "./types";

/** Swatch / colour variant selector icon */
export function IconSwatch({
  size = "1em",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="6.5" cy="6.5" r="3.5" />
      <circle cx="17.5" cy="6.5" r="3.5" />
      <circle cx="6.5" cy="17.5" r="3.5" />
      <circle cx="17.5" cy="17.5" r="3.5" />
    </svg>
  );
}
