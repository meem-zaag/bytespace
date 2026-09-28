import { ROUTES } from "@/lib/constants/routes";
import { buildMetadata } from "@/lib/utils/seo";
import { Suspense } from "react";
import { getAllCreators } from "@/lib/api/creators";
import { getCreatorsDirectoryContent } from "@/lib/api/creatorsDirectory";
import CreatorsGrid from "@/sections/creators/CreatorsGrid";
import CreatorsHero from "@/sections/creators/CreatorsHero";
import CreatorsHeroFromUrl from "@/sections/creators/CreatorsHeroFromUrl";

export const metadata = buildMetadata({
  title: "Creators",
  description: "Meet the designers, developers, analysts and storytellers teaching on ByteSpace.",
  path: ROUTES.creators,
});

export default async function CreatorsPage() {
  const [content, creators] = await Promise.all([getCreatorsDirectoryContent(), getAllCreators()]);

  return (
    <main id="main" className="flex-1">
      <Suspense fallback={<CreatorsHero content={content.hero} />}>
        <CreatorsHeroFromUrl content={content.hero} />
      </Suspense>
      <CreatorsGrid creators={creators} content={content} />
    </main>
  );
}
