import Link from "next/link";
import { cn } from "@/lib/utils/cn";

/**
 * Rounded filter/tab chip ("Featured", "Music", "About", "★ 5"). Lime when active.
 * Renders a `Link` with `href`, otherwise a toggle `<button>` exposing `aria-pressed`
 * (pass `role="tab"` + `aria-selected` via props when used as a tab).
 *
 * @param {object} props
 * @param {boolean} [props.active=false]
 * @param {string} [props.href]
 * @param {import("react").ReactNode} [props.icon] leading icon
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function Chip({ active = false, href, icon, className, children, ...rest }) {
  const classes = cn(
    "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-3xl px-4 py-3 text-label-m whitespace-nowrap transition-colors duration-200",
    active
      ? "bg-lime-400 text-neutral-950 hover:bg-lime-300"
      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
    className,
  );

  if (href) {
    return (
      <Link href={href} aria-current={active ? "page" : undefined} className={classes} {...rest}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={rest.role ? undefined : active}
      className={classes}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
