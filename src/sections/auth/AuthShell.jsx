import FadeIn from "@/components/motion/FadeIn";
import Container from "@/components/ui/Container";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Logo from "@/components/ui/Logo";

/**
 * Split auth screen (Figma Register / Login frames): brand grid, logo mark, intro copy and the
 * decorative showcase on the left, white form card on the right. Below `xl` the showcase is
 * hidden and the card sits under the intro.
 *
 * @param {object} props
 * @param {{ title: string, description: string }} props.intro
 * @param {import("react").ReactNode} props.showcase decorative stack (see `AuthShowcase`)
 * @param {import("react").ReactNode} props.children form card content (controls its own spacing)
 */
export default function AuthShell({ intro, showcase, children }) {
  return (
    <GridBackdrop as="main" id="main" className="min-h-dvh xl:min-h-256">
      <Container className="relative flex min-h-dvh flex-col gap-10 pt-8 pb-12 xl:min-h-256 xl:flex-row xl:items-start xl:justify-between xl:gap-0 xl:pt-0 xl:pb-0">
        {showcase}
        <div className="relative flex flex-col gap-8 xl:w-[475px] xl:gap-0 xl:pl-0.5">
          <Logo markOnly className="self-start xl:mt-[35px]" />
          <FadeIn immediate className="flex flex-col gap-4 xl:mt-[50px]">
            <p className="font-heading text-heading-xs text-neutral-50">{intro.title}</p>
            <p className="text-body-l text-neutral-50">{intro.description}</p>
          </FadeIn>
        </div>
        <FadeIn
          immediate
          delay={0.1}
          className="relative mx-auto flex w-full max-w-[579px] flex-col rounded-card bg-white px-6 py-10 text-neutral-950 sm:px-[63px] sm:pt-[61px] sm:pb-10 xl:mx-0 xl:mt-30 xl:min-h-196"
        >
          {children}
        </FadeIn>
      </Container>
    </GridBackdrop>
  );
}
