"use client";

import { useSearchParams } from "next/navigation";
import CreatorsHero from "@/sections/creators/CreatorsHero";

/**
 * Reads `?q=` and renders `CreatorsHero`. Wrap in `<Suspense>` with a `CreatorsHero` fallback so
 * the hero is part of the static HTML.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/creatorsDirectory").creatorsDirectory.hero} props.content
 */
export default function CreatorsHeroFromUrl({ content }) {
  const query = useSearchParams().get("q") ?? "";
  return <CreatorsHero content={content} initialQuery={query} />;
}
