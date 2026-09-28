"use client";

import { Drawer } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import CloseIcon from "@/components/icons/CloseIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import AppButton from "@/components/ui/AppButton";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils/cn";
import { isActivePath } from "@/lib/utils/isActivePath";
import { useMobileMenuStore } from "@/store/useMobileMenuStore";

const DRAWER_STYLES = {
  body: { padding: 0 },
  section: { background: "transparent" },
};

/**
 * Hamburger toggle + full-height navigation drawer shown below the `lg` breakpoint.
 * Closes on navigation and on Escape (antd Drawer handles focus trapping and Escape).
 *
 * @param {object} props
 * @param {{ label: string, href: string }[]} props.mainLinks
 * @param {{ label: string, href: string }[]} props.authLinks
 */
export default function MobileMenu({ mainLinks, authLinks }) {
  const pathname = usePathname();
  const { open, openMenu, closeMenu } = useMobileMenuStore();
  const [signIn, signUp] = authLinks;

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={openMenu}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-neutral-50 transition-colors hover:bg-white/10 lg:hidden"
      >
        <MenuIcon />
      </button>

      <Drawer
        id="mobile-menu"
        open={open}
        onClose={closeMenu}
        placement="right"
        size="min(100vw, 22rem)"
        closable={false}
        styles={DRAWER_STYLES}
        rootClassName="lg:hidden"
        aria-label="Menu"
      >
        <div className="flex h-full flex-col bg-brand-grid px-6 pt-6 pb-10 text-neutral-50">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-12">
            <ul className="flex flex-col gap-2">
              {mainLinks.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-2xl px-4 py-3 font-heading text-heading-xs text-neutral-50 transition-colors hover:bg-white/10 hover:text-neutral-50",
                        active && "bg-white/10 text-lime-400",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <AppButton href={signUp.href} fullWidth>
              {signUp.label}
            </AppButton>
            <AppButton
              href={signIn.href}
              variant="ghost"
              size="lg"
              fullWidth
              className="border-white/40 text-neutral-50 hover:bg-white/10"
            >
              {signIn.label}
            </AppButton>
          </div>
        </div>
      </Drawer>
    </>
  );
}
