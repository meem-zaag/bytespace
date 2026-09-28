import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getNotFoundContent } from "@/lib/api/notFound";
import NotFoundHero from "@/sections/not-found/NotFoundHero";

export const metadata = {
  title: "Page not found",
  description: "The page you are looking for doesn’t exist.",
};

/** Site-wide 404 (outside the (site) group, so it renders the chrome itself). */
export default async function NotFound() {
  const content = await getNotFoundContent();

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <NotFoundHero content={content} />
      </main>
      <Footer />
    </>
  );
}
