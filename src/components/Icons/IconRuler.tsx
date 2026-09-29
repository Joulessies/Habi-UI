import type { IconProps } from "./types";

/** Ruler / size guide icon */
export function IconRuler({
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
      <path d="M3 3l18 18" />
      <path d="M3 9l6-6" />
      <path d="M3 15l12-12" />
      <path d="M9 21l12-12" />
      <path d="M15 21l6-6" />
      <rect x="2" y="2" width="20" height="20" rx="2" />
    </svg>
  );
}
