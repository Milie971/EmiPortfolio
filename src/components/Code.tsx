import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border hover:border-accent/50 border-accent transition-colors text-primary p-1 rounded-sm "
      )}
      {...props}
    />
  );
};
