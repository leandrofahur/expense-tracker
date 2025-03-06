import { type ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonVariants } from "@/components/atoms/Button/Button.types";
import { buttonVariants } from "@/components/atoms/Button/variants";

import { cn } from "@/lib/utils";

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonVariants & ComponentProps<"button">) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

Button.displayName = "Button";
export { Button };
