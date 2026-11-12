import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className="flex items-center gap-2 rounded-lg"
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 -rotate-6 place-items-center rounded-lg border-2 border-ink bg-lime text-xl font-black shadow-pop-sm"
      >
        y
      </span>
      <span className="text-2xl font-black lowercase tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
}
