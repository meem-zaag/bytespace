"use client";

import { useEffect } from "react";
import ScopedSearch from "@/components/common/ScopedSearch";
import Container from "@/components/ui/Container";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Heading from "@/components/ui/Heading";
import { useCourseFiltersStore } from "@/store/useCourseFiltersStore";

/**
 * Courses page hero: title and scoped search. `initialQuery` comes from `?q=` (links from the
 * landing search, footer and learning paths) and is kept in the catalog filter store and the URL.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/catalog").catalog.hero} props.content
 * @param {string} [props.initialQuery=""]
 */
export default function CoursesHero({ content, initialQuery = "" }) {
  const setFilters = useCourseFiltersStore((state) => state.setFilters);
  const resetCount = useCourseFiltersStore((state) => state.resetCount);

  useEffect(() => {
    setFilters({ query: initialQuery });
  }, [initialQuery, setFilters]);

  useEffect(() => {
    if (resetCount > 0) window.history.replaceState(null, "", window.location.pathname);
  }, [resetCount]);

  function handleSearch(query) {
    setFilters({ query });
    const url = query ? `?q=${encodeURIComponent(query)}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  }

  return (
    <GridBackdrop
      aria-labelledby="courses-title"
      className="pt-28 pb-16 lg:h-90 lg:pt-[164px] lg:pb-0"
    >
      <Container className="flex flex-col items-center gap-8">
        <Heading as="h1" id="courses-title" size="s" className="text-center text-neutral-50">
          {content.title}
        </Heading>
        <ScopedSearch
          key={`${initialQuery}-${resetCount}`}
          search={content.search}
          currentScope="courses"
          defaultQuery={resetCount > 0 ? "" : initialQuery}
          onSearch={handleSearch}
          className="w-full max-w-[624px]"
        />
      </Container>
    </GridBackdrop>
  );
}
