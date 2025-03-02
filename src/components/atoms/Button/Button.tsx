import { type ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonVariants } from "./Button.types";
import { buttonVariants } from "./variants";

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
