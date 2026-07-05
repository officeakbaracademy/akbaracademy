import Image from "next/image";
import { cn } from "@/lib/utils";

// Theme-aware subject icon (white variant on dark backgrounds).
export function SubjectIcon({ subject, className, size = 40 }) {
  return (
    <span className={cn("relative inline-block", className)} style={{ height: size, width: size }}>
      <Image
        src={subject.icon}
        alt={subject.name}
        width={size}
        height={size}
        className="block h-full w-full object-contain dark:hidden"
      />
      <Image
        src={subject.iconDark}
        alt={subject.name}
        width={size}
        height={size}
        className="hidden h-full w-full object-contain dark:block"
      />
    </span>
  );
}
