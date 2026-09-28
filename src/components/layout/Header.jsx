import Link from "next/link";
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon";
import HeaderNav from "@/components/layout/HeaderNav";
import MobileMenu from "@/components/layout/MobileMenu";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { AUTH_NAV, MAIN_NAV } from "@/lib/constants/navigation";
import { ROUTES } from "@/lib/constants/routes";

/**
 * Transparent site header laid over each page's blue hero (the grid runs behind it, as in Figma).
 * Desktop: logo, centered main nav, account links and bag. Below `lg`: logo + menu drawer.
 */
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-neutral-50">
      <Container className="relative flex h-20 items-center justify-between lg:h-header lg:items-start">
        <Logo className="w-36 sm:w-auto lg:mt-[35px] lg:ml-0.5" />

        <div className="absolute top-[47px] left-1/2 hidden -translate-x-1/2 lg:block">
          <HeaderNav links={MAIN_NAV} />
        </div>

        <div className="hidden items-center gap-6 lg:mt-12 lg:flex">
          {AUTH_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm text-body-m leading-6 transition-colors hover:text-lime-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ROUTES.courses}
            aria-label="Your bag is empty. Browse courses"
            className="rounded-sm transition-colors hover:text-lime-400"
          >
            <ShoppingBagIcon />
          </Link>
        </div>

        <MobileMenu mainLinks={MAIN_NAV} authLinks={AUTH_NAV} />
      </Container>
    </header>
  );
}
