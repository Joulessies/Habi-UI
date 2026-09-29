import type { ReactNode } from "react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { IconCart, IconWishlist } from "../Icons";
import { Rating } from "../Rating";

export type ProductCardProps = {
  name: string;
  image: string;
  price: string;
  category?: string;
  originalPrice?: string;
  badge?: string;
  badgeIcon?: ReactNode;
  rating?: number;
  reviewCount?: number;
  href?: string;
  isOutOfStock?: boolean;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  cartIcon?: ReactNode;
  wishlistIcon?: ReactNode;
  className?: string;
};

export function ProductCard({
  name,
  image,
  price,
  category,
  originalPrice,
  badge,
  badgeIcon,
  rating,
  reviewCount,
  href,
  isOutOfStock = false,
  onAddToCart,
  onWishlist,
  cartIcon = <IconCart />,
  wishlistIcon = <IconWishlist />,
  className = "",
}: ProductCardProps) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white transition-[border-color] duration-200 hover:border-[#c0c0c0] ${className}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f4f4]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
        />
        {badge && (
          <Badge
            icon={badgeIcon}
            className="absolute left-3 top-3 bg-[#17201d] px-2.5 py-1 text-[0.7rem] tracking-wide"
          >
            {badge}
          </Badge>
        )}
        {onWishlist && (
          <button
            type="button"
            aria-label={`Add ${name} to wishlist`}
            onClick={onWishlist}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-[#17201d] backdrop-blur-sm transition duration-150 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176b5b] focus-visible:ring-offset-1 [&_svg]:size-[1.1em]"
          >
            {wishlistIcon}
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        {category && (
          <p className="text-xs font-medium text-[#6b7280]">{category}</p>
        )}
        <h2 className="text-[0.9375rem] font-semibold leading-snug tracking-[-0.01em] text-[#17201d] line-clamp-2">
          {href ? (
            <a
              href={href}
              className="focus:outline-none focus-visible:underline"
            >
              {name}
            </a>
          ) : (
            name
          )}
        </h2>

        {rating !== undefined && (
          <Rating value={rating} reviewCount={reviewCount} />
        )}

        <div className="mt-auto flex items-baseline gap-2 pt-3">
          <p className="text-base font-semibold tracking-[-0.01em] text-[#17201d]">
            {price}
          </p>
          {originalPrice && (
            <p className="text-sm text-[#9ca3af] line-through">
              {originalPrice}
            </p>
          )}
        </div>

        <Button
          variant="primary"
          onClick={onAddToCart}
          disabled={isOutOfStock}
          className="mt-2 w-full"
        >
          {!isOutOfStock && cartIcon}
          {isOutOfStock ? "Out of stock" : "Add to cart"}
        </Button>
      </div>
    </article>
  );
}
