import { getAuthContent } from "@/lib/api/auth";
import { getCourseBySlug } from "@/lib/api/courses";
import { getLandingContent } from "@/lib/api/landing";
import { getLearnersByIds } from "@/lib/api/learners";
import AuthShell from "@/sections/auth/AuthShell";
import AuthShowcase from "@/sections/auth/AuthShowcase";
import SignUpForm from "@/sections/auth/SignUpForm";

export const metadata = {
  title: "Create an account",
  description: "Sign up for ByteSpace in seconds and start learning from creators you love.",
};

export default async function SignUpPage() {
  const [auth, landing] = await Promise.all([getAuthContent(), getLandingContent()]);
  const [backCourse, frontCourse, people] = await Promise.all([
    getCourseBySlug(auth.showcase.backCourseSlug),
    getCourseBySlug(auth.showcase.frontCourseSlug),
    getLearnersByIds(landing.hero.happyStudents.learnerIds),
  ]);

  return (
    <AuthShell
      intro={auth.signUp.intro}
      showcase={
        <AuthShowcase
          backCourse={backCourse}
          frontCourse={frontCourse}
          happyStudents={landing.hero.happyStudents}
          people={people}
        />
      }
    >
      <SignUpForm content={auth.signUp} />
    </AuthShell>
  );
}
