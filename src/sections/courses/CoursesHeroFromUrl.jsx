"use client";

import { useSearchParams } from "next/navigation";
import CoursesHero from "@/sections/courses/CoursesHero";

/**
 * Reads `?q=` and renders `CoursesHero`. Wrap in `<Suspense>` with a `CoursesHero` fallback so the
 * hero is part of the static HTML.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/catalog").catalog.hero} props.content
 */
export default function CoursesHeroFromUrl({ content }) {
  const query = useSearchParams().get("q") ?? "";
  return <CoursesHero content={content} initialQuery={query} />;
}
