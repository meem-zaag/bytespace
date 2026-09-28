import { getAuthContent } from "@/lib/api/auth";
import { getCourseBySlug } from "@/lib/api/courses";
import { getLandingContent } from "@/lib/api/landing";
import { getLearnersByIds } from "@/lib/api/learners";
import AuthShell from "@/sections/auth/AuthShell";
import AuthShowcase from "@/sections/auth/AuthShowcase";
import SignInForm from "@/sections/auth/SignInForm";

export const metadata = {
  title: "Sign in",
  description: "Sign in to ByteSpace and continue learning where you left off.",
};

export default async function SignInPage() {
  const [auth, landing] = await Promise.all([getAuthContent(), getLandingContent()]);
  const [backCourse, frontCourse, people] = await Promise.all([
    getCourseBySlug(auth.showcase.backCourseSlug),
    getCourseBySlug(auth.showcase.frontCourseSlug),
    getLearnersByIds(landing.hero.happyStudents.learnerIds),
  ]);

  return (
    <AuthShell
      intro={auth.signIn.intro}
      showcase={
        <AuthShowcase
          backCourse={backCourse}
          frontCourse={frontCourse}
          happyStudents={landing.hero.happyStudents}
          people={people}
        />
      }
    >
      <SignInForm content={auth.signIn} />
    </AuthShell>
  );
}
