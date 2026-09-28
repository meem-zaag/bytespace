import Link from "next/link";
import { cn } from "@/lib/utils/cn";

/**
 * Square-ish outline button holding only an icon (pagination arrows, mobile menu toggle).
 * Always pass `label` so screen readers can announce it.
 *
 * @param {object} props
 * @param {string} props.label accessible name
 * @param {import("react").ReactNode} props.children the icon
 * @param {string} [props.href] renders a Next.js `Link`
 * @param {string} [props.className]
 */
export default function IconButton({ label, children, href, className, type = "button", ...rest }) {
  const classes = cn(
    "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-3xl border border-neutral-200 bg-white px-[15px] py-[11px] text-neutral-950 transition-colors duration-200",
    "hover:border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100",
    "disabled:pointer-events-none disabled:text-neutral-700 disabled:opacity-60",
    "aria-disabled:pointer-events-none aria-disabled:text-neutral-700 aria-disabled:opacity-60",
    className,
  );

  if (href) {
    return (
      <Link href={href} aria-label={label} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} aria-label={label} className={classes} {...rest}>
      {children}
    </button>
  );
}
