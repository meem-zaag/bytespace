"use client";

import CreatorCard from "@/components/common/CreatorCard";
import EmptyState from "@/components/common/EmptyState";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import AppButton from "@/components/ui/AppButton";
import Container from "@/components/ui/Container";
import { useCreatorSearchStore } from "@/store/useCreatorSearchStore";

const normalize = (text) => text.toLowerCase().trim();

/**
 * Grid of creator cards filtered by the hero search (name, headline or bio).
 *
 * @param {object} props
 * @param {import("@/lib/api/creators").Creator[]} props.creators
 * @param {typeof import("@/lib/data/creatorsDirectory").creatorsDirectory} props.content
 */
export default function CreatorsGrid({ creators, content }) {
  const query = normalize(useCreatorSearchStore((state) => state.query));
  const reset = useCreatorSearchStore((state) => state.reset);
  const visible = query
    ? creators.filter((creator) =>
        [creator.name, creator.headline, ...creator.bio].some((text) =>
          normalize(text).includes(query),
        ),
      )
    : creators;

  return (
    <section aria-label="Creators" className="py-12 lg:py-[72px]">
      <Container>
        <p role="status" className="sr-only">
          {visible.length}{" "}
          {visible.length === 1 ? content.results.singular : content.results.plural}
        </p>
        {visible.length > 0 ? (
          <Stagger
            key={query}
            as="ul"
            className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
          >
            {visible.map((creator) => (
              <StaggerItem as="li" key={creator.id}>
                <CreatorCard creator={creator} headingLevel="h2" />
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <EmptyState
            title={content.empty.title}
            description={content.empty.description}
            action={
              <AppButton variant="outline" size="toolbar" onClick={reset}>
                {content.empty.actionLabel}
              </AppButton>
            }
          />
        )}
      </Container>
    </section>
  );
}
