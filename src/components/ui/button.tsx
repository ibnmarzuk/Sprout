import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        cream:
          "bg-cream text-bg shadow-[0_0_0_1px_rgba(232,217,176,0.35)] hover:bg-cream/90",
        leaf: "bg-primary text-primary-fg hover:bg-primary/90",
        outline:
          "bg-transparent text-fg shadow-[0_0_0_1px_rgba(232,239,228,0.16)] hover:bg-fg/5",
        ghost: "bg-transparent text-fg hover:bg-fg/6",
      },
      size: {
        md: "h-11 rounded-lg px-4 text-sm",
        lg: "h-12 rounded-xl px-5 text-sm",
        sm: "h-9 rounded-md px-3 text-xs",
        icon: "size-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "cream",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
