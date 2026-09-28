import { Suspense } from "react";
import { getCatalogContent } from "@/lib/api/catalog";
import CoursesHero from "@/sections/courses/CoursesHero";

export default async function CoursesPage() {
  const content = await getCatalogContent();

  return (
    <main id="main" className="flex-1">
      <Suspense>
        <CoursesHero content={content.hero} />
      </Suspense>
    </main>
  );
}
