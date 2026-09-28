import Image from "next/image";
import CourseCard from "@/components/common/CourseCard";
import ProgressStatCard from "@/components/common/ProgressStatCard";
import SectionHeader from "@/components/common/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import Float from "@/components/motion/Float";
import Container from "@/components/ui/Container";
import DecorShape from "@/components/ui/DecorShape";

/**
 * "Your Path to Professional Growth Starts Here!": copy + stats on the left, illustration
 * (course card, student photo, progress card, lime coil) on the right.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/landing").landing.growth} props.content
 * @param {import("@/lib/api/courses").Course} props.course showcased course
 */
export default function GrowthSection({ content, course }) {
  return (
    <section aria-labelledby="growth-title">
      <Container className="flex flex-col items-center gap-12 xl:flex-row xl:gap-[63px] xl:pl-[33px]">
        <FadeIn x={-32} y={0} className="flex w-full flex-col gap-10 xl:w-[574px] xl:shrink-0">
          <SectionHeader
            id="growth-title"
            title={content.title}
            description={content.description}
            align="start"
            titleClassName="text-neutral-950 xl:max-w-[577px]"
            descriptionClassName="max-w-2xl xl:max-w-[477px]"
          />
          <dl className="flex flex-wrap gap-x-14 gap-y-6">
            {content.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-body-l text-neutral-700">{stat.label}</dt>
                <dd className="font-heading text-display-xs text-primary-800">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <div className="relative h-[calc(552px*var(--stage-scale))] w-full [--stage-scale:0.52] xs:[--stage-scale:0.58] sm:[--stage-scale:0.9] lg:[--stage-scale:1] xl:h-[552px] xl:w-[621px] xl:shrink-0">
          <div className="absolute top-0 left-1/2 h-[552px] w-[621px] origin-top -translate-x-1/2 scale-(--stage-scale) xl:left-0 xl:translate-x-0">
            <div className="absolute top-0 left-0 w-[373px]">
              <CourseCard course={course} />
            </div>
            <FadeIn y={40} className="absolute top-3 left-0 w-[577px]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={577}
                height={540}
                sizes="(min-width: 1024px) 577px, 90vw"
                className="drop-shadow-float"
              />
            </FadeIn>
            <Float delay={0.6} className="absolute top-[213px] left-[345px]">
              <ProgressStatCard
                label={content.progressCard.label}
                value={content.progressCard.value}
                className="w-58"
              />
            </Float>
            <DecorShape
              shape="coil"
              tone="lime"
              size={216}
              float
              delay={1}
              className="top-[67px] left-[406px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
