import FadeIn from "@/components/motion/FadeIn";
import AppButton from "@/components/ui/AppButton";
import Container from "@/components/ui/Container";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Heading from "@/components/ui/Heading";

/**
 * 404 hero (Figma `63:409`): oversized fading "404", message and a way back home.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/notFound").notFound} props.content
 */
export default function NotFoundHero({ content }) {
  return (
    <GridBackdrop
      aria-labelledby="not-found-title"
      className="pt-28 pb-20 lg:h-[957px] lg:pt-[160px] lg:pb-0"
    >
      <Container className="relative flex flex-col items-center text-center">
        <p
          aria-hidden="true"
          className="text-fade-lime font-heading text-[clamp(9rem,33vw,30rem)] leading-none font-semibold tracking-[-0.02em] select-none lg:pt-[9px]"
        >
          {content.code}
        </p>
        <FadeIn
          immediate
          className="relative -mt-[0.35em] flex max-w-[935px] flex-col items-center gap-8 text-[clamp(9rem,33vw,30rem)] lg:-mt-[128px]"
        >
          <Heading as="h1" id="not-found-title" size="l" className="text-white">
            {content.title}
          </Heading>
          <p className="text-body-l text-neutral-50">{content.description}</p>
          <AppButton href={content.cta.href}>{content.cta.label}</AppButton>
        </FadeIn>
      </Container>
    </GridBackdrop>
  );
}
