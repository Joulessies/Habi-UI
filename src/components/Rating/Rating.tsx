import { useId } from "react";

const STAR_POINTS =
  "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2";

type StarProps = {
  fill: number;
  size: string | number;
  clipId: string;
};

function Star({ fill, size, clipId }: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {fill > 0 && fill < 1 && (
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width={`${fill * 100}%`} height="24" />
          </clipPath>
        </defs>
      )}

      {/* Outline — always shown */}
      <polygon
        points={STAR_POINTS}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Filled layer — clipped for partial, full for fill === 1 */}
      {fill > 0 && (
        <polygon
          points={STAR_POINTS}
          fill="currentColor"
          stroke="none"
          clipPath={fill < 1 ? `url(#${clipId})` : undefined}
        />
      )}
    </svg>
  );
}

export type RatingProps = {
  /** Numeric rating value between 0 and max. Supports decimals for partial stars. */
  value: number;
  /** Total number of reviews shown after the numeric value. */
  reviewCount?: number;
  /** Maximum number of stars. Defaults to 5. */
  max?: number;
  /** Star icon size. Defaults to `"0.875em"`. */
  size?: string | number;
};

export function Rating({ value, reviewCount, max = 5, size = "0.875em" }: RatingProps) {
  const uid = useId();
  const clamped = Math.min(max, Math.max(0, value));

  return (
    <p
      className="flex items-center gap-1.5 text-sm text-[#6b7280]"
      aria-label={`Rated ${value} out of ${max}${reviewCount !== undefined ? ` from ${reviewCount} reviews` : ""}`}
    >
      <span aria-hidden="true" className="flex items-center gap-0.5 text-[#fbbf24]">
        {Array.from({ length: max }, (_, i) => (
          <Star
            key={i}
            fill={Math.min(1, Math.max(0, clamped - i))}
            size={size}
            clipId={`${uid}-star-${i}`}
          />
        ))}
      </span>

      <span>
        {value.toFixed(1)}
        {reviewCount !== undefined && ` (${reviewCount})`}
      </span>
    </p>
  );
}
