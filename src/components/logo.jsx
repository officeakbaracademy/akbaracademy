import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// The logo art carries the brand cyan + gold. logo-light has dark text (for
// light backgrounds); logo-dark has white text (for dark backgrounds).
export function Logo({ className, priority = false }) {
  return (
    <Link
      href="/"
      aria-label="Akbar Academy home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/assets/logo-light.png"
        alt="Akbar Academy"
        width={600}
        height={250}
        priority={priority}
        className="block h-14 w-auto dark:hidden"
      />
      <Image
        src="/assets/logo-dark.png"
        alt="Akbar Academy"
        width={600}
        height={250}
        priority={priority}
        className="hidden h-14 w-auto dark:block"
      />
    </Link>
  );
}
