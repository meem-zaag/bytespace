import { BRAND_COLORS } from "@/lib/constants/brand";
import { SITE } from "@/lib/constants/site";

/** @returns {import("next").MetadataRoute.Manifest} */
export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: BRAND_COLORS.white,
    theme_color: BRAND_COLORS.blue,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
