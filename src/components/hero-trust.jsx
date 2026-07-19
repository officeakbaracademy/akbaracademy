import Image from "next/image";
import { Star, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";

// The multi-colour Google "G" mark.
function GoogleG({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function StarRow({ tone }) {
  return (
    <div className="mt-1 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-3",
            tone === "green"
              ? "fill-[#00b67a] text-[#00b67a]"
              : "fill-gold text-gold"
          )}
        />
      ))}
    </div>
  );
}

function TrustItem({ icon, title, sub, stars, titleClassName, subClassName }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex w-14 shrink-0 items-center justify-center">
        {icon}
      </span>
      <div className="min-w-0 leading-tight">
        <div
          className={cn(
            "text-sm font-bold leading-tight text-white",
            titleClassName
          )}
        >
          {title}
        </div>
        <div className={cn("text-xs leading-tight text-white/70", subClassName)}>
          {sub}
        </div>
        {stars && <StarRow tone={stars} />}
      </div>
    </div>
  );
}

// Social-proof strip that sits at the foot of the hero.
export function HeroTrust() {
  return (
    <div className="pb-10 lg:pb-20">
      <div className="rounded-3xl bg-black/50 px-5 py-5 ring-1 ring-white/15 backdrop-blur-md sm:px-8">
        <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:gap-x-8 sm:gap-y-5 lg:flex lg:items-start lg:justify-between lg:gap-6">
          <TrustItem
            icon={
              <span className="flex items-center gap-1">
                <Image
                  src="/assets/cambridge-international.png"
                  alt="Cambridge International"
                  width={28}
                  height={28}
                  className="size-7 object-contain"
                />
                <Image
                  src="/assets/edexcel.png"
                  alt="Edexcel"
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
              </span>
            }
            title="Cambridge & Edexcel"
            titleClassName="lg:max-w-[7rem]"
            sub="endorsed author"
          />
          <TrustItem
            icon={<User className="size-7 text-gold" />}
            title="British qualified"
            sub="teachers and examiners"
            subClassName="lg:max-w-[6.5rem]"
          />
          <TrustItem
            icon={<Star className="size-7 fill-[#00b67a] text-[#00b67a]" />}
            title="Rated 4.9"
            sub="on Trustpilot"
            stars="green"
          />
          <TrustItem
            icon={<GoogleG className="size-7" />}
            title="Highly rated"
            sub="on Google"
            stars="gold"
          />
          <TrustItem
            icon={<Users className="size-7 text-gold" />}
            title="Over 3,000"
            sub="students taught to top grades"
            subClassName="lg:max-w-[6.5rem]"
          />
        </div>
      </div>
    </div>
  );
}
