import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import Container from "@/components/ui/Container";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Heading from "@/components/ui/Heading";
import Pill from "@/components/ui/Pill";
import CreatorFollow from "@/sections/creator-details/CreatorFollow";

/**
 * Creator profile hero (Figma `60:2155`): photo, name + "Creator" badge, headline, bio,
 * course/follower pills and the Follow button.
 *
 * @param {object} props
 * @param {import("@/lib/api/creators").Creator} props.creator
 * @param {typeof import("@/lib/data/creatorProfile").creatorProfile} props.content
 */
export default function CreatorHero({ creator, content }) {
  return (
    <GridBackdrop
      aria-labelledby="creator-name"
      className="pt-28 pb-14 lg:min-h-148 lg:pt-[172px] lg:pb-20"
    >
      <Container>
        <FadeIn immediate className="flex flex-col gap-10 lg:pl-0.5">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Image
              src={creator.avatar.src}
              alt={creator.avatar.alt}
              width={96}
              height={96}
              priority
              sizes="96px"
              className="size-24 rounded-3xl object-cover"
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Heading as="h1" id="creator-name" size="s" className="text-neutral-50">
                  {creator.name}
                </Heading>
                <Pill tone="lime">{content.badge}</Pill>
              </div>
              <p className="text-body-l text-neutral-50">{creator.headline}</p>
            </div>
          </div>
          <div className="flex flex-col text-body-l text-neutral-50">
            {creator.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <CreatorFollow
            creatorName={creator.name}
            courseCount={creator.courseCount}
            followers={creator.followers}
            content={content}
          />
        </FadeIn>
      </Container>
    </GridBackdrop>
  );
}
