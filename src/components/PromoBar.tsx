import { siteConfig } from "@/config/site";

export function PromoBar() {
  return (
    <div className="bg-ink px-4 py-2 text-center text-sm font-medium text-cream">
      {siteConfig.promo}
    </div>
  );
}
