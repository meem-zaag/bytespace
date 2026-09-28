import { notFound } from "next/navigation";
import { getCreatorProfileContent } from "@/lib/api/creatorProfile";
import { getCreatorBySlug, getCreatorSlugs } from "@/lib/api/creators";
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
  return { title: creator.name, description: creator.headline };
}

export default async function CreatorPage({ params }) {
  const { slug } = await params;
  const creator = await getCreatorBySlug(slug);
  if (!creator) notFound();

  const content = await getCreatorProfileContent();

  return (
    <main id="main" className="flex-1">
      <CreatorHero creator={creator} content={content} />
    </main>
  );
}
