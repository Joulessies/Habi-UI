import type { SVGAttributes } from "react";

export type IconProps = {
  /** Width and height of the icon. Defaults to `"1em"` so it scales with font-size. */
  size?: number | string;
  /** Stroke width. Defaults to `1.5`. */
  strokeWidth?: number;
} & Omit<SVGAttributes<SVGSVGElement>, "width" | "height">;
