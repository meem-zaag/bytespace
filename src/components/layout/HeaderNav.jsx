"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { isActivePath } from "@/lib/utils/isActivePath";

/**
 * Center navigation of the desktop header. The current page is set in medium weight
 * (Figma shows the active "Home" in Satoshi Medium).
 *
 * @param {object} props
 * @param {{ label: string, href: string }[]} props.links
 */
export default function HeaderNav({ links }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex items-start gap-6">
        {links.map((link) => {
          const active = isActivePath(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-sm text-body-m text-neutral-50 transition-colors hover:text-lime-400",
                  active && "text-label-m",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
