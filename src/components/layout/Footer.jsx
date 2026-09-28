import Link from "next/link";
import NewsletterForm from "@/components/layout/NewsletterForm";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { SITE } from "@/lib/constants/site";
import { footer } from "@/lib/data/footer";

const linkClasses = "rounded-sm transition-colors hover:text-primary-800";

/** Link when the item has a destination, plain text otherwise. */
function FooterLink({ label, href }) {
  if (!href) return <span>{label}</span>;
  return (
    <Link href={href} className={linkClasses}>
      {label}
    </Link>
  );
}

/** Site footer: logo, newsletter signup, three link columns and the legal row. */
export default function Footer() {
  const { newsletter, columns, legal } = footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-950">
      <Container className="pt-14 pb-12 lg:pt-[70px]">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-[92px]">
          <div className="flex flex-col gap-[45px] xl:w-[528px]">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" className="mb-0.5" />
              <p className="text-body-s">{newsletter.intro}</p>
            </div>
            <div className="flex flex-col gap-6">
              <NewsletterForm
                placeholder={newsletter.placeholder}
                submitLabel={newsletter.submitLabel}
              />
              <p className="max-w-[504px] text-body-xs">{newsletter.disclaimer}</p>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 xl:w-[580px] xl:shrink-0"
          >
            {columns.map((column) => (
              <div key={column.title} className="xl:pt-12">
                <h2 className="sr-only">{column.title}</h2>
                <ul className="flex flex-col gap-4 text-body-s">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-neutral-200 pt-[22px] text-body-xs sm:flex-row sm:justify-between xl:mt-[129px]">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((item) => (
              <li key={item.label}>
                <FooterLink {...item} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
