import TestimonialCard from "@/components/common/TestimonialCard";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Container from "@/components/ui/Container";
import GlowBackdrop from "@/components/ui/GlowBackdrop";
import Heading from "@/components/ui/Heading";

/** Figma "Testimonials_Frame" glows (positions relative to the frame at 1440px). */
const GLOWS = [
  { tone: "lime", x: 842, y: -241, size: 1137, opacity: 0.4 },
  { tone: "lime", x: 395, y: -138, size: 672, opacity: 0.6 },
  { tone: "blue", x: -442, y: 149, size: 1137, opacity: 0.24 },
];

/**
 * "Discover What Our Community Is Saying": split header and three testimonial cards.
 *
 * @param {object} props
 * @param {{ title: string, description: string }} props.content
 * @param {import("@/lib/data/testimonials").testimonials} props.testimonials
 */
export default function Testimonials({ content, testimonials }) {
  return (
    <GlowBackdrop
      as="section"
      glows={GLOWS}
      aria-labelledby="testimonials-title"
      className="py-20 lg:pt-[74px] lg:pb-[57px]"
    >
      <Container className="xl:px-[30px]">
        <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
          <Heading
            id="testimonials-title"
            size="m"
            className="text-black lg:max-w-[577px] lg:shrink-0"
          >
            {content.title}
          </Heading>
          <p className="text-body-l text-ink-700 lg:max-w-[580px]">{content.description}</p>
        </FadeIn>
        <Stagger
          as="ul"
          className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:mt-[72px] xl:grid-cols-3 xl:gap-[41px]"
        >
          {testimonials.map((testimonial) => (
            <StaggerItem as="li" key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </GlowBackdrop>
  );
}
