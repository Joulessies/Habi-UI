import type { IconProps } from "./types";

/** Compare / versus icon — two overlapping squares */
export function IconCompare({
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
      <rect x="2" y="2" width="12" height="12" rx="1" />
      <rect x="10" y="10" width="12" height="12" rx="1" />
    </svg>
  );
}
