import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

// Adapted from shadcn/ui Button (MIT). Restyled to Bridge tokens;
// every size keeps a tap target of at least 48px.
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2.5 rounded-[var(--radius-control)] font-semibold whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 ease-[var(--ease-calm)] disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-paper hover:bg-accent-hover active:translate-y-px",
        secondary:
          "border-2 border-ink/15 bg-paper text-ink hover:border-accent hover:text-accent",
        ghost: "text-ink hover:bg-sage",
        link: "h-auto min-h-12 px-0 text-accent underline decoration-2 underline-offset-[6px] hover:decoration-accent/40",
      },
      size: {
        default: "min-h-12 px-6 text-body",
        lg: "min-h-14 px-7 text-[1.25rem]",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
