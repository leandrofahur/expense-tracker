import { cn } from "@/lib/utils";

function Typography({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-sm", className)} {...props} />;
}

export { Typography };
