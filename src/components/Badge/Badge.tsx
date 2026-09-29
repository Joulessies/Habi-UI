import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "error";

type BadgeProps = {
  variant?: BadgeVariant;
  icon?: ReactNode;
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export function Badge({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: BadgeProps) {
  const variantClasses: Record<BadgeVariant, string> = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium [&_svg]:size-[1em] [&_svg]:shrink-0 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
