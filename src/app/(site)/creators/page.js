import { Suspense } from "react";
import { getAllCreators } from "@/lib/api/creators";
import { getCreatorsDirectoryContent } from "@/lib/api/creatorsDirectory";
import CreatorsGrid from "@/sections/creators/CreatorsGrid";
import CreatorsHero from "@/sections/creators/CreatorsHero";

export const metadata = {
  title: "Creators",
  description: "Meet the designers, developers, analysts and storytellers teaching on ByteSpace.",
};

export default async function CreatorsPage() {
  const [content, creators] = await Promise.all([getCreatorsDirectoryContent(), getAllCreators()]);

  return (
    <main id="main" className="flex-1">
      <Suspense>
        <CreatorsHero content={content.hero} />
      </Suspense>
      <CreatorsGrid creators={creators} content={content} />
    </main>
  );
}
