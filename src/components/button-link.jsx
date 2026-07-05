import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// A Next.js Link styled as a button (real <a>, correct semantics — avoids the
// Base UI "expected a native <button>" warning you get from Button render=Link).
export function ButtonLink({ className, variant, size, ...props }) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
