import { SITE } from "@/lib/constants/site";

/** @returns {import("next").MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: new URL("/sitemap.xml", SITE.url).toString(),
    host: SITE.url,
  };
}
