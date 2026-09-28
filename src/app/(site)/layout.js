import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

/** Pages with the standard chrome (header over the hero, footer). Auth pages live outside this group. */
export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
