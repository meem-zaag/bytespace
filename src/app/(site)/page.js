import { getLandingContent } from "@/lib/api/landing";
import { getLearnersByIds } from "@/lib/api/learners";
import LandingHero from "@/sections/landing/LandingHero";
import PartnerLogos from "@/sections/landing/PartnerLogos";

export default async function HomePage() {
  const content = await getLandingContent();
  const happyStudents = await getLearnersByIds(content.hero.happyStudents.learnerIds);

  return (
    <main id="main" className="flex-1">
      <LandingHero content={content.hero} happyStudents={happyStudents} />
      <PartnerLogos partners={content.partners} />
    </main>
  );
}
