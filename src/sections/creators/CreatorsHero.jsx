"use client";

import { useEffect } from "react";
import ScopedSearch from "@/components/common/ScopedSearch";
import Container from "@/components/ui/Container";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Heading from "@/components/ui/Heading";
import { useCreatorSearchStore } from "@/store/useCreatorSearchStore";

/**
 * Creators list hero: same composition as the Courses hero, with the scope set to Creators.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/creatorsDirectory").creatorsDirectory.hero} props.content
 * @param {string} [props.initialQuery=""] from `?q=`
 */
export default function CreatorsHero({ content, initialQuery = "" }) {
  const setQuery = useCreatorSearchStore((state) => state.setQuery);
  const resetCount = useCreatorSearchStore((state) => state.resetCount);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery, setQuery]);

  useEffect(() => {
    if (resetCount > 0) window.history.replaceState(null, "", window.location.pathname);
  }, [resetCount]);

  function handleSearch(query) {
    setQuery(query);
    const url = query ? `?q=${encodeURIComponent(query)}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  }

  return (
    <GridBackdrop
      aria-labelledby="creators-title"
      className="pt-28 pb-16 lg:h-90 lg:pt-[140px] lg:pb-0"
    >
      <Container className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-3">
          <Heading as="h1" id="creators-title" size="s" className="text-neutral-50">
            {content.title}
          </Heading>
          <p className="text-body-l text-neutral-100">{content.subtitle}</p>
        </div>
        <ScopedSearch
          key={`${initialQuery}-${resetCount}`}
          search={content.search}
          currentScope="creators"
          defaultQuery={resetCount > 0 ? "" : initialQuery}
          onSearch={handleSearch}
          className="w-full max-w-[624px]"
        />
      </Container>
    </GridBackdrop>
  );
}
