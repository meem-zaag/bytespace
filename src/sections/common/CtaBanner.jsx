import FadeIn from "@/components/motion/FadeIn";
import AppButton from "@/components/ui/AppButton";
import Container from "@/components/ui/Container";
import DecorShape from "@/components/ui/DecorShape";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Heading from "@/components/ui/Heading";

/** 3D shapes at their Figma positions (1440 frame, CTA_Frame 34:1161); edge shapes hide on phones. */
const SHAPES = [
  {
    shape: "spring",
    tone: "lime",
    size: 387,
    className: "-top-[162px] -left-[122px] max-md:hidden",
  },
  { shape: "spring", tone: "white", size: 176, className: "top-[5px] left-[179px] max-lg:hidden" },
  { shape: "cone", tone: "white", size: 189, className: "top-[225px] -left-[50px] max-md:hidden" },
  {
    shape: "torus",
    tone: "lime",
    size: 344,
    className:
      "top-[298px] left-4 max-md:size-40 max-md:top-auto max-md:-bottom-16 max-md:-left-12",
  },
  { shape: "pyramid", tone: "lime", size: 189, className: "top-0 right-[173px] max-lg:hidden" },
  {
    shape: "cylinder",
    tone: "white",
    size: 372,
    className: "top-[5px] -right-[154px] max-md:size-40 max-md:-top-10 max-md:-right-16",
  },
  { shape: "coil", tone: "lime", size: 332, className: "top-[289px] right-0 max-md:hidden" },
];

/**
 * Brand-blue call-to-action band with 3D shapes ("Unlock Your Potential as a Creator").
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {{ label: string, href: string }} props.cta
 */
export default function CtaBanner({ title, description, cta }) {
  return (
    <GridBackdrop aria-labelledby="cta-banner-title" className="lg:h-[488px]">
      {SHAPES.map((item) => (
        <DecorShape key={`${item.shape}-${item.tone}`} {...item} />
      ))}
      <Container className="relative flex flex-col items-center py-24 text-center lg:pt-[85px] lg:pb-0">
        <FadeIn className="flex max-w-[964px] flex-col items-center gap-10">
          <Heading id="cta-banner-title" size="m" className="max-w-[710px] text-neutral-50">
            {title}
          </Heading>
          <p className="text-body-l text-neutral-50">{description}</p>
          <AppButton href={cta.href}>{cta.label}</AppButton>
        </FadeIn>
      </Container>
    </GridBackdrop>
  );
}
