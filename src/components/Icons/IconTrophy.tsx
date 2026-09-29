import type { IconProps } from "./types";

/** Trophy / loyalty reward / top seller badge icon */
export function IconTrophy({
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 22v-4" />
      <path d="M14 22v-4" />
      <path d="M6 4v10a6 6 0 0 0 12 0V4H6z" />
    </svg>
  );
}
