import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./variants";

export type ButtonVariants = VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
};
