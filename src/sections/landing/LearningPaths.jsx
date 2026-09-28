import LearningPathTile from "@/components/common/LearningPathTile";
import SectionHeader from "@/components/common/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import Container from "@/components/ui/Container";
import { ROUTES } from "@/lib/constants/routes";

/**
 * "Explore Diverse Learning Paths at Bytespace": centered header and six category tiles.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/landing").landing.learningPaths} props.content
 */
export default function LearningPaths({ content }) {
  return (
    <section
      aria-labelledby="learning-paths-title"
      className="bg-white pt-16 pb-20 lg:pt-[72px] lg:pb-30"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            id="learning-paths-title"
            title={content.title}
            description={content.description}
            size="s"
            descriptionClassName="max-w-[917px]"
          />
        </FadeIn>
        <Stagger
          as="ul"
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-[68px] lg:grid-cols-6 lg:gap-10"
        >
          {content.paths.map((path) => (
            <StaggerItem as="li" key={path.id}>
              <LearningPathTile
                label={path.label}
                icon={path.icon}
                href={`${ROUTES.courses}?q=${encodeURIComponent(path.query)}`}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
