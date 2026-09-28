import Image from "next/image";
import CheckList from "@/components/common/CheckList";
import HappyStudentsCard from "@/components/common/HappyStudentsCard";
import RevenueCard from "@/components/common/RevenueCard";
import FadeIn from "@/components/motion/FadeIn";
import Float from "@/components/motion/Float";
import Container from "@/components/ui/Container";
import DecorShape from "@/components/ui/DecorShape";
import Heading from "@/components/ui/Heading";

/**
 * "Create & Manage Courses Easily.": creator illustration (photo, revenue cards, happy students,
 * lime spring) on the left, copy and benefits on the right.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/landing").landing.createManage} props.content
 * @param {typeof import("@/lib/data/landing").landing.hero.happyStudents} props.happyStudents
 * @param {{ id: string, name: string, avatar: { src: string, alt: string } }[]} props.people
 */
export default function CreateManageSection({ content, happyStudents, people }) {
  return (
    <section aria-labelledby="create-manage-title">
      <Container className="flex flex-col-reverse items-center gap-12 xl:flex-row xl:gap-[79px] xl:pl-[33px]">
        <div className="relative h-[calc(596px*var(--stage-scale))] w-full [--stage-scale:0.55] xs:[--stage-scale:0.6] sm:[--stage-scale:0.9] lg:[--stage-scale:1] xl:h-[596px] xl:w-[541px] xl:shrink-0">
          <div className="absolute top-0 left-1/2 h-[596px] w-[662px] origin-top -translate-x-1/2 scale-(--stage-scale) xl:left-0 xl:translate-x-0">
            <Float delay={0.2} className="absolute top-11 left-0">
              <RevenueCard {...content.revenue} className="w-58" />
            </Float>
            <Float delay={0.9} className="absolute top-[194px] left-0">
              <RevenueCard {...content.yearToDate} />
            </Float>
            <FadeIn y={40} className="absolute top-0 left-7 w-[435px]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={588}
                height={772}
                sizes="(min-width: 1024px) 588px, 80vw"
                className="-mt-[24.6px] -ml-[24.6px] w-[588px] max-w-none"
              />
            </FadeIn>
            <DecorShape
              shape="spring"
              tone="lime"
              size={216}
              float
              delay={0.5}
              className="top-[114px] left-[303px]"
            />
            <Float delay={1.3} className="absolute top-[413px] left-[283px]">
              <HappyStudentsCard
                title={happyStudents.title}
                rating={happyStudents.rating}
                ratingCount={happyStudents.ratingCount}
                countLabel={happyStudents.countLabel}
                people={people}
                className="w-[258px]"
              />
            </Float>
          </div>
        </div>

        <FadeIn x={32} y={0} className="flex w-full flex-col gap-10 xl:w-[580px] xl:shrink-0">
          <Heading id="create-manage-title" size="m" className="text-neutral-950 xl:max-w-[400px]">
            {content.title}
          </Heading>
          <p className="max-w-[574px] text-body-l leading-7 text-neutral-700">
            <strong className="font-medium text-neutral-950">{content.brand}</strong>{" "}
            {content.description}
          </p>
          <CheckList items={content.benefits} />
        </FadeIn>
      </Container>
    </section>
  );
}
