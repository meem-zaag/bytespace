import Header from "@/components/layout/Header";

/** Pages with the standard chrome (header over the hero). Auth pages live outside this group. */
export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
