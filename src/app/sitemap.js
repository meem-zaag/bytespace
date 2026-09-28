import { ROUTES } from "@/lib/constants/routes";
import { SITE } from "@/lib/constants/site";
import { getCourseSlugs } from "@/lib/api/courses";
import { getCreatorSlugs } from "@/lib/api/creators";

/** @returns {Promise<import("next").MetadataRoute.Sitemap>} */
export default async function sitemap() {
  const [courseSlugs, creatorSlugs] = await Promise.all([getCourseSlugs(), getCreatorSlugs()]);
  const lastModified = new Date();
  const entry = (path, priority, changeFrequency = "weekly") => ({
    url: new URL(path, SITE.url).toString(),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry(ROUTES.home, 1),
    entry(ROUTES.courses, 0.9, "daily"),
    entry(ROUTES.creators, 0.8),
    ...courseSlugs.map((slug) => entry(ROUTES.course(slug), 0.8)),
    ...creatorSlugs.map((slug) => entry(ROUTES.creator(slug), 0.6)),
    entry(ROUTES.signUp, 0.4, "yearly"),
    entry(ROUTES.signIn, 0.3, "yearly"),
  ];
}
