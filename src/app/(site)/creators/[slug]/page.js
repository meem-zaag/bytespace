import { ROUTES } from "@/lib/constants/routes";
import { buildMetadata } from "@/lib/utils/seo";
import { notFound } from "next/navigation";
import { getCreatorProfileContent } from "@/lib/api/creatorProfile";
import { getCategories, getCourseLevels, getCoursesByCreator } from "@/lib/api/courses";
import { getCreatorBySlug, getCreatorSlugs } from "@/lib/api/creators";
import CreatorCourses from "@/sections/creator-details/CreatorCourses";
import CreatorHero from "@/sections/creator-details/CreatorHero";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getCreatorSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const creator = await getCreatorBySlug(slug);
  if (!creator) return {};
  return buildMetadata({
    title: creator.name,
    description: `${creator.headline}. ${creator.bio[0]}`.slice(0, 160),
    path: ROUTES.creator(creator.slug),
    image: creator.avatar,
    type: "profile",
  });
}

export default async function CreatorPage({ params }) {
  const { slug } = await params;
  const creator = await getCreatorBySlug(slug);
  if (!creator) notFound();

  const [content, courses, categories, levels] = await Promise.all([
    getCreatorProfileContent(),
    getCoursesByCreator(creator.id),
    getCategories(),
    getCourseLevels(),
  ]);

  return (
    <main id="main" className="flex-1">
      <CreatorHero creator={creator} content={content} />
      <CreatorCourses
        courses={courses}
        categories={categories}
        levels={levels}
        content={content.courses}
      />
    </main>
  );
}
