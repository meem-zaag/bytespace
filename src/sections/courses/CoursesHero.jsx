"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ScopedSearch from "@/components/common/ScopedSearch";
import Container from "@/components/ui/Container";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Heading from "@/components/ui/Heading";
import { useCourseFiltersStore } from "@/store/useCourseFiltersStore";

/**
 * Courses page hero: title and scoped search. Reads `?q=` once (links from the landing search,
 * footer and learning paths) and keeps it in the catalog filter store and the URL.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/catalog").catalog.hero} props.content
 */
export default function CoursesHero({ content }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const setFilters = useCourseFiltersStore((state) => state.setFilters);

  useEffect(() => {
    setFilters({ query: initialQuery });
  }, [initialQuery, setFilters]);

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
          key={initialQuery}
          search={content.search}
          currentScope="courses"
          defaultQuery={initialQuery}
          onSearch={handleSearch}
          className="w-full max-w-[624px]"
        />
      </Container>
    </GridBackdrop>
  );
}
