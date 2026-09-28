import Image from "next/image";
import HappyStudentsCard from "@/components/common/HappyStudentsCard";
import ProgressStatCard from "@/components/common/ProgressStatCard";
import TopicStatCard from "@/components/common/TopicStatCard";
import Float from "@/components/motion/Float";
import AppButton from "@/components/ui/AppButton";
import Container from "@/components/ui/Container";
import DecorShape from "@/components/ui/DecorShape";
import SearchInput from "@/components/ui/form/SearchInput";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Heading from "@/components/ui/Heading";
import { ROUTES } from "@/lib/constants/routes";

/** 3D shapes at their Figma positions inside the 1440×1024 hero frame. */
const SHAPES = [
  { shape: "spring", tone: "lime", size: 387, className: "top-[221px] left-[-122px]", delay: 0 },
  { shape: "spring", tone: "white", size: 176, className: "top-[477px] left-[184px]", delay: 1.2 },
  { shape: "torus", tone: "white", size: 344, className: "top-[681px] left-[14px]", delay: 0.6 },
  {
    shape: "cylinder",
    tone: "lime",
    size: 372,
    className: "top-[220px] left-[1227px]",
    delay: 0.9,
  },
  {
    shape: "pyramid",
    tone: "white",
    size: 189,
    className: "top-[464px] left-[1104px]",
    delay: 1.5,
  },
  { shape: "coil", tone: "white", size: 332, className: "top-[672px] left-[1124px]", delay: 0.3 },
];

/**
 * Landing hero: headline, search (GET /courses?q=…), student photo on the lime ring,
 * floating stat cards and 3D shapes. Desktop matches the 1440×1024 frame; the illustration
 * stage scales down on tablets and drops the side cards on phones.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/landing").landing.hero} props.content
 * @param {{ id: string, name: string, avatar: { src: string, alt: string } }[]} props.happyStudents
 */
export default function LandingHero({ content, happyStudents }) {
  const { title, subtitle, search, image, topicCard, progressCard } = content;

  return (
    <GridBackdrop aria-labelledby="hero-title" className="lg:h-256">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-[1440px] -translate-x-1/2 lg:block"
      >
        {SHAPES.map(({ delay, ...shape }) => (
          <DecorShape key={`${shape.shape}-${shape.tone}`} {...shape} float delay={delay} />
        ))}
      </div>

      <Container className="relative z-10 flex flex-col items-center pt-32 text-center sm:pt-36 lg:pt-[169px]">
        <div className="flex max-w-[935px] flex-col items-center gap-8">
          <Heading as="h1" id="hero-title" size="l" className="text-white">
            {title}
          </Heading>
          <p className="max-w-[819px] text-body-l text-neutral-100">{subtitle}</p>
        </div>
        <div className="mt-10 w-full max-w-[581px] lg:mt-[60px]">
          <form
            action={ROUTES.courses}
            role="search"
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:gap-4"
          >
            <SearchInput
              name="q"
              ariaLabel={search.label}
              placeholder={search.placeholder}
              className="sm:flex-1"
            />
            <AppButton type="submit">{search.submitLabel}</AppButton>
          </form>
        </div>
      </Container>

      <div className="relative mt-10 h-[calc(512px*var(--stage-scale))] [--stage-scale:0.62] sm:[--stage-scale:0.8] lg:mt-0 lg:h-128 lg:[--stage-scale:1]">
        <div className="absolute top-0 left-1/2 h-128 w-[1440px] origin-top -translate-x-1/2 scale-(--stage-scale)">
          <div
            aria-hidden="true"
            className="absolute top-[70px] left-[145px] size-[1149px] rounded-full border-[320px] border-lime-500"
          />
          <div className="absolute top-0 left-[431px] w-[578px]">
            <Image
              src={image.src}
              alt={image.alt}
              width={729}
              height={715}
              priority
              sizes="(min-width: 1024px) 729px, 75vw"
              className="-mt-[23.5px] -ml-[23.5px] w-[729px] max-w-none"
            />
          </div>
          <Float delay={0.4} className="absolute top-[127px] left-[404px] max-sm:hidden">
            <TopicStatCard title={topicCard.title} stats={topicCard.stats} />
          </Float>
          <Float delay={1.1} className="absolute top-[139px] left-[842px] max-sm:hidden">
            <ProgressStatCard
              label={progressCard.label}
              value={progressCard.value}
              className="w-58"
            />
          </Float>
          <Float delay={0.8} className="absolute top-[325px] left-[328px] max-sm:hidden">
            <HappyStudentsCard
              title={content.happyStudents.title}
              rating={content.happyStudents.rating}
              ratingCount={content.happyStudents.ratingCount}
              countLabel={content.happyStudents.countLabel}
              people={happyStudents}
              className="w-[258px]"
            />
          </Float>
        </div>
      </div>
    </GridBackdrop>
  );
}
