import type { IconProps } from "./types";

/** 360° product spin view icon */
export function Icon360({
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
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" />
      <polyline points="22 2 22 8 16 8" />
      <ellipse cx="12" cy="17" rx="7" ry="2" />
    </svg>
  );
}
